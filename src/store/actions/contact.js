import * as actionTypes from './actionTypes';
import axios from '../../axios-instance';
import Alert from 'react-s-alert';
import { push } from 'react-router-redux';

export const formContactSuccess = formData => ({
  type: actionTypes.FORM_CONTACT_SUCCESS,
  formData,
});

export const formContactFail = error => ({
  type: actionTypes.FORM_CONTACT_FAIL,
  error,
});

export const formContactStart = () => ({
  type: formContactStart,
});

export const formContact = (formData) => (dispatch) => {
  axios.post(`/contact`, formData)
  .then((response) => {
    let form = [];
    form = response.data.contact.data.attributes;
    dispatch(formContactSuccess(form));
    dispatch(push(`/`));
    Alert.success(response.data.message, {
      position: 'bottom',
      effect: 'genie',
    });
  })
  .catch((err) => {
    dispatch(formContactFail(err));
    Alert.error(err.response.data.message, {
        position: 'bottom',
        effect: 'genie',
      });
    });
};