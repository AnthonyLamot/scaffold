import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import {
  createReduxBoundAddListener,
  createReactNavigationReduxMiddleware,
} from 'react-navigation-redux-helpers';

import reducers from './../reducers';


// Here we define Redux middlewares
const middlewares = [
  thunk,
];

// Note: createReactNavigationReduxMiddleware must be run before createReduxBoundAddListener
const reactNavigationReduxMiddleware = createReactNavigationReduxMiddleware(
  'root',
  state => state.nav,
);
// We chose to define the Navigator component elsewhere, hence we need to export the addListener
export const addListener = createReduxBoundAddListener('root');

// We add the Redux middleware for React Navigation
middlewares.push(reactNavigationReduxMiddleware);

// Redux Devtools allow for easier bug fixing
// If it is not present (i.e. production), we just compose()
/* eslint-disable no-underscore-dangle */
const enhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
/* eslint-enable no-underscore-dangle */

// We define a store with reducers, preloadstate, and enhancers
const store = createStore(
  reducers,
  {},
  enhancers(applyMiddleware(...middlewares)),
);

export default store;
