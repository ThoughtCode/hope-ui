import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../utility';

const initialState = {
  postulate: [],
};

const proposalPostulateSuccess = (state, action) => updateObject(state, {
  postulate: action.proposalPostulate,
});

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.PROPOSAL_POSTULATE_START: return state;
    case actionTypes.PROPOSAL_POSTULATE_SUCCESS: return proposalPostulateSuccess(state, action);
    case actionTypes.PROPOSAL_POSTULATE_FAIL: return state;
    default: return state;
  }
};

export default reducer;