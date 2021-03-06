const selectors = {
  items: (state) => state.items.data,
  isLoading: (state) => state.items.isLoading,
  nextQuery: (state) => state.items.nextQuery,
  hasLoaded: (state) => state.items.hasLoaded,
  favorites: (state) => state.favorites.data,
};

export default selectors;
