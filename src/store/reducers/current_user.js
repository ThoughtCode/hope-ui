import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../utility';

const initialState = {
  user: {},
  loading: false,
};

const fetchCurrentUserStart = (state, action) => updateObject(state, {
  loading: true,
});

const fetchCurrentUserSuccess = (state, action) => updateObject(state, {
  user: action.user,
  loading: false,
});

const updatedCurrentUserStart = (state, action) => updateObject(state, {
  loading: true,
});

const updatedCurrentUserSuccess = (state, action) => updateObject(state, {
  user: action.user,
  loading: false,
});

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_CURRENT_USER_SUCCESS: return fetchCurrentUserSuccess(state, action);
    case actionTypes.FETCH_CURRENT_USER_START: return fetchCurrentUserStart(state, action);
    case actionTypes.UPDATED_CURRENT_USER_SUCCESS: return updatedCurrentUserSuccess(state, action);
    case actionTypes.UPDATED_CURRENT_USER_START: return updatedCurrentUserStart(state, action);
    default: return state;
  }
};

export default reducer;
