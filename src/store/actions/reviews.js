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

export const qualifySuccess = (token, formData) => ({
  type: actionTypes.QUALIFY_SUCCESS,
  clientId: token,
  formData,
});

export const qualifyFail = error => ({
  type: actionTypes.QUALIFY_FAIL,
  error,
});

export const qualifyStart = () => ({
  type: qualifyStart,
});

export const qualify = (token, job_id, comment, qualification) => (dispatch) => {
  dispatch(qualifyStart());
  const headers = {
    headers: {
      Authorization: `Token token=${token}`,
    },
  };
  const qualifyData = {
    qualify: {
      job_id,
      comment,
      qualification
    },
  };
  axios.post(`/customers/jobs/${job_id}/review`, qualifyData, headers)
  // console.log("paso")
  .then((response) => {
    const qualifyJ = response.data.customers.data;
    localStorage.clear();
    localStorage.setItem('token', token);
    localStorage.setItem('id', job_id);
    localStorage.setItem('comment', comment);
    localStorage.setItem('qualification', qualification)
    dispatch(qualifySuccess(token, job_id));
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