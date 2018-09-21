import Alert from 'react-s-alert';
import * as actionTypes from './actionTypes';
import axios from '../../axios-instance';

export const paymentAddCardStart = () => ({
  type: actionTypes.PAYMENT_ADD_CARD_START,
});

export const paymentAddCardSuccess = paymenData => ({
  type: actionTypes.PAYMENT_ADD_CARD_SUCCESS,
  paymenData,
});

export const paymentAddCardFail = () => ({
  type: actionTypes.PAYMENT_ADD_CARD_FAIL,
});

export const paymentAddCard = (token, holder_name, card_type, number, cardtoken, status, expiry_month, expiry_year) => dispatch => {
  dispatch(paymentAddCardStart());
  const headers = {
    headers: {
      Authorization: `Token token=${token}`,
    },
  };
  const body = {
    payment: {
      holder_name: holder_name,
      card_type: card_type,
      number: number,
      token: cardtoken,
      status: status,
      expiry_month: expiry_month,
      expiry_year: expiry_year
    }
  }

  axios.post('/customers/add_card', body, headers)
  .then((res) => {
    let paymenData = []
      paymenData = res.data.payment.data
    dispatch(paymentAddCardSuccess(paymenData));
  })
  .catch((err) => {
    dispatch(paymentAddCardFail());
  });
};

export const listCardStart = () => ({
  type: actionTypes.LIST_CARD_START,
});

export const listCardFail = error => ({
  type: actionTypes.LIST_CARD_FAIL,
  error,
});

export const listCardSuccess = listCard => ({
  type: actionTypes.LIST_CARD_SUCCESS,
  listCard,
});

export const listCard = (token) => dispatch => {
  dispatch(listCardStart());
  const headers = {
    headers: {
      Authorization: `Token token=${token}`,
    },
  };
  axios.get('/customers/credit_cards', headers)
  .then((res) => {
      let listCard = [];
        listCard = res.data.payment
      dispatch(listCardSuccess(listCard));
    })
    .catch((err) => {
      dispatch(listCardFail(err));
    });
}

export const deleteCardStart = () => ({
  type: actionTypes.DELETE_CARD_START,
});

export const deleteCardSuccess = id => ({
  type: actionTypes.DELETE_CARD_SUCCESS,
  id,
});

export const deleteCardFail = error => ({
  type: actionTypes.DELETE_CARD_FAIL,
  error,
});

export const deleteCard = (token, id) => (dispatch) => {
  dispatch(deleteCardStart());
  const headers = {
    headers: {
      Authorization: `Token token=${token}`,
    },
  };
  axios.delete(`/customers/delete_card/${id}`, headers)
    .then((res) => {
      dispatch(deleteCardSuccess(id));
      Alert.success(res.data.message, {
        position: 'top',
        effect: 'genie',
      });
      window.location.reload()
    })
    .catch((err) => {
      dispatch(deleteCardFail(err));
      console.log(err)
    });
};
