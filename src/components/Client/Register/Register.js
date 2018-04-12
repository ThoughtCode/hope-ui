import React, { Component } from 'react';
import { connect } from 'react-redux';

import Input from '../../UI/Input/Input';
// import Button from '../../UI/Button/Button';
import * as action from '../../../store/actions';

class Register extends Component {
    state = {
        registerForm: {
            first_name: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    floatingLabelText: 'First Name',
                },
                value: '',
                validation: {
                    required: true,
                },
                valid: false,
                touched: false,
                errorText: null
            },
            last_name: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    floatingLabelText: 'Last Name',
                },
                value: '',
                validation: {
                    required: true,
                },
                valid: false,
                touched: false,
                errorText: null
            },
            email: {
                elementType: 'input',
                elementConfig: {
                    type: 'email',
                    floatingLabelText: 'Email',
                },
                value: '',
                validation: {
                    required: true,
                    isEmail: true
                },
                valid: false,
                touched: false,
                errorText: null
            },
            password: {
                elementType: 'input',
                elementConfig: {
                    type: 'password',
                    floatingLabelText: 'Password',
                },
                value: '',
                validation: {
                    required: true,
                    minLength: 6
                },
                valid: false,
                touched: false
            },
            password_confirmation: {
                elementType: 'input',
                elementConfig: {
                    type: 'password',
                    floatingLabelText: 'Password',
                },
                value: '',
                validation: {
                    required: true,
                    minLength: 6
                },
                valid: false,
                touched: false
            },
        },
        formIsValid: false
    }

    checkValidity(value, rules) {
        let isValid = true;
        let errorText = null;
        if (!rules) {
            return true;
        }
        
        if (rules.required) {
            isValid = value.trim() !== '' && isValid;
            errorText = "Requerido."
        }

        if (rules.minLength) {
            isValid = value.length >= rules.minLength && isValid
            errorText = "Debe contener mas de " + rules.minLength + " caracteres."
        }

        if (rules.maxLength) {
            isValid = value.length <= rules.maxLength && isValid
            errorText = "Debe contener menos de " + rules.maxLength + " caracteres."
        }

        if (rules.isEmail) {
            const pattern = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
            isValid = pattern.test(value) && isValid
            errorText = "Debe ser un email valido."
        }

        if (rules.isNumeric) {
            const pattern = /^\d+$/;
            isValid = pattern.test(value) && isValid
            errorText = "Debe ser solo numerico."
        }

        return {
            isValid,
            errorText
        };
    }

    registerHandler = (event) => {
        event.preventDefault();
        const formData = {};
        for (let formElementIdentifier in this.state.registerForm) {
            formData[formElementIdentifier] = this.state.registerForm[formElementIdentifier].value;
        }
        const customer = {
            customer: formData
        };
        this.props.onRegisterUser(customer);
        
    }

    inputChangedHandler = (event, controlName) => {
        const updatedControls = {
            ...this.state.registerForm,
            [controlName]: {
                ...this.state.registerForm[controlName],
                value: event.target.value,
                valid: this.checkValidity(event.target.value, this.state.registerForm[controlName].validation).isValid,
                errorText: this.checkValidity(event.target.value, this.state.registerForm[controlName].validation).errorText,
                touched: true
            }
        };

        let formIsValid = true;
        for (let inputIdentifier in updatedControls) {
            formIsValid = updatedControls[inputIdentifier].valid && formIsValid;
        }

        this.setState({
            registerForm: updatedControls,
            formIsValid: formIsValid
        });
    }

    render () {
        const formElementsArray = [];
        for (let key in this.state.registerForm) {
            formElementsArray.push({
                id: key,
                config: this.state.registerForm[key]
            });
        }
        let form = (
            <form onSubmit={this.registerHandler}>
                {formElementsArray.map(formElement => (
                    <Input
                        key={formElement.id}
                        elementType={formElement.config.elementType}
                        elementConfig={formElement.config.elementConfig}
                        value={formElement.config.value}
                        changed={(event) => this.inputChangedHandler(event, formElement.id)}
                        invalid={!formElement.config.valid}
                        shouldValidate={formElement.config.validation}
                        touched={formElement.config.touched}
                        errorText={formElement.config.errorText}
                    />
                ))}
                {/* <Button btnType="Success" label="Registrar" disabled={!this.state.formIsValid}></Button> */}
            </form>
        );
        return (
            <div>
                {form}
            </div>
        );
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onRegisterUser: (formData) => dispatch(action.registerClient(formData))
    };
};

export default connect(null, mapDispatchToProps)(Register);