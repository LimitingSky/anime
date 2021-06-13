import {Keyboard} from 'react-native';
import axios, { AxiosRequestConfig } from 'axios';
import { BASE_URL } from 'assets/const';

const instance = axios.create({
  baseURL: BASE_URL,
});

const coreRequest = async (
  request: AxiosRequestConfig,
  dismissKeyboard = false,
) => {
  instance.defaults.headers.common.Accept = 'application/vnd.api+json';
  instance.defaults.headers.common['Content-Type'] = 'application/vnd.api+json';

  try {
    dismissKeyboard && Keyboard.dismiss();

    const resource = await instance(request);

    return Promise.resolve(resource);
  } catch (error) {
    return Promise.reject(error);
  }
};

export default coreRequest;
