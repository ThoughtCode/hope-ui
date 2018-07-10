import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withStyles } from 'material-ui/styles';
import { Link } from 'react-router-dom';
import Grid from 'material-ui/Grid';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props'

import * as actions from '../../../store/actions';
import cls from './Register.css';
import FacebookIcon from '../../../assets/facebookicon.svg';
import FormRegister from '../FormRegister/FormRegister';

const styles = theme => ({
  input: {
    margin: theme.spacing.unit,
  },
});

class Register extends Component {
  state = {
    registerForm: {
      first_name: {
        label: 'Nombre',
        value: '',
        validation: {
          required: true,
        },
        valid: false,
        touched: false,
        errorText: null,
      },
      last_name: {
        elementType: 'input',
        label: 'Apellido',
        elementConfig: {
          type: 'text',
          placeholder: 'Apellido',
        },
        value: '',
        validation: {
          required: true,
        },
        valid: false,
        touched: false,
        errorText: null,
      },
      email: {
        elementType: 'input',
        label: 'Correo',
        elementConfig: {
          type: 'email',
          placeholder: 'ejemplo@ejemplo.com',
        },
        value: '',
        validation: {
          required: true,
          isEmail: true,
        },
        valid: false,
        touched: false,
        errorText: null,
      },
      password: {
        elementType: 'input',
        label: 'Contraseña',
        elementConfig: {
          type: 'password',
          placeholder: 'Password',
        },
        value: '',
        validation: {
          required: true,
          minLength: 6,
        },
        valid: false,
        touched: false,
      },
      password_confirmation: {
        elementType: 'input',
        label: 'Confirmar contraseña',
        elementConfig: {
          type: 'password',
          placeholder: 'Password',
        },
        value: '',
        validation: {
          required: true,
          minLength: 6,
        },
        valid: false,
        touched: false,
      },
    },
    formIsValid: false,
  }

  checkValidity(value, rules) {
    let isValid = true;
    let errorText = null;
    if (!rules) {
      return true;
    }

    if (rules.required) {
      isValid = value.trim() !== '' && isValid;
      errorText = 'Requerido.';
    }

    if (rules.minLength) {
      isValid = value.length >= rules.minLength && isValid;
      errorText = `Debe contener mas de ${rules.minLength} caracteres.`;
    }

    if (rules.maxLength) {
      isValid = value.length <= rules.maxLength && isValid;
      errorText = `Debe contener menos de ${rules.maxLength} caracteres.`;
    }

    if (rules.isEmail) {
      const pattern = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
      isValid = pattern.test(value) && isValid;
      errorText = 'Debe ser un email valido.';
    }

    if (rules.isNumeric) {
      const pattern = /^\d+$/;
      isValid = pattern.test(value) && isValid;
      errorText = 'Debe ser solo numerico.';
    }

    return {
      isValid,
      errorText,
    };
  }

  registerHandler = (event) => {
    event.preventDefault();
    const formData = {};
    for (const formElementIdentifier in this.state.registerForm) {
      formData[formElementIdentifier] = this.state.registerForm[formElementIdentifier].value;
    }
    const customer = {
      customer: formData,
    };
    this.props.onRegisterUser(customer);
  }

  inputChangedHandler = (event, controlName) => {
    const updatedControls = {
      ...this.state.registerForm,
      [controlName]: {
        ...this.state.registerForm[controlName],
        value: event.target.value,
        valid: this.checkValidity(
          event.target.value,
          this.state.registerForm[controlName].validation,
        ).isValid,
        errorText: this.checkValidity(
          event.target.value,
          this.state.registerForm[controlName].validation,
        ).errorText,
        touched: true,
      },
    };

    let formIsValid = true;
    for (const inputIdentifier in updatedControls) {
      formIsValid = updatedControls[inputIdentifier].valid && formIsValid;
    }

    this.setState({
      registerForm: updatedControls,
      formIsValid,
    });
  }

  responseFacebook = (response) => {
    this.props.onRegisterFacebook(response.accessToken);
  }

  render() {
    const formElementsArray = [];
    for (const key in this.state.registerForm) {
      formElementsArray.push({
        id: key,
        config: this.state.registerForm[key],
      });
    }
    return (
      <div className={cls.Register}>
        <Grid container className={cls.ModalHeader}>
          <Grid item xs={12} sm={12}>
            <Button onClick={this.props.close}>
              <i className="material-icons">clear</i>
            </Button>
          </Grid>
        </Grid>
        <Grid container className={cls.RegisterContainer} style={this.props.formClass} justify="center" >          
          <Grid item xs={12} sm={12} align="center" >
            <Typography variant="headline" gutterBottom className={cls.Typogra}>Crea una cuenta con tus datos</Typography>
            <div><FormRegister /></div>
          </Grid>
          <div className={cls.Divider}>
            <i className="material-icons">circle</i>
            <i className={`${cls.DividerIcon} ${"material-icons"}`}>radio_button_unchecked</i>
            <i className="material-icons">circle</i>
          </div>
          <div className={cls.ButtonFacebookContainer}>
            <FacebookLogin
              appId="2057031764572769"
              autoLoad={false}
              fields="name,email"
              callback={this.responseFacebook}
              render={renderProps => (
                <Button onClick={renderProps.onClick} className={`${cls.ButtonFacebookContainer} ${cls.ButtonFacebookText}`} >
                  <img className={cls.IconFacebook} src={FacebookIcon} alt="IconFacebook" />
                  Regístrate con Facebook
                </Button>      
              )}
            />
          </div>
          <div className={cls.ButtonConten}>
            <Button className={cls.pageButtonRegistroAgente} component={Link} to="/agente/registro" >Regístrate como Agente</Button>
            <Button className={cls.pageButtonRegistroAgente} component={Link} to="/reset" >Olvido su contraseña</Button>
          </div>
        </Grid>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  onRegisterUser: formData => dispatch(actions.registerClient(formData)),
  onRegisterFacebook: accessToken => dispatch(actions.facebookLogin(accessToken)),
});

export default connect(null, mapDispatchToProps)(withStyles(styles)(Register));