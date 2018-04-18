import * as actionTypes from './actionTypes';
import axios from '../../axios-prod';
import { push } from 'react-router-redux';

export const authStart = () => {
    return {
        type: actionTypes.AUTH_START
    };
};

export const authSuccess = (token, userId) => {
    return {
        type: actionTypes.AUTH_SUCCESS,
        token: token,
        userId: userId
    };
};

export const authFail = (error) => {
    return {
        type: actionTypes.AUTH_FAIL,
        error: error
    };
};

export const authLogout = (error) => {
    return {
        type: actionTypes.AUTH_LOGOUT
    };
};

export const auth = (email, password) => {
    return dispatch => {
        dispatch(authStart());
        const authData = {
            customer: {
                email: email,
                password: password
            }
        }
        axios.post('/customers/signin', authData)
            .then( response => {
                const customer = response.data.customer.data
                localStorage.setItem('token', customer.attributes.access_token);
                dispatch(authSuccess(customer.attributes.access_token, customer.id));
                dispatch(push('/cliente/dashboard'))
            })
            .catch( err => {
                console.log(err);
                dispatch(authFail(err));
            });
    };
};