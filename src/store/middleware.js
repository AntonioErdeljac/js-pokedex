import axios from 'axios';

import { actions, BASE_URL } from '../constants';

const CANCEL_MESSAGE = 'CANCELED';

let activeRequests = [];

export default () => ({ dispatch, getState }) => (next) => (action) => {
  if (typeof action === 'function') {
    return action(dispatch, getState);
  }

  const callAPIAction = action[actions.API_CALL];

  if (typeof callAPIAction === 'undefined' || !callAPIAction.promise) {
    return next(action);
  }

  const { promise, types, ...rest } = callAPIAction;
  const [REQUEST, SUCCESS, FAILURE] = types;

  next({ ...rest, type: REQUEST });

  const activeRequest = activeRequests.find(
    (request) => request.action === REQUEST && request.token === action.token,
  );
  const getStillActiveRequests = () =>
    activeRequests.filter(
      (request) => !(request.action === REQUEST && request.token === action.token),
    );

  if (activeRequest) {
    activeRequest.source.cancel(CANCEL_MESSAGE);

    activeRequests = getStillActiveRequests();
  }

  const source = axios.CancelToken.source();

  activeRequests.push({
    action: REQUEST,
    token: action.token,
    source,
  });

  const instance = axios.create({
    baseURL: BASE_URL,
    cancelToken: source.token,
  });

  return promise(instance, dispatch).then(
    (result) => {
      activeRequests = getStillActiveRequests();

      return next({ ...rest, result, type: SUCCESS });
    },
    (error) => {
      if (error.message === CANCEL_MESSAGE) {
        return Promise.resolve(error);
      }

      activeRequests = getStillActiveRequests();

      next({ ...rest, error, type: FAILURE });
      return Promise.reject(error);
    },
  );
};
