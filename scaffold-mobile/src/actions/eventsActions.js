import {
  CREATE_EVENT,
  CREATE_EVENT_ERROR,
  CREATE_EVENT_SUCCESS,
  GET_USER_EVENTS,
} from '../constants/actionTypes';
import {
  createEvent as createEventAPI,
  getUserEvents as getUserEventsAPI,
} from '../constants/api';


export const getUserEvents = userId => async (dispatch) => {
  dispatch({
    type: GET_USER_EVENTS,
    payload: await getUserEventsAPI(userId),
  });
};

const createEventSuccess = () => ({
  type: CREATE_EVENT_SUCCESS,
});

const createEventError = error => ({
  type: CREATE_EVENT_ERROR,
  payload: error,
});

export const createEvent = (navigation, values, userId) => async (dispatch) => {
  dispatch({ type: CREATE_EVENT });

  try {
    await createEventAPI(values);
    dispatch(createEventSuccess);
    getUserEvents(userId);
    navigation.goBack();
  } catch (e) {
    dispatch(createEventError);
  }
};
