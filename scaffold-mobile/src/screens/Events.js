import React, { Component } from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import {
  EventsList,
  Hamburger,
  Plus,
  Loading,
} from '../components';

import { getUserEvents as getUserEventsAction } from '../actions/eventsActions';
import Colors from '../config/Colors';
import styles from './styles/Events';


class Events extends Component {
  static propTypes = {
    getUserEventsAction: PropTypes.func,
    events: PropTypes.object,
    auth: PropTypes.object,
  }

  static navigationOptions = ({ navigation }) => ({
    headerTitle: 'Events',
    headerLeft: <Hamburger navigation={navigation} />,
    headerRight: <Plus navigation={navigation} route="CreateEvent" />,
    headerStyle: {
      backgroundColor: Colors.$green,
    },
    headerTitleStyle: {
      color: Colors.$white,
    },
  });

  componentDidMount() {
    const { auth } = this.props;
    this.props.getUserEventsAction(auth.currentUser.id);
  }

  render() {
    const { events } = this.props;

    if (events.loading) {
      return <Loading />;
    }

    return (
      <View style={styles.root} >
        <EventsList events={events.events} />
      </View>
    );
  }
}

const mapStateToProps = ({ events, auth }) => ({ events, auth });

export default connect(
  mapStateToProps,
  { getUserEventsAction },
)(Events);
