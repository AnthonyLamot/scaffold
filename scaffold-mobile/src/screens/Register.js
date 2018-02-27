import React, { Component } from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import {
  RegisterForm,
  GoBack,
} from './../components';

import Colors from '../config/Colors';
import { register as registerAction } from '../actions/authActions';
import styles from './styles/Register';


/* eslint-disable react/prefer-stateless-function */
class Register extends Component {
  static propTypes = {
    registerAction: PropTypes.func,
    auth: PropTypes.object,
  };

  static navigationOptions = ({ navigation }) => ({
    title: 'Register',
    headerLeft: <GoBack navigation={navigation} route={null} />,
    headerStyle: {
      backgroundColor: Colors.$green,
    },
    headerTintColor: Colors.$white,
  });

  // Submit the values from the RegisterForm through a Redux action
  // We also pass on the navigation prop so we can use it in navigationHelpers
  submitRegister = async (values) => {
    const { navigation } = this.props;
    await this.props.registerAction(navigation, values);
  }

  render() {
    const { auth } = this.props;

    return (
      <View style={styles.root} >
        <RegisterForm
          submitRegister={this.submitRegister}
          serverError={auth.error}
          loading={auth.loading}
        />
      </View>
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
