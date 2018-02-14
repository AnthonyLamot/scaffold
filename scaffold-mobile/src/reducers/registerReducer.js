import {
  REGISTER,
  REGISTER_ERROR,
  REGISTER_SUCCESS,
} from '../constants/actionTypes';

const initialState = {
  error: {
    on: false,
    message: null,
  },
  loading: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case REGISTER:
      return {
        ...initialState,
        loading: true,
      };
    case REGISTER_SUCCESS:
      return initialState;
    case REGISTER_ERROR:
      return {
        error: {
          on: true,
          message: 'Error while registering',
        },
        loading: false,
      };
    default:
      return state;
  }
};
