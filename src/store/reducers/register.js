import * as actionTypes from '../actions/actionTypes';

const initialState = {
  users: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.REGISTER_CLIENT_START: return state;
    case actionTypes.REGISTER_CLIENT_SUCCESS:
      const newCustomer = {
        ...action.formData,
        id: action.clientId,
      };
      return {
        ...state,
        users: state.users.concat(newCustomer),
      };
    case actionTypes.REGISTER_CLIENT_FAIL: return state;
    case actionTypes.REGISTER_AGENT_START: return state;
    case actionTypes.REGISTER_AGENT_SUCCESS:
      const newAgent = {
        ...action.formData,
        id: action.agentId,
      };
      return {
        ...state,
        users: state.users.concat(newAgent),
      };
    case actionTypes.REGISTER_AGENT_FAIL: return state;
    default: return state;
  }
};

export default reducer;
