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

export const fetchJobsAgentSuccess = (jobs, total_pages) => ({
  type: actionTypes.FETCH_AGENT_JOBS_SUCCESS,
  jobs,
  total_pages,
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
      let jobs = [];
      if (res.data.job) {
        jobs = res.data.job.data;
      } else {
        jobs = res.data.data;
      }
      let total_pages = 0;
      total_pages = res.headers['x-total-pages'];
      dispatch(fetchJobsAgentSuccess(jobs, total_pages));
    })
    .catch((err) => {
      dispatch(fetchJobsAgentFail(err));
    });
};

export const acceptedJobStart = () => ({
  type: actionTypes.ACCEPTED_JOB_START,
});

export const acceptedJobSuccess = (job) => ({
  type: actionTypes.ACCEPTED_JOB_SUCCESS,
  job,
});

export const acceptedJobFail = () => ({
  type: actionTypes.ACCEPTED_JOB_FAIL,
});

export const acceptedJob = (token, job_id, proposal_id) => dispatch => {
  dispatch(acceptedJobStart());
  const headers = {
    headers: {
      Authorization: `Token token=${token}`,
    }
  }
  axios.get(`/customers/jobs/${job_id}/accepted/${proposal_id}`, headers)
    .then((res) => {
      let job = [];
      job = res.data.job.data;
      dispatch(acceptedJobSuccess(job));
    })
    .catch((err) => {
      console.log(err);
      dispatch(acceptedJobFail());
    })
};

export const cancelledJobStart = () => ({
  type: actionTypes.CANCELLED_JOB_START,
});

export const cancelledJobSuccess = () => ({
  type: actionTypes.CANCELLED_JOB_SUCCESS,
});

export const cancelledJobFail = () => ({
  type: actionTypes.CANCELLED_JOB_FAIL,
});

export const cancelledJob = (token, job_id) => dispatch => {
  dispatch(cancelledJobStart());
  const headers = {
    headers: {
      Authorization: `Token token=${token}`,
    }
  }
  axios.get(`/customers/jobs/${job_id}/cancelled`, headers)
    .then((res) => {
      dispatch(cancelledJobSuccess());
      dispatch(push('/cliente/dashboard'));
      Alert.success(res.data.message, {
        position: 'bottom',
        effect: 'genie',
      });
    })
    .catch((err) => {
      dispatch(cancelledJobFail());
      Alert.error(err.response.data.message, {
        position: 'bottom',
        effect: 'genie',
      });
    })
};

export const applyProposalStart = () => ({
  type: actionTypes.APPLY_PROPOSAL_START,
});

export const applyProposalSuccess = () => ({
  type: actionTypes.APPLY_PROPOSAL_SUCCESS,
});

export const applyProposalFail = () => ({
  type: actionTypes.APPLY_PROPOSAL_FAIL,
});

export const applyProposal = (token, job_id) => dispatch => {
  dispatch(applyProposalStart());
  const headers = {
    headers: {
      Authorization: `Token token=${token}`,
    },
  };
  axios.post(`/agents/jobs/${job_id}/proposals`, null, headers)
    .then((res) => {
      dispatch(applyProposalSuccess());
      Alert.success(res.data.message, {
        position: 'bottom',
        effect: 'genie',
      });
    })
    .catch((err) => {
      dispatch(applyProposalFail());
      if (err.response.data.message.base) {
        Alert.error(err.response.data.message.base[0], {
          position: 'bottom',
          effect: 'genie',
        });
      } else if (err.response.data.message) {
        Alert.error(err.response.data.message, {
          position: 'bottom',
          effect: 'genie',
        });
      }
    });
};
