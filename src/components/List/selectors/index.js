const selectors = {
  items: (state) => state.items.data,
  isLoading: (state) => state.items.isLoading,
  nextQuery: (state) => state.items.nextQuery,
};

export default selectors;
