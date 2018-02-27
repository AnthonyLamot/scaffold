import React from 'react';
import PropTypes from 'prop-types';
import { View, Text } from 'react-native';
import { Field, reduxForm } from 'redux-form';
import { Button } from 'react-native-elements';

import { TextInputWithValidations } from '../../components';

import validations from './validations';
import Colors from '../../config/Colors';
import styles from './styles';


const RegisterForm = ({
  invalid,
  handleSubmit,
  submitRegister,
  submitting,
  serverError,
  loading,
}) => (
  <View style={styles.container} >
    <Field
      component={TextInputWithValidations}
      name="firstName"
      label="First Name"
      selectionColor={Colors.$red}
      fieldContainerStyle={styles.item}
    />
    <Field
      component={TextInputWithValidations}
      name="lastName"
      label="Last Name"
      selectionColor={Colors.$red}
      fieldContainerStyle={styles.item}
    />
    <Field
      component={TextInputWithValidations}
      name="email"
      label="Email"
      selectionColor={Colors.$red}
      fieldContainerStyle={styles.item}
    />
    <Field
      component={TextInputWithValidations}
      name="password"
      label="Password"
      selectionColor={Colors.$red}
      fieldContainerStyle={styles.item}
      secureTextEntry
    />
    <Field
      component={TextInputWithValidations}
      name="confirmPassword"
      label="Confirm Password"
      selectionColor={Colors.$red}
      fieldContainerStyle={styles.item}
      secureTextEntry
    />
    <View style={styles.buttonRegister} >
      {
        serverError.on ?
          <View style={styles.submissionError}>
            <Text style={styles.submissionErrorText}>{serverError.message}</Text>
          </View>
          : null
      }
      <Button
        backgroundColor={Colors.$blue}
        title="Register"
        raised
        disabled={invalid || submitting}
        onPress={handleSubmit(submitRegister)}
        loading={loading}
      />
    </View>
  </View>
);

RegisterForm.propTypes = {
  invalid: PropTypes.bool,
  handleSubmit: PropTypes.func,
  submitRegister: PropTypes.func,
  submitting: PropTypes.bool,
  serverError: PropTypes.object,
  loading: PropTypes.bool,
};

// Connect the component to Redux Form and pass some custom validaitons
export default reduxForm({
  form: 'register',
  validate: validations,
})(RegisterForm);
