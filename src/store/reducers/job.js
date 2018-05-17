import * as actionTypes from '../actions/actionTypes';
// import { updateObject } from '../utility';

const initialState = {
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_CITIES_START: return state;
    case actionTypes.FETCH_CITIES_SUCCESS: return state;
    case actionTypes.FETCH_CITIES_FAIL: return state;
    default: return state;
  }
};

export default reducer;
