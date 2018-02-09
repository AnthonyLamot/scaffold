import React, { Component } from 'react';
import EStylesheet from 'react-native-extended-stylesheet';

import HomeScreen from './src/screens/HomeScreen';
import Colors from './src/constants/Colors';


EStylesheet.build(Colors);

/* eslint-disable react/prefer-stateless-function */
export default class App extends Component {
  render() {
    return <HomeScreen />;
  }
}
