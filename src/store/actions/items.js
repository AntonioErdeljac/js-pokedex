import { actions, paths } from '../../constants';

export const getItems = (params) => ({
  [actions.API_CALL]: {
    types: [actions.ITEMS_GET_REQUEST, actions.ITEMS_GET_SUCCESS, actions.ITEMS_GET_FAILURE],
    promise: (api) => api.get(paths.ITEMS, { params }),
  },
});
