import { cache } from '../../utils';

import { actions } from '../../constants';

const initialState = {
  data: cache.loadFavorites(),
  search: '',
};

const actionFactory = {
  [actions.FAVORITES_RESET]: () => ({ ...initialState }),
  [actions.FAVORITES_SEARCH]: (state, { value }) => ({
    ...state,
    search: value,
  }),
  [actions.FAVORITES_SET]: (state, { data }) => {
    cache.saveFavorites(data);
    return {
      ...state,
      data,
    };
  },
};

export default (state = initialState, action) => {
  if (actionFactory[action.type]) {
    return actionFactory[action.type](state, action);
  }

  return state;
};
