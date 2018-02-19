import React from 'react';
import PropTypes from 'prop-types';
import { View, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import Colors from '../../config/Colors';


const GoBack = ({ navigation, route }) => (
  <View>
    <TouchableOpacity
      onPress={() => navigation.goBack(route)}
    >
      <Icon
        name="arrow-left"
        size={30}
        color={Colors.$white}
        style={{ padding: 10 }}
      />
    </TouchableOpacity>
  </View>
);

GoBack.propTypes = {
  navigation: PropTypes.object,
  route: PropTypes.any,
};

export default GoBack;
