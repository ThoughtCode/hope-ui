import * as actionTypes from './actionTypes';
import axios from '../../axios-instance';

export const fetchPropertiesSuccess = properties => ({
  type: actionTypes.FETCH_PROPERTIES_SUCCESS,
  properties,
});

export const fetchPropertiesFail = error => ({
  type: actionTypes.FETCH_PROPERTIES_FAIL,
  error,
});

export const fetchPropertiesStart = () => ({
  type: actionTypes.FETCH_PROPERTIES_START,
});

export const fetchPropertySuccess = property => ({
  type: actionTypes.FETCH_PROPERTY_SUCCESS,
  property,
});

export const fetchProperties = token => (dispatch) => {
  dispatch(fetchPropertiesStart());
  const headers = {
    headers: {
      Authorization: `Token token=${token}`,
    },
  };
  axios.get('/customers/properties', headers)
    .then((res) => {
      let properties = [];
      properties = res.data.property.data;
      dispatch(fetchPropertiesSuccess(properties));
    })
    .catch((err) => {
      dispatch(fetchPropertiesFail(err));
    });
};

export const fetchProperty = (token, propertyId) => (dispatch) => {
  const headers = {
    headers: {
      Authorization: `Token token=${token}`,
    },
  };
  axios.get(`/customers/properties/${propertyId}`, headers)
    .then((res) => {
      let property = [];
      property = res.data.property.data;
      dispatch(fetchPropertySuccess(property));
    })
    .catch((err) => {
      dispatch(fetchPropertiesFail(err));
    });
};

export const createPropertyStart = () => ({
  type: actionTypes.CREATE_PROPERTY_START,
});

export const createPropertyFail = error => ({
  type: actionTypes.CREATE_PROPERTY_FAIL,
  error,
});

export const createPropertySuccess = property => ({
  type: actionTypes.CREATE_PROPERTY_SUCCESS,
  property,
});

export const createProperty = (token, formData) => (dispatch) => {
  dispatch(createPropertyStart());
  const headers = {
    headers: {
      Authorization: `Token token=${token}`,
    },
  };
  axios.post('/customers/properties', formData, headers)
    .then((res) => {
      const property = res.data.property.data;
      dispatch(createPropertySuccess(property));
    })
    .catch((err) => {
      dispatch(createPropertyFail(err));
    });
};
