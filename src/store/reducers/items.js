import { isEmpty } from 'lodash';
import qs from 'query-string';

import { actions } from '../../constants';
import { cache } from '../../utils';

const getQuery = (url) => {
  if (url) {
    return qs.parseUrl(url).query;
  }

  return null;
};

const initialState = {
  data: cache.loadItems(),
  isLoading: false,
  hasFailedToLoad: false,
  hasLoaded: !isEmpty(cache.loadItems()),
  nextQuery: cache.loadNextQuery(),
  previousQuery: null,
};

const actionFactory = {
  [actions.ITEMS_RESET]: () => ({ ...initialState }),
  [actions.ITEMS_GET_REQUEST]: (state) => ({
    ...state,
    isLoading: true,
    hasFailedToLoad: false,
    hasLoaded: false,
  }),
  [actions.ITEMS_GET_SUCCESS]: (state, { result }) => {
    cache.saveItems([...state.data, ...result.data.results]);
    cache.saveNextQuery(getQuery(result.data.next));

    return {
      ...state,
      isLoading: false,
      hasFailedToLoad: false,
      data: [...state.data, ...result.data.results],
      hasLoaded: true,
      nextQuery: getQuery(result.data.next),
      previousQuery: getQuery(result.data.previous),
    };
  },
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
