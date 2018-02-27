import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import { Button } from 'react-native-elements';

import { navigate } from './../helpers/navigationHelpers';
import Colors from '../config/Colors';
import styles from './styles/Home';


export default class HomeScreen extends Component {
  static propTypes = {
    navigation: PropTypes.object,
  }

  static navigationOptions = {
    title: 'Home',
    headerStyle: {
      backgroundColor: Colors.$green,
    },
    headerTitleStyle: {
      color: Colors.$white,
    },
  }

  render() {
    const { navigation } = this.props;

    return (
      <View style={styles.root} >
        <View style={styles.item} >
          <Button
            backgroundColor={Colors.$green}
            title="Login"
            raised
            onPress={() => navigate(navigation, 'LoginStack')}
          />
        </View>
        <View style={styles.item} >
          <Button
            backgroundColor={Colors.$blue}
            title="Register"
            raised
            onPress={() => navigate(navigation, 'RegisterStack')}
          />
        </View>
      </View>
    );
  }
}
