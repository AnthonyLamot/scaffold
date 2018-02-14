import React from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import { FormInput, FormLabel, FormValidationMessage } from 'react-native-elements';

import Colors from '../../config/Colors';

const TextInputWithValidations = ({
  input,
  containerStyle,
  label,
  meta: { touched, error },
  ...custom
}) => (
  <View style={containerStyle} >
    <FormLabel>
      {label}
    </FormLabel>
    <FormInput
      {...input}
      {...custom}
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
  containerStyle: PropTypes.number,
  label: PropTypes.string,
  meta: PropTypes.object,
};

export default TextInputWithValidations;
