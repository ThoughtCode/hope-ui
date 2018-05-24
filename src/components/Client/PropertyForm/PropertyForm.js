import React, { Component } from 'react';

// Components
import { 
  Grid,
  Button
} from 'material-ui';
import Input from '../../UI/Input/Input';

class PropertyForm extends Component {
  state = {
    propertyForm: {
      name: {
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
      city: {
        elementType: 'select',
        label: 'Ciudad',
        elementConfig: {
          type: 'text',
          placeholder: 'Ciudad',
        },
        value: '',
        validation: {
          required: true,
        },
        valid: true,
        errorText: null,
      },
      neightborhood_id: {
        elementType: 'select',
        label: 'Barrio',
        elementConfig: {
          type: 'text',
          placeholder: 'Barrio',
        },
        value: '',
        validation: {
          required: true,
        },
        valid: true,
        errorText: null,
      },
      p_street: {
        elementType: 'input',
        label: 'Calle principal',
        elementConfig: {
          type: 'text',
          placeholder: 'Calle principal',
        },
        value: '',
        validation: {
          required: true,
        },
        valid: false,
        touched: false,
        errorText: null,
      },
      number: {
        elementType: 'input',
        label: 'Numero',
        elementConfig: {
          type: 'text',
          placeholder: 'Numero',
        },
        value: '',
        validation: {
          required: true,
        },
        valid: false,
        touched: false,
        errorText: null,
      },
      s_street: {
        elementType: 'input',
        label: 'Calle Secundaria',
        elementConfig: {
          type: 'text',
          placeholder: 'Calle Secundaria',
        },
        value: '',
        validation: {
          required: true,
        },
        valid: false,
        touched: false,
        errorText: null,
      },
      details: {
        elementType: 'input',
        label: 'Detalles',
        elementConfig: {
          type: 'text',
          placeholder: 'Detalles',
        },
        value: '',
        validation: {
          required: true,
        },
        valid: false,
        touched: false,
        errorText: null,
      },
      additional_reference: {
        elementType: 'input',
        label: 'Referencias Adicionales',
        elementConfig: {
          type: 'text',
          placeholder: 'Referencias Adicionales',
        },
        value: '',
        validation: {
          required: true,
        },
        valid: false,
        touched: false,
        errorText: null,
      },
      phone: {
        elementType: 'input',
        label: 'Telefono',
        elementConfig: {
          type: 'text',
          placeholder: 'Telefono',
        },
        value: '',
        validation: {
          required: true,
        },
        valid: false,
        touched: false,
        errorText: null,
      },
      cell_phone: {
        elementType: 'input',
        label: 'Celular',
        elementConfig: {
          type: 'text',
          placeholder: 'Celular',
        },
        value: '',
        validation: {
          required: true,
        },
        valid: false,
        touched: false,
        errorText: null,
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

  inputChangedHandler = (event, controlName) => {
    const updatedControls = {
      ...this.state.propertyForm,
      [controlName]: {
        ...this.state.propertyForm[controlName],
        value: event.target.value,
        valid: this.checkValidity(
          event.target.value,
          this.state.propertyForm[controlName].validation,
        ).isValid,
        errorText: this.checkValidity(
          event.target.value,
          this.state.propertyForm[controlName].validation,
        ).errorText,
        touched: true,
      },
    };

    if (controlName === 'city') {
      this.props.fetchNeightborhoods(localStorage.getItem('token'), event.target.value);
    };

    let formIsValid = true;
    for (const inputIdentifier in updatedControls) {
      formIsValid = updatedControls[inputIdentifier].valid && formIsValid;
    }

    console.log(formIsValid);

    this.setState({
      propertyForm: updatedControls,
      formIsValid,
    });
  }

  createPropertyHandler = (event) => {
    event.preventDefault();
    const formData = {};
    for (const formElementIdentifier in this.state.propertyForm) {
      formData[formElementIdentifier] = this.state.propertyForm[formElementIdentifier].value;
    }
    const property = {
      property: formData,
    };
    console.log(property);
    this.props.createProperty(localStorage.getItem('token'), property);
  }

  render () {
    const formElementsArray = [];
      for (const key in this.state.propertyForm) {
        formElementsArray.push({
          id: key,
          config: this.state.propertyForm[key],
        });
      }
      const form = (
        <div>
          {formElementsArray.map(formElement => {
            if (formElement.id === 'city') {
              return (
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
                  options={this.props.cities}
                />
              )  
            } else if (formElement.id === 'neightborhood_id') {
              return (
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
                  options={this.props.neightborhoods}
                />
              )
            } else {
              return (
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
              )
            }
          })}
          <Button type="submit" variant="raised" color="primary" onClick={this.createPropertyHandler} disabled={!this.state.formIsValid}>
            Registrar
          </Button>
        </div>
      );
    return (
      <div>
        <Grid item xs={12}>
          {form}
        </Grid>
      </div>
    );
  }
}

export default PropertyForm;