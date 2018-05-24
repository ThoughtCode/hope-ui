import * as actionTypes from './actionTypes';
import axios from '../../axios-instance';

export const fetchServicesSuccess = services => ({
  type: actionTypes.FETCH_SERVICES_SUCCESS,
  services,
});

export const fetchServicesFail = error => ({
  type: actionTypes.FETCH_SERVICES_FAIL,
  error,
});

export const fetchServicesStart = () => ({
  type: actionTypes.FETCH_SERVICES_START,
});

export const fetchServiceStart = () => ({
  type: actionTypes.FETCH_SERVICE_START,
});

export const fetchServiceFail = error => ({
  type: actionTypes.FETCH_SERVICE_FAIL,
  error,
});

export const fetchServiceSuccess = service => ({
  type: actionTypes.FETCH_SERVICE_SUCCESS,
  service,
})

export const fetchServices = token => (dispatch) => {
  dispatch(fetchServicesStart());
  const headers = {
    headers: {
      Authorization: `Token token=${token}`,
    },
  };
  axios.get('/customers/service_types', headers)
    .then((res) => {
      let services = [];
      services = res.data.service_type.data;
      dispatch(fetchServicesSuccess(services));
    })
    .catch((err) => {
      dispatch(fetchServicesFail(err));
    });
};

export const fetchService = (id, token) => dispatch => {
  dispatch(fetchServiceStart());
  const headers = {
    headers: {
      Authorization: `Token token=${token}`,
    },
  };
  axios.get(`/customers/service_types/${id}`, headers)
    .then((res) => {
      let service = [];
      service = res.data.service_type.data;
      dispatch(fetchServiceSuccess(service));
    })
    .catch((err) => {
      dispatch(fetchServiceFail(err));
    });
}
