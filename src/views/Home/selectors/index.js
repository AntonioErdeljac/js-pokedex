import { filters } from '../../../utils';

const selectors = {
  items: (state) => {
    const search = filters.search(state.items.data, state.items.search);
    const sort = filters.sort(search, state.items.sort);

    return sort;
  },
  isLoading: (state) => state.items.isLoading,
  nextQuery: (state) => state.items.nextQuery,
  hasLoaded: (state) => state.items.hasLoaded,
  favorites: (state) => state.favorites.data,
  searchValue: (state) => state.items.search,
  sortValue: (state) => state.items.sort,
};

export default selectors;
