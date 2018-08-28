import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../utility';

const initialState = {
  paymentAddCard: [],
};

const paymentAddCardSuccess = (state, action) => updateObject(state, {
  paymentAddCard: action.paymentAddCard,
});


const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.PAYMENT_ADD_CARD_START: return state;
    case actionTypes.PAYMENT_ADD_CARD_SUCCESS: return paymentAddCardSuccess(state, action);
    case actionTypes.PAYMENT_ADD_CARD_FAIL: return state;
    default: return state;
  }
};

export default reducer;