import { filters } from '../../../utils';

const selectors = {
  favorites: (state) => {
    const search = filters.search(state.favorites.data, state.favorites.search);
    const sort = filters.sort(search, state.favorites.sort);

    return sort;
  },
  searchValue: (state) => state.favorites.search,
  sortValue: (state) => state.favorites.sort,
};

export default selectors;
