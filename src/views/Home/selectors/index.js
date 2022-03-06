import { filters } from '../../../utils';

const selectors = {
  items: (state) => filters.search(state.items.data, state.items.search),
  isLoading: (state) => state.items.isLoading,
  nextQuery: (state) => state.items.nextQuery,
  hasLoaded: (state) => state.items.hasLoaded,
  favorites: (state) => state.favorites.data,
  searchValue: (state) => state.items.search,
};

export default selectors;
