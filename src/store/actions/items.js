import { isEmpty } from 'lodash';
import { actions, paths } from '../../constants';
import { cache } from '../../utils';

const DEFAULT_QUERY = { limit: 12 };

export const resetItems = () => ({
  type: actions.ITEMS_RESET,
});

export const getItems = (params = DEFAULT_QUERY) => ({
  [actions.API_CALL]: {
    types: [actions.ITEMS_GET_REQUEST, actions.ITEMS_GET_SUCCESS, actions.ITEMS_GET_FAILURE],
    promise: (api) => api.get(paths.server.ITEMS, { params }),
  },
});

export const setItems = (data) => ({
  type: actions.ITEMS_SET,
  data,
});

export const initializeItems = () => {
  const cachedItems = cache.loadItems();
  const cachedNextQuery = cache.loadNextQuery();

  const data = { data: cachedItems, nextQuery: cachedNextQuery };

  if (!isEmpty(cachedItems)) {
    return setItems(data);
  }

  return getItems();
};
