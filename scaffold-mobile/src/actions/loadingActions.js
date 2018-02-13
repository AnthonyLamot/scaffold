import {
  LOADING,
} from '../constants/actionTypes';

export const setLoading = payload => ({
  type: LOADING,
  payload,
});
