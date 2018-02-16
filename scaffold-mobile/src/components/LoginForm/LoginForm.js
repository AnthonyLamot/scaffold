import React from 'react';
import PropTypes from 'prop-types';
import { View, Text } from 'react-native';
import { Field, reduxForm } from 'redux-form';
import { Button } from 'react-native-elements';

import { TextInputWithValidations } from '../../components';

import validations from './validations';
import Colors from '../../config/Colors';
import styles from './styles';


const LoginForm = ({
  invalid,
  handleSubmit,
  submitLogin,
  submitting,
  serverError,
  loading,
}) => (
  <View style={styles.container} >
    <Field
      component={TextInputWithValidations}
      name="email"
      label="Email"
      selectionColor={Colors.$red}
      containerStyle={styles.item}
    />
    <Field
      component={TextInputWithValidations}
      name="password"
      label="Password"
      selectionColor={Colors.$red}
      containerStyle={styles.item}
      secureTextEntry
    />
    <View style={styles.buttonLogin} >
      {
        serverError.on ?
          <View style={styles.submissionError}>
            <Text style={styles.submissionErrorText}>{serverError.message}</Text>
          </View>
          : null
      }
      <Button
        backgroundColor={Colors.$blue}
        title="Login"
        raised
        disabled={invalid || submitting}
        onPress={handleSubmit(submitLogin)}
        loading={loading}
      />
    </View>
  </View>
);

LoginForm.propTypes = {
  invalid: PropTypes.bool,
  handleSubmit: PropTypes.func,
  submitLogin: PropTypes.func,
  submitting: PropTypes.bool,
  serverError: PropTypes.object,
  loading: PropTypes.bool,
};

// Connect the component to Redux Form and pass some custom validaitons
export default reduxForm({
  form: 'login',
  validate: validations,
})(LoginForm);
