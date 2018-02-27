import React from 'react';
import PropTypes from 'prop-types';
import { Card, ListItem, Button } from 'react-native-elements';

import Colors from '../../config/Colors';
import styles from './styles';


const MyProfileCard = ({
  currentUser,
  handleLogout,
}) => (
  <Card
    title={`Logged in as ${currentUser.firstName} ${currentUser.lastName}`}
  >
    <ListItem
      title={currentUser.email}
      hideChevron
      containerStyle={styles.item}
    />
    <Button
      backgroundColor={Colors.$red}
      title="Logout"
      raised
      onPress={() => handleLogout()}
      style={styles.button}
    />
  </Card>
);

MyProfileCard.propTypes = {
  currentUser: PropTypes.object,
  handleLogout: PropTypes.func,
};

export default MyProfileCard;
