import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import { connect } from 'react-redux';

import {
  MyProfileCard,
  Hamburger,
} from './../components';

import Colors from '../config/Colors';
import styles from './styles/MyProfile';
import {
  logout as logoutAction,
} from '../actions/authActions';


/* eslint-disable react/prefer-stateless-function */
class MyProfile extends Component {
  static propTypes = {
    auth: PropTypes.object,
    logoutAction: PropTypes.func,
    navigation: PropTypes.object,
  }

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

  handleLogout = () => {
    const { navigation } = this.props;
    this.props.logoutAction(navigation);
  }

  render() {
    const { auth } = this.props;

    return (
      <View style={styles.root} >
        <MyProfileCard
          currentUser={auth.currentUser}
          handleLogout={this.handleLogout}
        />
      </View>
    );
  }
}

const mapStateToProps = ({ auth }) => ({ auth });

export default connect(mapStateToProps, { logoutAction })(MyProfile);
