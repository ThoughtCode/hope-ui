import Alert from 'react-s-alert';
import moment from 'moment';
import { push } from 'react-router-redux';
import * as actionTypes from './actionTypes';
import axios from '../../axios-instance';

export const paymentAddCardStart = () => ({
  type: actionTypes.PAYMENT_ADD_CARD_START,
});

export const paymentAddCardSuccess = () => ({
  type: actionTypes.PAYMENT_ADD_CARD_SUCCESS,
});

export const paymentAddCardFail = () => ({
  type: actionTypes.PAYMENT_ADD_CARD_FAIL,
});

export const paymentAddCard = (token, cardResponse) => dispatch => {
  console.log(token, cardResponse, 'k-paso');
  dispatch(paymentAddCardStart());
  const headers = {
    headers: {
      Authorization: `Token token=${token}`,
    },
  };
  axios.post('/customers/add_card', cardResponse, headers)
  .then((res) => {
    console.log(res)
    dispatch(paymentAddCardSuccess());
    // dispatch(push(`/agente/trabajos`));
    // Alert.success(res.data.message, {
    //   position: 'top',
    //   effect: 'genie',
    // });
  })
  .catch((err) => {
    console.log(err)
    dispatch(paymentAddCardFail());
    // if (err.response.data.message.base) {
    //   Alert.error(err.response.data.message.base[0], {
    //     position: 'top',
    //     effect: 'genie',
    //   });
    // } else if (err.response.data.message) {
    //   Alert.error(err.response.data.message, {
    //     position: 'top',
    //     effect: 'genie',
    //   });
    // }
  });
};