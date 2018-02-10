import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Text, View, TouchableOpacity } from 'react-native';

import { navigate } from './../helpers';
import {
  Loading,
} from './../components';


export default class HomeScreen extends Component {
  static propTypes = {
    navigation: PropTypes.object,
  }

  state = {
    loading: true,
  }

  componentDidMount() {
    setTimeout(() => this.everythingLoaded(), 1000);
  }

  everythingLoaded() {
    this.setState({ loading: false });
  }

  render() {
    const { navigation } = this.props;

    if (this.state.loading) {
      return <Loading />;
    }
    return (
      <View>
        <TouchableOpacity onPress={() => navigate(navigation, 'Login')} >
          <Text style={{ color: 'blue' }} >Login</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
