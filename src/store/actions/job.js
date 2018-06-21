import Alert from 'react-s-alert';
import { push } from 'react-router-redux';
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
      dispatch(push(`/cliente/trabajo/${res.data.job.data.id}`));
      Alert.success(res.data.message, {
        position: 'bottom',
        effect: 'genie',
      });
    })
    .catch((err) => {
      dispatch(createJobFail());
      Alert.error(err.response.data.message, {
        position: 'bottom',
        effect: 'genie',
      });
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

export const fetchJobs = (token, current_page) => dispatch => {
  dispatch(fetchJobsStart());
  const headers = {
    headers: {
      Authorization: `Token token=${token}`,
    },
  };
  var body = [];
  body.push(`current_page=${1}`)
  axios.get(`/customers/jobs?${body.join('&')}`, headers)
    .then((res) => {
      let jobs = [];
      jobs = res.data.job.data;
      dispatch(fetchJobsSuccess(jobs));
      Alert.success(res.data.message, {
        position: 'bottom',
        effect: 'genie',
      });
    })
    .catch((err) => {
      dispatch(fetchJobsFail(err));
      Alert.error(err.response.data.message, {
        position: 'bottom',
        effect: 'genie',
      });
    });
}

export const fetchNextJobsStart = () => ({
  type: actionTypes.FETCH_NEXTJOBS_START,
});

export const fetchNextJobsFail = error => ({
  type: actionTypes.FETCH_NEXTJOBS_FAIL,
  error,
});

export const fetchNextJobsSuccess = nextjobs => ({
  type: actionTypes.FETCH_NEXTJOBS_SUCCESS,
  nextjobs,
});

export const fetchNextJobs = (token) => dispatch => {
  dispatch(fetchNextJobsStart());
  const headers = {
    headers: {
      Authorization: `Token token=${token}`,
    },
  };
  var body = [];
  body.push(`status=nextjobs`);
  body.push(`current_page=${1}`);
  body.push(`limit=${4}`);
  axios.get(`/customers/jobs?${body.join('&')}`, headers)
    .then((res) => {
      let nextjobs = [];
      nextjobs = res.data.job.data;
      dispatch(fetchNextJobsSuccess(nextjobs));
    })
    .catch((err) => {
      dispatch(fetchNextJobsFail(err));
    });
}

export const fetchHistoryJobsStart = () => ({
  type: actionTypes.FETCH_HISTORYJOBS_START,
});

export const fetchHistoryJobsFail = error => ({
  type: actionTypes.FETCH_HISTORYJOBS_FAIL,
  error,
});

export const fetchHistoryJobsSuccess = historyjobs => ({
  type: actionTypes.FETCH_HISTORYJOBS_SUCCESS,
  historyjobs,
});

export const fetchHistoryJobs = (token) => dispatch => {
  dispatch(fetchHistoryJobsStart());
  const headers = {
    headers: {
      Authorization: `Token token=${token}`,
    },
  };
  var body = [];
  body.push(`status=history`);
  body.push(`current_page=${1}`);
  body.push(`limit=${4}`);
  axios.get(`/customers/jobs?${body.join('&')}`, headers)
    .then((res) => {
      let historyjobs = [];
      historyjobs = res.data.job.data;
      dispatch(fetchHistoryJobsSuccess(historyjobs));
    })
    .catch((err) => {
      dispatch(fetchHistoryJobsFail(err));
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

export const fetchJobsAgentStart = () => ({
  type: actionTypes.FETCH_AGENT_JOBS_START,
});

export const fetchJobsAgentFail = (error) => ({
  type: actionTypes.FETCH_AGENT_JOBS_FAIL,
  error,
});

export const fetchJobsAgentSuccess = (jobs) => ({
  type: actionTypes.FETCH_AGENT_JOBS_SUCCESS,
  jobs,
});

export const fetchJobsAgent = (token, filter) => dispatch => {
  dispatch(fetchJobsAgentStart());
  const headers = {
    headers: {
      Authorization: `Token token=${token}`,
    },
  };
  var body = [];
  if (filter !== null) {
    body.push(`date_from=${filter.date_from}`);
    body.push(`date_to=${filter.date_to}`);
    body.push(`min_price=${filter.min_price}`);
    body.push(`max_price=${filter.max_price}`);
    body.push(`frequency=${filter.frequency}`);
    body.push(`current_page=${filter.current_page}`)
  }
  axios.get(`/agents/jobs?${body.join('&')}`, headers)
    .then((res) => {
      let historyjobs = [];
      historyjobs = res.data.job.data;
      dispatch(fetchJobsAgentSuccess(historyjobs));
    })
    .catch((err) => {
      dispatch(fetchJobsAgentFail(err));
    });
}