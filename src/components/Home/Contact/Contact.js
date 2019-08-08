// Dependencias
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Grid } from 'material-ui';

import * as action from '../../../store/actions';

// Component
import Facebook from '../../../assets/icono-facebook.png';
import Instagram from '../../../assets/icono-instagram.png';
import WhatsApp from '../../../assets/icono-whatsapp.png';
import cls from './Contact.css';

class Contact extends Component {
  state = {
    formData: {
      name: {
        value: '',
        validation: {
          required: true,
        },
        valid: false,
        touched: false,
        errorText: null,
      },
      celular: {
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
    },
    formIsValid: false,
  }

  formContact = (event) => {
    event.preventDefault();
    const formData = {};
    for (const formElementIdentifier in this.state.formData) {
      formData[formElementIdentifier] = this.state.formData[formElementIdentifier].value;
    }
    const contact = {
      contact: formData,
    };
    this.props.onFormContact(contact);
  }

  inputChangedHandler = (event, controlName) => {
    const updatedControls = {
      ...this.state.formData,
      [controlName]: {
        ...this.state.formData[controlName],
        value: event.target.value,
        valid: this.checkValidity(
          event.target.value,
          this.state.formData[controlName].validation,
        ).isValid,
        errorText: this.checkValidity(
          event.target.value,
          this.state.formData[controlName].validation,
        ).errorText,
        touched: true,
      },
    };

    let formIsValid = true;
    for (const inputIdentifier in updatedControls) {
      formIsValid = updatedControls[inputIdentifier].valid && formIsValid;
    }

    this.setState({
      formData: updatedControls,
      formIsValid,
    });
  }

  rateChangedHandler = (value, controlName) => {
    const updatedControls = {
      ...this.state.formData,
      [controlName]: {
        ...this.state.formData[controlName],
        value: value,
        valid: this.checkRateValidity(
          value,
          this.state.formData[controlName].validation,
        ).isValid,
        errorText: this.checkRateValidity(
          value,
          this.state.formData[controlName].validation,
        ).errorText,
        touched: true,
      },
    };

    let formIsValid = true;
    for (const inputIdentifier in updatedControls) {
      formIsValid = updatedControls[inputIdentifier].valid && formIsValid;
    }

    this.setState({
      formData: updatedControls,
      formIsValid,
    });
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

    return {
      isValid,
      errorText,
    };
  }

  checkRateValidity(value, rules) {
    let isValid = true;
    let errorText = null;
    if (!rules) {
      return true;
    }

    if (rules.required) {
      isValid = value > 0 && isValid;
      errorText = 'Requerido.';
    }

    return {
      isValid,
      errorText,
    };
  }
  render (){
    return (
      <Grid container alignContent="center" justify="center">
        <Grid item xs={12} sm={7} align="center" justify="center" className={cls.Contact}>
          <div>
            <a href="https://www.facebook.com/appnocnoc/" target="_blank"><img src={Facebook} alt="Facebook" className={cls.Styleicon} /></a>
            <a href="https://www.instagram.com/nocnoc_ec/?hl=es-la" target="_blank"><img src={Instagram} alt="Instagram" className={cls.Styleicon} /></a>
            <a href="#" target="_black" ><img src={WhatsApp} alt="WhatsApp" className={cls.Styleicon} /></a>
          </div>
          <div className={cls.Paper}>
            <input
              className={cls.Field}
              placeholder="Nombre"
              id="name"
              multiline="true"
              margin="normal"
              onChange={(event) => this.inputChangedHandler(event, 'name')}
              InputProps={{
                disableUnderline: true,
              }}
              InputLabelProps={{
                shrink: true,
              }}
            />
            {!this.state.formData.name.valid && this.state.formData.name.touched ? (
              <div className={cls.ErrorText}>
                {this.state.formData.name.errorText}
              </div>
            ) : null}
          </div>
          <div className={cls.Paper}>
            <input
              className={cls.Field}
              placeholder="Número de teléfono"
              id="multiline-static"
              multiline="true"
              margin="normal"
              onChange={(event) => this.inputChangedHandler(event, 'celular')}
              InputProps={{
                disableUnderline: true,
              }}
              InputLabelProps={{
                shrink: true,
              }}
            />
            {!this.state.formData.celular.valid && this.state.formData.celular.touched ? (
              <div className={cls.ErrorText}>
                {this.state.formData.celular.errorText}
              </div>
            ) : null}
          </div>
          <div className={cls.Paper}>
            <input
              className={cls.Field}
              placeholder="Email"
              id="multiline-static"
              multiline="true"
              margin="normal"
              onChange={(event) => this.inputChangedHandler(event, 'email')}
              InputProps={{
                disableUnderline: true,
              }}
              InputLabelProps={{
                shrink: true,
              }}
            />
            {!this.state.formData.email.valid && this.state.formData.email.touched ? (
              <div className={cls.ErrorText}>
                {this.state.formData.email.errorText}
              </div>
            ) : null}
          </div>
          <div className={cls.Paper}>
            {this.state.formIsValid ? (
              <button
                onClick={(event) => this.formContact(event, this.formContact)}
                className={cls.ButtonContratar}>ENVIAR</button>
            ): (
              <button className={cls.pageButtonInvalid}>ENVIAR</button>
            )}
          </div>
        </Grid>
      </Grid>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  onFormContact: formData => dispatch(action.formContact(formData)),
});

export default connect(null, mapDispatchToProps) (Contact);