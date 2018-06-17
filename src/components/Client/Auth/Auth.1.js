import React, { Component } from 'react';
import { connect } from 'react-redux';

import Input from '../../../components/UI/Input/Input';
import Button from 'material-ui/Button';

import * as actions from '../../../store/actions';
import cls from './Auth.css'

class Auth extends Component {
    state = {
        controls: {
            email: {
                elementType: 'input',
                label: 'Email',
                elementConfig: {
                    type: 'email',
                    placeholder: 'example@example.com'
                },
                value: '',
                validation: {
                    required: true,
                    isEmail: true
                },
                valid: false,
                touched: false
            },
            password: {
                elementType: 'input',
                label: 'Password',
                elementConfig: {
                    type: 'password',
                    placeholder: 'Password'
                },
                value: '',
                validation: {
                    required: true,
                },
                valid: false,
                touched: false
            }
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

    submitHandler = (event) => {
        event.preventDefault();
        this.props.onAuth(this.state.controls.email.value, this.state.controls.password.value)
    }

    inputChangedHandler = (event, controlName) => {
        const updatedControls = {
            ...this.state.controls,
            [controlName]: {
                ...this.state.controls[controlName],
                value: event.target.value,
                valid: this.checkValidity(event.target.value, this.state.controls[controlName].validation).isValid,
                errorText: this.checkValidity(event.target.value, this.state.controls[controlName].validation).errorText,
                touched: true
            }
        };

        let formIsValid = true;
        for (let inputIdentifier in updatedControls) {
            formIsValid = updatedControls[inputIdentifier].valid && formIsValid;
        }
        this.setState({
            controls: updatedControls,
            formIsValid: formIsValid
        });
    }

    render () {
        const formElementsArray = [];
        for (let key in this.state.controls) {
            formElementsArray.push({
                id: key,
                config: this.state.controls[key]
            });
        }

        let form = (
            <form onSubmit={this.submitHandler} className={cls.Form}>
                {formElementsArray.map(formElement => (
                    <Input
                        key={formElement.id}
                        id={formElement.id}
                        label={formElement.config.label}
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
                <Button type="submit" variant="raised" className={cls.pageButton} >Entrar</Button>
            </form>
        );
            return (
                <div>
                    {form}
                </div>
        );
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onAuth: (email, password) => dispatch(actions.authClient(email, password))
    };
};

export default connect(null, mapDispatchToProps)(Auth);