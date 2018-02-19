import React from 'react';
import PropTypes from 'prop-types';
import { View, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import Colors from '../../config/Colors';


const Hamburger = props => (
  <View>
    <TouchableOpacity
      onPress={() => props.navigation.navigate('DrawerOpen')}
    >
      <Icon
        name="menu"
        size={30}
        color={Colors.$white}
        style={{ padding: 10 }}
      />
    </TouchableOpacity>
  </View>
);

Hamburger.propTypes = {
  navigation: PropTypes.object,
  navigate: PropTypes.func,
};

export default Hamburger;
