import * as actionTypes from './actionTypes';
import axios from '../../axios-dev';

export const registerClientSuccess = (id, formData) => {
    this.props.history.push('/');
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
        console.log(formData);
        axios.post("/customers/signup/", formData )
            .then(response => {
                localStorage.setItem('token', response.data.access_token);
                dispatch(registerClientSuccess(response.data, formData))
            })
            .catch(error => {
                dispatch(registerClientFail(error))
            });
    };
};