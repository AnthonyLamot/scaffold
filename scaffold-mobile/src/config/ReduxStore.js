import { createStore, applyMiddleware, compose } from 'redux';
import ReduxThunk from 'redux-thunk';
import {
  createReduxBoundAddListener,
  createReactNavigationReduxMiddleware,
} from 'react-navigation-redux-helpers';

import reducers from './../reducers';


// Note: createReactNavigationReduxMiddleware must be run before createReduxBoundAddListener
const reactNavigationReduxMiddleware = createReactNavigationReduxMiddleware(
  'root',
  state => state.nav,
);

export const addListener = createReduxBoundAddListener('root');

/* eslint-disable no-underscore-dangle */
const store = createStore(
  reducers,
  {},
  compose(
    applyMiddleware(reactNavigationReduxMiddleware, ReduxThunk),
    process.env.NODE_ENV !== 'production' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
      window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__()
      : f => f,
  ),
);
/* eslint-enable no-underscore-dangle */

export default store;
