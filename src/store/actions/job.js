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

export const fetchJobsStart = () => ({
  type: actionTypes.FETCH_JOBS_START,
});

export const fetchJobsFail = error => ({
  type: actionTypes.FETCH_JOBS_FAIL,
  error,
});

export const fetchJobsSuccess = jobs => ({
  type: actionTypes.FETCH_JOBS_SUCCESS,
  jobs,
});

export const fetchJobs = token => dispatch => {
  dispatch(fetchJobsStart());
  const headers = {
    headers: {
      Authorization: `Token token=${token}`,
    },
  };
  axios.get('/customers/jobs', headers)
    .then((res) => {
      let jobs = [];
      jobs = res.data.job.data;
      dispatch(fetchJobsSuccess(jobs));
    })
    .catch((err) => {
      dispatch(fetchJobsFail(err));
    });
}

export const fetchJobStart = () => ({
  type: actionTypes.FETCH_JOB_START,
});

export const fetchJobFail = error => ({
  type: actionTypes.FETCH_JOB_FAIL,
  error,
});

export const fetchJobSuccess = job => ({
  type: actionTypes.FETCH_JOB_SUCCESS,
  job,
});

export const fetchJob = (token, job_id) => dispatch => {
  dispatch(fetchJobStart());
  const headers = {
    headers: {
      Authorization: `Token token=${token}`,
    },
  };
  axios.get(`/customers/jobs/${job_id}`, headers)
    .then((res) => {
      let job = [];
      job = res.data.job.data;
      dispatch(fetchJobSuccess(job));
    })
    .catch((err) => {
      dispatch(fetchJobFail(err));
    });
}