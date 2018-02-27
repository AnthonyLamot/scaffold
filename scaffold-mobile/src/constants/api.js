import axios from 'axios';
import { Platform } from 'react-native';

let url;

// Cause of genymotion we need to change the url here
// http://stackoverflow.com/questions/5528850/how-to-connect-localhost-in-android-emulator
if (Platform.OS !== 'ios') {
  url = 'http://10.0.3.2:9001/api';
} else {
  url = 'http://localhost:9001/api';
}
axios.defaults.baseURL = url;

// Define different API calls that can be used in the app
export const register = async (args) => {
  try {
    const res = await axios.post('/users/create', { ...args });
    return res;
  } catch (e) {
    throw e;
  }
};

export const login = async (args) => {
  try {
    const res = await axios.post('/users/login', { ...args });
    return res;
  } catch (e) {
    throw e;
  }
};

export const createEvent = async (args, userId) => {
  try {
    const res = await axios.post('/events/create', { ...args, userId });
    return res.data.events;
  } catch (e) {
    throw e;
  }
};

export const getUserEvents = async (userId) => {
  try {
    const res = await axios.post('/events', { userId });
    return res.data.events;
  } catch (e) {
    throw e;
  }
};
