import * as actionTypes from './actionTypes';
import axios from '../../axios-prod';
import { push } from 'react-router-redux';

export const registerClientSuccess = (id, formData) => {
    console.log(id);
    return {
        type: actionTypes.REGISTER_CLIENT_SUCCESS,
        clientId: id,
        formData: formData
    };
};

export const registerClientFail = (error) => {
    return {
        type: actionTypes.REGISTER_CLIENT_FAIL,
        error: error
    };
};

export const registerClientStart = () => {
    return {
        type: registerClientStart
    };
};

export const registerClient = (formData) => {
    return dispatch => {
        axios.post("/customers/signup/", formData )
            .then(response => {
                const customer = response.data.customer.data
                localStorage.setItem('token', customer.attributes.access_token);
                dispatch(registerClientSuccess(customer.id, formData))
                dispatch(push('/cliente/dashboard'))
            })
            .catch(error => {
                dispatch(registerClientFail(error))
            });
    };
};