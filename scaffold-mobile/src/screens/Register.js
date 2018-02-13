import React, { Component } from 'react';

import {
  RegisterForm,
} from './../components';

import Colors from '../config/Colors';


/* eslint-disable react/prefer-stateless-function */
export default class Register extends Component {
  static navigationOptions = {
    title: 'Register',
    headerStyle: {
      backgroundColor: Colors.$green,
    },
    headerTintColor: Colors.$white,
  }

  render() {
    return <RegisterForm />;
  }
}
