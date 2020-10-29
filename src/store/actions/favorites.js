import { actions } from '../../constants';

export const resetFavorites = () => ({
  type: actions.FAVORITES_RESET,
});

export const setFavorites = (data) => ({
  type: actions.FAVORITES_SET,
  data,
});
