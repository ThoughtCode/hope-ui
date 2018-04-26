import { push } from 'react-router-redux';
import * as actionTypes from './actionTypes';
import axios from '../../axios-instance';

export const registerClientSuccess = (id, formData) => ({
  type: actionTypes.REGISTER_CLIENT_SUCCESS,
  clientId: id,
  formData,
});

export const registerClientFail = error => ({
  type: actionTypes.REGISTER_CLIENT_FAIL,
  error,
});

export const registerClientStart = () => ({
  type: registerClientStart,
});

export const registerClient = formData => (dispatch) => {
  axios.post('/customers/signup/', formData)
    .then((response) => {
      const customer = response.data.customer.data;
      localStorage.setItem('token', customer.attributes.access_token);
      dispatch(registerClientSuccess(customer.id, formData));
      dispatch(push('/cliente/dashboard'));
    })
    .catch((error) => {
      dispatch(registerClientFail(error));
    });
};
