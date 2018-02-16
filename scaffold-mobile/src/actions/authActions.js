import {
  REGISTER,
  REGISTER_ERROR,
  REGISTER_SUCCESS,
  LOGIN,
  LOGIN_ERROR,
  LOGIN_SUCCESS,
} from '../constants/actionTypes';
import {
  register as registerAPI,
  login as loginAPI,
} from '../constants/api';
import { resetAndNavigate } from '../helpers/navigationHelpers';


const registerSuccess = user => ({
  type: REGISTER_SUCCESS,
  payload: user,
});

const registerError = error => ({
  type: REGISTER_ERROR,
  payload: error,
});

export const register = (navigation, values) => async (dispatch) => {
  dispatch({ type: REGISTER });

  let dispatchEvent = null;
  try {
    const res = await registerAPI(values);
    const { user } = res.data;
    dispatchEvent = registerSuccess(user);
    resetAndNavigate(navigation, 'UserRoutes');
  } catch (e) {
    // Get the data that came along with the response
    dispatchEvent = registerError(e.response.data);
  }

  dispatch(dispatchEvent);
};

const loginSuccess = user => ({
  type: LOGIN_SUCCESS,
  payload: user,
});

const loginError = error => ({
  type: LOGIN_ERROR,
  payload: error,
});

export const login = (navigation, values) => async (dispatch) => {
  dispatch({ type: LOGIN });

  let dispatchEvent = null;
  try {
    const res = await loginAPI(values);
    const { user } = res.data;
    dispatchEvent = loginSuccess(user);
    resetAndNavigate(navigation, 'UserRoutes');
  } catch (e) {
    dispatchEvent = loginError(e.response.data);
  }

  dispatch(dispatchEvent);
};

