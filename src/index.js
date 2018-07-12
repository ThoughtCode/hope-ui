import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import createHistory from 'history/createBrowserHistory';
import { ConnectedRouter, routerMiddleware } from 'react-router-redux';
import thunk from 'redux-thunk';

import { MuiThemeProvider, createMuiTheme} from 'material-ui/styles';

import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import clientRegisterReducer from './store/reducers/register';
import clientAuthReducer from './store/reducers/auth';
import clientPropertyReducer from './store/reducers/property';
import clientServiceReducer from './store/reducers/service';
import clientCityReducer from './store/reducers/city';
import clientNeightborhoodReducer from './store/reducers/neightborhood';
import clientJobReducer from './store/reducers/job';
import clientUserReducer from './store/reducers/current_user';
import clientProposalReducer from './store/reducers/proposal';
import clientReviews from './store/reducers/reviews';
import disableButtonQualify from './store/reducers/job';

const history = createHistory();

const middleware = routerMiddleware(history);

/* eslint no-underscore-dangle: 0 */
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({
  register: clientRegisterReducer,
  auth: clientAuthReducer,
  property: clientPropertyReducer,
  service: clientServiceReducer,
  city: clientCityReducer,
  neightborhood: clientNeightborhoodReducer,
  job: clientJobReducer,
  user: clientUserReducer,
  proposal: clientProposalReducer,
  reviews: clientReviews,
  disableButton: disableButtonQualify,
});

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk, middleware)));

const theme = createMuiTheme({
  typography: {
    fontFamily: 'Helvetica',
  },
});

const app = (
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <MuiThemeProvider theme={theme}>
        <App />
      </MuiThemeProvider>
    </ConnectedRouter>
  </Provider>
);


ReactDOM.render(app, document.getElementById('root'));
registerServiceWorker();
