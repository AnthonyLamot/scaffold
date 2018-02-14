import React, { Component } from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import {
  RegisterForm,
  Loading,
} from './../components';

import Colors from '../config/Colors';
import styles from './styles/Register';
import { register as registerAction } from '../actions/registerActions';


/* eslint-disable react/prefer-stateless-function */
class Register extends Component {
  static propTypes = {
    registerAction: PropTypes.func,
    register: PropTypes.object,
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
    const { register } = this.props;

    // Show a loading screen while the form is being submitted
    if (register.loading) {
      return <Loading />;
    // Show the error if something went wrong
    } else if (register.error.on) {
      return (
        <View style={styles.root} >
          <Text>
            {register.error.message}
          </Text>
        </View>
      );
    }

    return (
      <RegisterForm
        submitRegister={this.submitRegister}
      />
    );
  }
}

const mapStateToProps = ({ register }) => ({
  register,
});

// Connect the screen component to Redux and pass mapped state and actions
export default connect(
  mapStateToProps,
  { registerAction },
)(Register);
