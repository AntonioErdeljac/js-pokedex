const selectors = {
  item: (state) => state.item.data,
  isLoading: (state) => state.item.isLoading,
  hasFailedToLoad: (state) => state.item.hasFailedToLoad,
};

export default selectors;
