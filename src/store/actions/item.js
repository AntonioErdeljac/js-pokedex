import { generatePath } from 'react-router-dom';

import { actions, paths } from '../../constants';

export const resetItem = () => ({
  type: actions.ITEM_RESET,
});

export const getItem = (id) => ({
  [actions.API_CALL]: {
    types: [actions.ITEM_GET_REQUEST, actions.ITEM_GET_SUCCESS, actions.ITEM_GET_FAILURE],
    promise: (api) => api.get(generatePath(paths.server.ITEMS_ID, { id })),
  },
});
