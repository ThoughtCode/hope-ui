import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../utility';

const initialState = {
  paymenData: [],
  listCard: [],
};


const paymentAddCardStart = (state, action) => updateObject(state, {
  // loading: true,
  paymenData: [],
});

const paymentAddCardSuccess = (state, action) => updateObject(state, {
  // loading: false,
  paymenData: action.paymenData,
});

const listCardSuccess = (state, action) => updateObject(state, {
  // loading: false,
  listCard: action.listCard,
});

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.PAYMENT_ADD_CARD_START: return paymentAddCardStart(state,action);
    case actionTypes.PAYMENT_ADD_CARD_FAIL: return state;
    case actionTypes.PAYMENT_ADD_CARD_SUCCESS: return paymentAddCardSuccess(state, action);
    case actionTypes.LIST_CARD_START: return state;
    case actionTypes.LIST_CARD_SUCCESS: return listCardSuccess(state, action);
    case actionTypes.LIST_CARD_FAIL: return state;
    default: return state;
  }
};

export default reducer;