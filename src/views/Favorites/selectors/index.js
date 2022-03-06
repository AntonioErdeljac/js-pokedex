import { filters } from '../../../utils';

const selectors = {
  favorites: (state) => filters.search(state.favorites.data, state.favorites.search),
  searchValue: (state) => state.favorites.search,
};

export default selectors;
