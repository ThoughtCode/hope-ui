import * as actionTypes from './actionTypes';
import axios from '../../axios-dev';
import { push } from 'react-router-redux'

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
                localStorage.setItem('token', response.data.data.data.attributes.access_token);
                dispatch(registerClientSuccess(response.data.data.data.id, formData))
                dispatch(push('/cliente'))
            })
            .catch(error => {
                dispatch(registerClientFail(error))
            });
    };
};