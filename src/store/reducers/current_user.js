import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../utility';

const initialState = {
  user: {},
};

const fetchCurrentUserSuccess = (state, action) => updateObject(state, {
  user: action.user,
});

const updatedCurrentUserSuccess = (state, action) => updateObject(state, {
  user: action.user,
});

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_CURRENT_USER_SUCCESS: return fetchCurrentUserSuccess(state, action);
    case actionTypes.UPDATED_CURRENT_USER_SUCCESS: return updatedCurrentUserSuccess(state, action);
    default: return state;
  }
};

export default reducer;
