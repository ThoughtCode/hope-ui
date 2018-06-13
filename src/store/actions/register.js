import { push } from 'react-router-redux';
import Alert from 'react-s-alert';
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
      Alert.success(response.data.message, {
        position: 'bottom',
        effect: 'genie',
      });
    })
    .catch((error) => {
      dispatch(registerClientFail(error));
      if (typeof(error.response.data.message) === 'object') {
        const message = error.response.data.message.email;
        Alert.error(message, {
          position: 'bottom',
          effect: 'genie',
        });
      } else {
        Alert.error(error.response.data.message, {
          position: 'bottom',
          effect: 'genie',
        });
      }
    });
};
