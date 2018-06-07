import * as actionTypes from './actionTypes';
import axios from '../../axios-instance';
import Alert from 'react-s-alert';

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
      let user = {};
      user = res.data.customer.data;
      dispatch(fetchCurrentUserSuccess(user));
    })
    .catch((err) => {
      dispatch(fetchCurrentUserFail(err));
    });
};

export const updatedCurrentUserStart = () => ({
  type: actionTypes.UPDATED_CURRENT_USER_START,
});

export const updatedCurrentUserSuccess = (user) => ({
  type: actionTypes.UPDATED_CURRENT_USER_SUCCESS,
  user,
});

export const updatedCurrentUserFail = error => ({
  type: actionTypes.UPDATED_CURRENT_USER_FAIL,
});

export const updatedCurrentUser = (token, form) => dispatch => {
  dispatch(updatedCurrentUserStart());
  const headers = {
    headers: {
      Authorization: `Token token=${token}`,
    },
  };
  axios.put('/customers/update', form, headers)
    .then((res) => {
      console.log(res);
      let user = {};
      user = res.data.customer.data;
      dispatch(updatedCurrentUserSuccess(user));
      Alert.success(res.data.message, {
        position: 'bottom',
        effect: 'genie',
      });
    })
    .catch((err) => {
      dispatch(updatedCurrentUserFail(err));
      Alert.error(err.data.message);
    });
};

export const updatedCurrentUserAvatarStart = () => ({
  type: actionTypes.UPDATED_CURRENT_USER_START,
});

export const updatedCurrentUserAvatarSuccess = (user) => ({
  type: actionTypes.UPDATED_CURRENT_USER_SUCCESS,
  user,
});

export const updatedCurrentUserAvatarFail = error => ({
  type: actionTypes.UPDATED_CURRENT_USER_FAIL,
});

export const updatedCurrentUserAvatar = (token, file) => dispatch => {
  dispatch(updatedCurrentUserAvatarStart());
  const headers = {
    headers: {
      Authorization: `Token token=${token}`,
    },
  };
  axios.put('/customers/update', file, headers)
    .then((res) => {
      console.log(res);
      let user = {};
      user = res.data.customer.data;
      localStorage.setItem('profile', user.attributes.avatar.url);
      dispatch(updatedCurrentUserAvatarSuccess(user));
      Alert.success('Avatar actualizado exitosamente.', {
        position: 'bottom',
        effect: 'genie',
      });
    })
    .catch((err) => {
      dispatch(updatedCurrentUserAvatarFail(err));
      Alert.error(err.data.message);
    });
};

export const changePasswordStart = () => ({
  type: actionTypes.CHANGE_PASSWORD_START,
});

export const changePasswordSuccess = () => ({
  type: actionTypes.CHANGE_PASSWORD_SUCCESS,
});

export const changePasswordFail = error => ({
  type: actionTypes.CHANGE_PASSWORD_FAIL,
});

export const changePassword = (token, form) => dispatch => {
  dispatch(changePasswordStart());
  const headers = {
    headers: {
      Authorization: `Token token=${token}`,
    },
  };
  axios.put('/customers/change_password', form, headers)
    .then((res) => {
      console.log(res);
      dispatch(changePasswordSuccess());
      Alert.success(res.data.message, {
        position: 'bottom',
        effect: 'genie',
      });
    })
    .catch((err) => {
      dispatch(changePasswordFail(err));
      Alert.error(err.response.data.message, {
        position: 'bottom',
        effect: 'genie',
      });
    });
};