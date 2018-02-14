import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';

import navReducer from './navReducer';
import loadingReducer from './loadingReducer';
import registerReducer from './registerReducer';


export default combineReducers({
  nav: navReducer,
  form,
  loading: loadingReducer,
  register: registerReducer,
});
