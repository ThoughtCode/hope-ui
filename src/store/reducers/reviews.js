import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../utility';

const initialState = {
  showReviews: [],
  qualify: [],
};

const showReviews = (state, action) => updateObject(state, {
  showReviews: action.showReviews,
});

const qualify = (state, action) => updateObject(state, {
  qualify: action.qualify,
});

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SHOW_REVIEWS_START: return state;
    case actionTypes.SHOW_REVIEWS_SUCCESS: return showReviews(state, action);
    case actionTypes.SHOW_REVIEWS_FAIL: return state;
    case actionTypes.QUALIFY_START: return state;
    case actionTypes.QUALIFY_SUCCESS: return qualify(state, action);
    case actionTypes.QUALIFY_FAIL: return state;
    default: return state;
  }
};

export default reducer;
