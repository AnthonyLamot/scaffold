import { combineReducers } from 'redux';
import { reducer as registerForm } from 'redux-form';

import navReducer from './navReducer';
import loadingReducer from './loadingReducer';


export default combineReducers({
  nav: navReducer,
  loading: loadingReducer,
  registerForm,
});
