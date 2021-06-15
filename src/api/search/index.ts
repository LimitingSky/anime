import axios, { Canceler } from 'axios';
import coreRequest from "api";

export const getSearchData = async (mode:string,params:object={}) => {
	const url = `/${mode}/`
	return coreRequest({
		url,
		params,
	})
}

const CancelToken = axios.CancelToken;
let cancel: Canceler | null = null;

export const searchByQuery = async (mode:string,params:object={}) => {
  try {
    abortFetching();
    const url = `/${mode}/`
    return coreRequest({
			url,
			params,
			cancelToken: new CancelToken(function executor(c) {
        cancel = c;
      }),
		})
  } catch (error) {
    return Promise.reject(error);
  }
};

const abortFetching = () => {
  if (Boolean(cancel)) {
    cancel();
  }
};
