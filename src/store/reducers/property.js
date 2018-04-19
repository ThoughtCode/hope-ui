import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../utility';

const initialState = {
  properties: [],
  property: [],
  loading: false,
};

const fetchPropertiesStart = state => updateObject(state, { loading: true });

const fetchPropertiesSuccess = (state, action) => updateObject(state, {
  properties: action.properties,
  loading: false,
});

const fetchPropertiesFail = state => updateObject(state, { loading: false });

const fetchPropertySuccess = (state, action) => updateObject(state, {
  property: action.property,
  loading: false,
});

const createPropertyStart = state => updateObject(state, { loading: true });

const createPropertyFail = state => updateObject(state, { loading: false });

const createPropertySuccess = (state, action) => updateObject(state, {
  properties: state.properties.concat(action.property),
  loading: false,
});

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_PROPERTIES_START: return fetchPropertiesStart(state, action);
    case actionTypes.FETCH_PROPERTIES_SUCCESS: return fetchPropertiesSuccess(state, action);
    case actionTypes.FETCH_PROPERTIES_FAIL: return fetchPropertiesFail(state, action);
    case actionTypes.FETCH_PROPERTY_SUCCESS: return fetchPropertySuccess(state, action);
    case actionTypes.CREATE_PROPERTY_START: return createPropertyStart(state, action);
    case actionTypes.CREATE_PROPERTY_SUCCESS: return createPropertySuccess(state, action);
    case actionTypes.CREATE_PROPERTY_FAIL: return createPropertyFail(state, action);
    default: return state;
  }
};

export default reducer;
