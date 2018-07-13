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

export const qualifyCustomerSuccess = formData => ({
  type: actionTypes.QUALIFY_CUSTOMER_SUCCESS,
  formData,
});

export const qualifyCustomerFail = error => ({
  type: actionTypes.QUALIFY_CUSTOMER_FAIL,
  error,
});

export const qualifyCustomerStart = () => ({
  type: qualifyCustomerStart,
});

export const qualifyCustomer = (token, job_id, review) => (dispatch) => {
  dispatch(qualifyCustomerStart());
  console.log(token)
  const headers = {
    headers: {
      Authorization: `Token token=${token}`,
    },
  };
  axios.post(`/agents/jobs/${job_id}/review`, review, headers)
  .then((response) => {
    let reviewJob = [];
    reviewJob = response.data.review.data.attributes;
    dispatch(qualifyCustomerSuccess(reviewJob));
    dispatch(push(`/agente/trabajos`));
    Alert.success(response.data.message, {
      position: 'bottom',
      effect: 'genie',
    });
  })
  .catch((err) => {
    dispatch(qualifyCustomerFail(err));
    Alert.error(err.response.data.message, {
        position: 'bottom',
        effect: 'genie',
      });
    });
};