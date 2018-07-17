import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../utility';

const initialState = {
  formContact: [],
};

const formContact = (state, action) => updateObject(state, {
  formContact: action.formContact,
});

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FORM_CONTACT_START: return state;
    case actionTypes.FORM_CONTACT_SUCCESS: return formContact(state, action);
    case actionTypes.FORM_CONTACT_FAIL: return state;
    default: return state;
  }
};

export default reducer;
