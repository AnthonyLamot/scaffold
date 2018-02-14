import {
  REGISTER,
  REGISTER_ERROR,
  REGISTER_SUCCESS,
} from '../constants/actionTypes';
import { register as registerUser } from '../constants/api';
import { resetAndNavigate } from '../helpers/navigationHelpers';

export const register = (navigation, values) => async (dispatch) => {
  dispatch({ type: REGISTER });

  try {
    await registerUser(values);
    dispatch({ type: REGISTER_SUCCESS });
    resetAndNavigate(navigation, 'UserRoutes');
  } catch (e) {
    dispatch({ dispatch: REGISTER_ERROR });
  }
};
