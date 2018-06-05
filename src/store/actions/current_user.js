import * as actionTypes from './actionTypes';
import axios from '../../axios-instance';

export const fetchCurrentUserStart = () => ({
  type: actionTypes.FETCH_CURRENT_USER_START,
});

export const fetchCurrentUserFail = error => ({
  type: actionTypes.FETCH_CURRENT_USER_FAIL,
  error,
});

export const fetchCurrentUserSuccess = (user) => ({
  type: actionTypes.FETCH_CURRENT_USER_SUCCESS,
  user,
});

export const fetchCurrentUser = token => (dispatch) => {
  dispatch(fetchCurrentUserStart());
  const headers = {
    headers: {
      Authorization: `Token token=${token}`,
    },
  };
  axios.get('/customers/current', headers)
    .then((res) => {
      console.log(res);
    //   let cities = [];
    //   cities = res.data.city.data;
    //   dispatch(fetchCitiesSuccess(cities));
    })
    .catch((err) => {
    //   dispatch(fetchCitiesFail(err));
    });
};
