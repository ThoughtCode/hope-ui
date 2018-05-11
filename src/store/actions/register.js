import { push } from 'react-router-redux';
import * as actionTypes from './actionTypes';
import axios from '../../axios-instance';

export const registerClientSuccess = (id, formData) => ({
  type: actionTypes.REGISTER_CLIENT_SUCCESS,
  clientId: id,
  formData,
});

export const registerClientFail = error => ({
  type: actionTypes.REGISTER_CLIENT_FAIL,
  error,
});

export const registerClientStart = () => ({
  type: actionTypes.REGISTER_CLIENT_START,
});

export const registerAgentSuccess = (id, formData) => ({
  type: actionTypes.REGISTER_AGENT_SUCCESS,
  agentId: id,
  formData,
});

export const registerAgentFail = error => ({
  type: actionTypes.REGISTER_AGENT_FAIL,
  error,
});

export const registerAgentStart = () => ({
  type: actionTypes.REGISTER_AGENT_START,
});

export const registerClient = formData => (dispatch) => {
  dispatch(registerClientStart());
  axios.post('/customers/signup/', formData)
    .then((response) => {
      const customer = response.data.customer.data;
      localStorage.setItem('token', customer.attributes.access_token);
      dispatch(registerClientSuccess(customer.id, formData));
      dispatch(push('/cliente/dashboard'));
    })
    .catch((error) => {
      dispatch(registerClientFail(error));
    });
};

export const registerAgent = formData => (dispatch) => {
  dispatch(registerAgentStart());
  axios.post('/agents/signup/', formData)
    .then((response) => {
      const agent = response.data.agent.data;
      localStorage.setItem('token', agent.attributes.access_token);
      dispatch(registerAgentSuccess(agent.id, formData));
      dispatch(push('/agente/dashboard'));
    })
    .catch((error) => {
      dispatch(registerAgentFail(error));
    });
};
