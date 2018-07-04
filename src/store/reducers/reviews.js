import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../utility';

const initialState = {
  showReviews: [],
};

const showReviews = (state, action) => updateObject(state, {
  showReviews: action.showReviews,
});

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SHOW_REVIEWS_START: return state;
    case actionTypes.SHOW_REVIEWS_SUCCESS: return showReviews(state, action);
    case actionTypes.SHOW_REVIEWS_FAIL: return state;
    default: return state;
  }
};

export default reducer;
