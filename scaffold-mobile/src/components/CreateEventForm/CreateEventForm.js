import React from 'react';
import PropTypes from 'prop-types';
import { View, Text } from 'react-native';
import { Field, reduxForm } from 'redux-form';
import { Button } from 'react-native-elements';

import { TextInputWithValidations } from '../../components';

import validations from './validations';
import Colors from '../../config/Colors';
import styles from './styles';


const CreateEventForm = ({
  invalid,
  handleSubmit,
  submitEvent,
  submitting,
  serverError,
  loading,
}) => (
  <View style={styles.container} >
    <Field
      component={TextInputWithValidations}
      name="title"
      label="Title"
      selectionColor={Colors.$red}
      containerStyle={styles.item}
    />
    <Field
      component={TextInputWithValidations}
      name="description"
      label="Description"
      selectionColor={Colors.$red}
      containerStyle={styles.item}
      secureTextEntry
    />
    <View style={styles.buttonSubmit} >
      {
        serverError.on ?
          <View style={styles.submissionError}>
            <Text style={styles.submissionErrorText}>{serverError.message}</Text>
          </View>
          : null
      }
      <Button
        backgroundColor={Colors.$blue}
        title="Create Event"
        raised
        disabled={invalid || submitting}
        onPress={handleSubmit(submitEvent)}
        loading={loading}
      />
    </View>
  </View>
);

CreateEventForm.propTypes = {
  invalid: PropTypes.bool,
  handleSubmit: PropTypes.func,
  submitEvent: PropTypes.func,
  submitting: PropTypes.bool,
  serverError: PropTypes.object,
  loading: PropTypes.bool,
};

// Connect the component to Redux Form and pass some custom validaitons
export default reduxForm({
  form: 'createEvent',
  validate: validations,
})(CreateEventForm);
