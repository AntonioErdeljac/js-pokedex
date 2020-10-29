import { actions, paths } from '../../constants';

const DEFAULT_QUERY = { limit: 12 };

export const getItems = (params = DEFAULT_QUERY) => ({
  [actions.API_CALL]: {
    types: [actions.ITEMS_GET_REQUEST, actions.ITEMS_GET_SUCCESS, actions.ITEMS_GET_FAILURE],
    promise: (api) => api.get(paths.ITEMS, { params }),
  },
});
