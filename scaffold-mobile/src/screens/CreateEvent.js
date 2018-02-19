import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import {
  CreateEventForm,
  GoBack,
} from '../components';

import {
  createEvent as createEventAction,
} from '../actions/eventsActions';
import Colors from '../config/Colors';


class CreateEvent extends Component {
  static propTypes = {
    events: PropTypes.object,
    createEventAction: PropTypes.func,
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
    const { navigation } = this.props;
    await this.props.createEventAction(navigation, values);
  }

  render() {
    const { events } = this.props;

    return (
      <CreateEventForm
        serverError={events.error}
        submitEvent={this.submitLogin}
      />
    );
  }
}

const mapStateToProps = ({ events }) => ({
  events,
});

export default connect(mapStateToProps, { createEventAction })(CreateEvent);
