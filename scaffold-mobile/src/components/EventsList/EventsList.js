import React from 'react';
import PropTypes from 'prop-types';
import { List, ListItem } from 'react-native-elements';

import styles from './styles';


const EventsList = ({ events }) => (
  <List containerStyle={styles.list} >
    {
      events.map(e => (
        <ListItem
          key={e._id}
          title={e.title}
          hideChevron
        />
      ))
    }
  </List>
);

EventsList.propTypes = {
  events: PropTypes.array,
};

export default EventsList;
