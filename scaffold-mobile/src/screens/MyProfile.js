import React, { Component } from 'react';

import {
  Placeholder,
} from './../components';

import Colors from '../config/Colors';


/* eslint-disable react/prefer-stateless-function */
export default class Login extends Component {
  static navigationOptions = {
    title: 'My Profile',
    headerStyle: {
      backgroundColor: Colors.$green,
    },
    headerTintColor: Colors.$white,
  }

  render() {
    return <Placeholder />;
  }
}
