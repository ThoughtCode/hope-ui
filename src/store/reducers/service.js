import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../utility';

const initialState = {
  services: [],
  service: [],
  loading: false,
  holidays: [],
  invoice: [],
};

const fetchServicesStart = (state, action) => updateObject(state, {
  loading: true,
});

const fetchServicesSuccess = (state, action) => updateObject(state, {
  services: action.services,
  loading: false,
});

const fetchServicesFail = (state, action) => updateObject(state, {
  loading: false,
});

const fetchServiceStart = (state, action) => updateObject(state, {
  service: [],
  loading: true,
});

const fetchServiceSuccess = (state, action) => updateObject(state, {
  service: action.service,
  loading: false,
});

const fetchServiceFail = (state, action) => updateObject(state, {
  loading: false,
});

const holidaysStart = (state, action) => updateObject(state, {
  loading: true,
});

const holidaysSuccess = (state, action) => updateObject(state, {
  holidays: action.holidays,
  loading: false,
});

const holidaysFail = (state, action) => updateObject(state, {
  loading: false,
});

const invoiceStart = (state, action) => updateObject(state, {
  loading: true,
});

const invoiceSuccess = (state, action) => updateObject(state, {
  invoice: action.invoice,
  loading: false,
});

const invoiceFail = (state, action) => updateObject(state, {
  loading: false,
});

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_SERVICES_START: return fetchServicesStart(state, action);
    case actionTypes.FETCH_SERVICES_SUCCESS: return fetchServicesSuccess(state, action);
    case actionTypes.FETCH_SERVICES_FAIL: return fetchServicesFail(state, action);
    case actionTypes.FETCH_SERVICE_START: return fetchServiceStart(state, action);
    case actionTypes.FETCH_SERVICE_SUCCESS: return fetchServiceSuccess(state, action);
    case actionTypes.FETCH_SERVICE_FAIL: return fetchServiceFail(state, action);
    case actionTypes.HOLIDAYS_START: return holidaysStart(state, action);
    case actionTypes.HOLIDAYS_SUCCESS: return holidaysSuccess(state, action);
    case actionTypes.HOLIDAYS_FAIL: return holidaysFail(state, action);
    case actionTypes.INVOICE_START: return invoiceStart(state, action);
    case actionTypes.INVOICE_SUCCESS: return invoiceSuccess(state, action);
    case actionTypes.INVOICE_FAIL: return invoiceFail(state, action);
    default: return state;
  }
};

export default reducer;
