import * as actionTypes from './actionTypes';
import axios from '../../axios-instance';

export const showReviewsStart = () => ({
  type: actionTypes.SHOW_REVIEWS_START,
});

export const showReviewsFail = error => ({
  type: actionTypes.SHOW_REVIEWS_FAIL,
  error,
});

export const showReviewsSuccess = reviews => ({
  type: actionTypes.SHOW_REVIEWS_SUCCESS,
  reviews,
});

export const showReviews = (token, hashed_id) => (dispatch) => {
  // console.log(hashed_id)
  dispatch(showReviewsStart());
  const headers = {
    headers: {
      Authorization: `Token token=${token}`,
    },
  };
  axios.get(`/agents/reviews/${hashed_id}`, headers)
  .then((res) => {
    console.log(res)
    let reviews = [];
      reviews = res.data.reviews.data;
      dispatch(showReviewsSuccess(reviews));
    })
    .catch((err) => {
      // console.log(err)
      dispatch(showReviewsFail(err));
    });
};