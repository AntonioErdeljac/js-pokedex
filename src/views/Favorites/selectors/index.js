const selectors = {
  favorites: (state) => {
    const result = state.favorites.data;

    if (!state.favorites.search) {
      return result;
    }

    return result.filter((item) =>
      item.name.toLowerCase().match(state.favorites.search.toLowerCase()),
    );
  },
  searchValue: (state) => state.favorites.search,
};

export default selectors;
