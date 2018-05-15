import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Grid from 'material-ui/Grid';

import Button from 'material-ui/Button';

import Input from '../../UI/Input/Input';
import * as action from '../../../store/actions';

class Register extends Component {
    state = {
      registerForm: {
        first_name: {
          elementType: 'input',
          label: 'Nombre',
          elementConfig: {
            type: 'text',
            placeholder: 'Nombre',
          },
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

    render() {
      const formElementsArray = [];
      for (const key in this.state.registerForm) {
        formElementsArray.push({
          id: key,
          config: this.state.registerForm[key],
        });
      }
      const form = (
        <form onSubmit={this.registerHandler}>
          {formElementsArray.map(formElement => (
            <Input
              key={formElement.id}
              id={formElement.id}
              label={formElement.config.label}
              elementType={formElement.config.elementType}
              elementConfig={formElement.config.elementConfig}
              value={formElement.config.value}
              changed={event => this.inputChangedHandler(event, formElement.id)}
              invalid={!formElement.config.valid}
              shouldValidate={formElement.config.validation}
              touched={formElement.config.touched}
              errorText={formElement.config.errorText}
            />
              ))}
          <Button type="submit" variant="raised" color="primary" disabled={!this.state.formIsValid}>
            Registrar
          </Button>
        </form>
      );
      return (
        <div>
          <Grid container spacing={16} style={this.props.formClass} justify="center">
            <Grid item xs={12} sm={8}>
              <h1>Registro</h1>
              {form}
              <Button component={Link} to="/cliente" style={{ margin: '10px 0' }}>Volver al login</Button>
            </Grid>
          </Grid>
        </div>
      );
    }
}

const mapDispatchToProps = dispatch => ({
  onRegisterUser: formData => dispatch(action.registerClient(formData)),
});

export default connect(null, mapDispatchToProps)(Register);
