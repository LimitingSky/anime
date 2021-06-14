import coreRequest from "api";

export const fetchGenders = async (params = {}) =>
  coreRequest({method: 'GET', url: '/genres', params});
