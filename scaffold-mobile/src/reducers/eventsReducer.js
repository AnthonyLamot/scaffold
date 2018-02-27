import {
  CREATE_EVENT,
  CREATE_EVENT_ERROR,
  CREATE_EVENT_SUCCESS,
  GET_USER_EVENTS,
} from '../constants/actionTypes';


const initialState = {
  events: [],
  error: {
    on: false,
    message: null,
  },
  loading: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case CREATE_EVENT:
      return {
        ...state,
        error: {
          on: false,
          message: null,
        },
        loading: true,
      };
    case CREATE_EVENT_SUCCESS:
      return {
        ...state,
        error: {
          on: false,
          message: null,
        },
        loading: false,
      };
    case CREATE_EVENT_ERROR:
      return {
        ...state,
        error: {
          on: true,
          message: action.payload.message,
        },
        loading: false,
      };
    case GET_USER_EVENTS:
      return {
        ...state,
        events: action.payload,
      };
    default:
      return state;
  }
};
