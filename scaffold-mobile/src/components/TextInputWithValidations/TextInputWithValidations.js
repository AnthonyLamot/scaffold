import React from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import { FormInput, FormLabel, FormValidationMessage } from 'react-native-elements';

import Colors from '../../config/Colors';
import styles from './styles';

const TextInputWithValidations = ({
  input,
  fieldContainerStyle,
  label,
  meta: { touched, error },
  ...custom
}) => (
  <View style={fieldContainerStyle} >
    <FormLabel>
      {label}
    </FormLabel>
    <FormInput
      {...input}
      {...custom}
      inputStyle={styles.inputStyle}
    />
    {error && touched &&
      <FormValidationMessage
        labelStyle={{ color: Colors.$red }}
      >
        {error}
      </FormValidationMessage>
    }
  </View>
);

TextInputWithValidations.propTypes = {
  input: PropTypes.object,
  fieldContainerStyle: PropTypes.number,
  label: PropTypes.string,
  meta: PropTypes.object,
};

export default TextInputWithValidations;
