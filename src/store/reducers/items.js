import qs from 'query-string';

import { actions } from '../../constants';

const getQuery = (url) => {
  if (url) {
    return qs.parseUrl(url).query;
  }

  return null;
};

const initialState = {
  data: [],
  isLoading: false,
  hasFailedToLoad: false,
  hasLoaded: false,
  nextQuery: null,
  previousQuery: null,
};

const actionFactory = {
  [actions.ITEMS_GET_REQUEST]: (state) => ({
    ...state,
    isLoading: true,
    hasFailedToLoad: false,
    hasLoaded: false,
  }),
  [actions.ITEMS_GET_SUCCESS]: (state, { result }) => ({
    ...state,
    isLoading: false,
    hasFailedToLoad: false,
    data: result.data.results,
    hasLoaded: true,
    nextQuery: getQuery(result.data.next),
    previousQuery: getQuery(result.data.previous),
  }),
  [actions.ITEMS_GET_FAILURE]: (state) => ({
    ...state,
    data: [],
    isLoading: false,
    hasFailedToLoad: true,
    hasLoaded: false,
  }),
};

export default (state = initialState, action) => {
  if (actionFactory[action.type]) {
    return actionFactory[action.type](state, action);
  }

  return state;
};
