import * as actionTypes from './actionTypes';
import axios from '../../axios-instance';

export const createJobSuccess = () => ({
  type: actionTypes.CREATE_JOB_SUCCESS,
});

export const createJobStart = () => ({
  type: actionTypes.CREATE_JOB_START,
});

export const createJobFail = () => ({
  type: actionTypes.CREATE_JOB_FAIL,
});

export const createJob = (token, formData) => dispatch => {
  dispatch(createJobStart());
  const headers = {
    headers: {
      Authorization: `Token token=${token}`,
    },
  };
  axios.post('/customers/jobs', formData, headers)
    .then((res) => {
      dispatch(createJobSuccess());
    })
    .catch((err) => {
      dispatch(createJobFail());
    });
}
