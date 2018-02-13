import React from 'react';
import { View } from 'react-native';
import { Field, reduxForm } from 'redux-form';
import { Button } from 'react-native-elements';

import { TextInputWithValidations } from '../../components';

import Colors from '../../config/Colors';
import styles from './styles';


const RegisterForm = () => (
  <View style={styles.container} >
    <Field
      component={TextInputWithValidations}
      name="firstName"
      label="First Name"
      selectionColor={Colors.$red}
      containerStyle={styles.item}
    />
  </View>
);

export default reduxForm({
  form: 'register',
})(RegisterForm);
