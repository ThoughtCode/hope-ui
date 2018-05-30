import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../utility';
// import { updateObject } from '../utility';

const initialState = {
  jobs: [],
  job: [],
};

const fetchJobsSuccess = (state, action) => updateObject(state, {
  jobs: action.jobs,
});

const fetchJobSuccess = (state, action) => updateObject(state, {
  job: action.job,
});

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_JOBS_START: return state;
    case actionTypes.FETCH_JOBS_SUCCESS: return fetchJobsSuccess(state, action);
    case actionTypes.FETCH_JOBS_FAIL: return state;
    case actionTypes.FETCH_JOB_START: return state;
    case actionTypes.FETCH_JOB_SUCCESS: return fetchJobSuccess(state, action);
    case actionTypes.FETCH_JOB_FAIL: return state;
    default: return state;
  }
};

export default reducer;
