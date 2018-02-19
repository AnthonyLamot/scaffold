import React, { Component } from 'react';

import {
  Placeholder,
  Hamburger,
} from './../components';

import Colors from '../config/Colors';


/* eslint-disable react/prefer-stateless-function */
export default class MyProfile extends Component {
  static navigationOptions = ({ navigation }) => ({
    headerTitle: 'My Profile',
    headerLeft: <Hamburger navigation={navigation} />,
    headerStyle: {
      backgroundColor: Colors.$green,
    },
    headerTitleStyle: {
      color: Colors.$white,
    },
  });

  render() {
    return <Placeholder />;
  }
}
