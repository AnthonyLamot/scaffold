import React, { Component } from 'react';
import EStylesheet from 'react-native-extended-stylesheet';
import { Provider } from 'react-redux';

import Navigator from './src/config/Navigator';
import Colors from './src/config/Colors';
import store from './src/config/ReduxStore';


EStylesheet.build(Colors);

/* eslint-disable react/prefer-stateless-function */
export default class App extends Component {
  render() {
    return (
      <Provider store={store} >
        <Navigator />
      </Provider>
    );
  }
}
