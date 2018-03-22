import React, { Component } from 'react';
import { connect } from 'react-redux';

import Input from '../../UI/Input/Input';
import Button from '../../UI/Button/Button';
import * as action from '../../../store/actions';

class Register extends Component {
    state = {
        registerForm: {
            email: {
                elementType: 'input',
                elementConfig: {
                    type: 'email',
                    floatingLabelText: 'Email',
                },
                value: '',
                validation: {
                    required: true
                },
                valid: false,
                touched: false
            },
            password: {
                elementType: 'input',
                elementConfig: {
                    type: 'password',
                    floatingLabelText: 'Password',
                },
                value: '',
                validation: {
                    required: true
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
                    required: true
                },
                valid: false,
                touched: false
            },
        },
        formIsValid: false
    }

    checkValidity(value, rules) {
        let isValid = true;

        if (rules.required) {
            isValid = value.trim() !== '' && isValid;
        }

        if (rules.minLength) {
            isValid = value.length >= rules.minLength && isValid;
        }

        if (rules.maxLength) {
            isValid = value.length <= rules.maxLength && isValid;
        }

        return isValid;
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
        this.props.history.push('/');
    }

    inputChangedHandler = (event, controlName) => {
        const updatedControls = {
            ...this.state.registerForm,
            [controlName]: {
                ...this.state.registerForm[controlName],
                value: event.target.value,
                valid: this.checkValidity(event.target.value, this.state.registerForm[controlName].validation),
                touched: true
            }
        };
        this.setState({registerForm: updatedControls});
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
                        touched={formElement.config.touched}/>
                ))}
                <Button btnType="Success" label="Registrar" disabled={!this.state.formIsValid}></Button>
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