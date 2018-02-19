import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';

import navReducer from './navReducer';
import loadingReducer from './loadingReducer';
import authReducer from './authReducer';
import eventsReducer from './eventsReducer';


export default combineReducers({
  nav: navReducer,
  form,
  loading: loadingReducer,
  auth: authReducer,
  events: eventsReducer,
});
