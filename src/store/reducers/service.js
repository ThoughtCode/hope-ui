import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../utility';

const initialState = {
  services: [],
  service: [],
};

const fetchServicesSuccess = (state, action) => updateObject(state, {
  services: action.services,
});

const fetchServiceSuccess = (state, action) => updateObject(state, {
  service: action.service,
})

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_SERVICES_SUCCESS: return fetchServicesSuccess(state, action);
    case actionTypes.FETCH_SERVICE_SUCCESS: return fetchServiceSuccess(state, action);
    default: return state;
  }
};

export default reducer;
