import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import { connect } from 'react-redux';

import {
  CreateEventForm,
  GoBack,
} from '../components';

import {
  createEvent as createEventAction,
} from '../actions/eventsActions';
import Colors from '../config/Colors';
import styles from './styles/CreateEvent';


class CreateEvent extends Component {
  static propTypes = {
    events: PropTypes.object,
    createEventAction: PropTypes.func,
    auth: PropTypes.object,
  }

  static navigationOptions = ({ navigation }) => ({
    title: 'Create an Event',
    headerLeft: <GoBack navigation={navigation} />,
    headerStyle: {
      backgroundColor: Colors.$green,
    },
    headerTitleStyle: {
      color: Colors.$white,
    },
  });

  submitLogin = async (values) => {
    const { navigation, auth } = this.props;
    await this.props.createEventAction(navigation, values, auth.currentUser.id);
  }

  render() {
    const { events } = this.props;

    return (
      <View style={styles.root} >
        <CreateEventForm
          serverError={events.error}
          submitEvent={this.submitLogin}
        />
      </View>
    );
  }
}

const mapStateToProps = ({ events, auth }) => ({
  events,
  auth,
});

export default connect(mapStateToProps, { createEventAction })(CreateEvent);
