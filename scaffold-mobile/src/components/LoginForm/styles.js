import EStyleSheet from 'react-native-extended-stylesheet';

import Colors from '../../config/Colors';


const styles = EStyleSheet.create({
  container: {
    flex: 1,
  },
  fieldContainerStyle: {
    marginVertical: '2%',
  },
  buttonLogin: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: '5%',
  },
  submissionError: {
    marginVertical: '2%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  submissionErrorText: {
    color: Colors.$red,
  },
});

export default styles;
