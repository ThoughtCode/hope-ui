import * as actionTypes from './actionTypes';
import axios from '../../axios-instance';
import Alert from 'react-s-alert';
import { push } from 'react-router-redux';

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

export const qualifySuccess = formData => ({
  type: actionTypes.QUALIFY_SUCCESS,
  formData,
});

export const qualifyFail = error => ({
  type: actionTypes.QUALIFY_FAIL,
  error,
});

export const qualifyStart = () => ({
  type: qualifyStart,
});

export const qualify = (token, job_id, review) => (dispatch) => {
  console.log(job_id);
  dispatch(qualifyStart());
  const headers = {
    headers: {
      Authorization: `Token token=${token}`,
    },
  };
  axios.post(`/customers/jobs/${job_id}/review`, review, headers)
  .then((response) => {
    let reviewJob = [];
    reviewJob = response.data.review.data.attributes;
    dispatch(qualifySuccess(reviewJob));
    dispatch(push(`/cliente/trabajo/${job_id}/agente/contratado`));
    Alert.success(response.data.message, {
      position: 'bottom',
      effect: 'genie',
    });
  })
  .catch((err) => {
    dispatch(qualifyFail(err));
    Alert.error(err.response.data.message, {
        position: 'bottom',
        effect: 'genie',
      });
    });
};