import {
  REGISTER,
  REGISTER_ERROR,
  REGISTER_SUCCESS,
  LOGIN,
  LOGIN_ERROR,
  LOGIN_SUCCESS,
  LOGOUT,
} from '../constants/actionTypes';


const initialState = {
  currentUser: null,
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
      return {
        ...initialState,
        currentUser: action.payload,
      };
    case REGISTER_ERROR:
      return {
        ...initialState,
        error: {
          on: true,
          message: action.payload.message,
        },
      };
    case LOGIN:
      return {
        ...initialState,
        loading: true,
      };
    case LOGIN_SUCCESS:
      return {
        ...initialState,
        currentUser: action.payload,
      };
    case LOGIN_ERROR:
      return {
        ...initialState,
        error: {
          on: true,
          message: action.payload.message,
        },
      };
    case LOGOUT:
      return {
        ...initialState,
      };
    default:
      return state;
  }
};
