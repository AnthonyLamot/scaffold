import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import {
  RegisterForm,
} from './../components';

import Colors from '../config/Colors';
import { register as registerAction } from '../actions/authActions';


/* eslint-disable react/prefer-stateless-function */
class Register extends Component {
  static propTypes = {
    registerAction: PropTypes.func,
    auth: PropTypes.object,
  };

  static navigationOptions = {
    title: 'Register',
    headerStyle: {
      backgroundColor: Colors.$green,
    },
    headerTintColor: Colors.$white,
  }

  // Submit the values from the RegisterForm through a Redux action
  // We also pass on the navigation prop so we can use it in navigationHelpers
  submitRegister = async (values) => {
    const { navigation } = this.props;
    await this.props.registerAction(navigation, values);
  }

  render() {
    const { auth } = this.props;

    return (
      <RegisterForm
        submitRegister={this.submitRegister}
        serverError={auth.error}
        loading={auth.loading}
      />
    );
  }
}

const mapStateToProps = ({ auth }) => ({
  auth,
});

// Connect the screen component to Redux and pass mapped state and actions
export default connect(
  mapStateToProps,
  { registerAction },
)(Register);
