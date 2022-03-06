import { useCallback, useEffect, useMemo } from 'react';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';

import selectors from './selectors';

import { getItems, resetItems, setSearch } from '../../store/actions/items';

export const useList = () => {
  const dispatch = useDispatch();

  const items = useSelector(selectors.items, shallowEqual);
  const favorites = useSelector(selectors.favorites, shallowEqual);
  const isLoading = useSelector(selectors.isLoading, shallowEqual);
  const nextQuery = useSelector(selectors.nextQuery, shallowEqual);
  const hasLoaded = useSelector(selectors.hasLoaded, shallowEqual);
  const searchValue = useSelector(selectors.searchValue, shallowEqual);

  useEffect(() => {
    dispatch(getItems());

    return () => dispatch(resetItems());
  }, [dispatch]);

  const loadMore = useCallback(() => {
    dispatch(getItems(nextQuery));
  }, [dispatch, nextQuery]);

  const hasMore = useMemo(() => hasLoaded && nextQuery, [hasLoaded, nextQuery]);

  const onScroll = useCallback(
    (isVisible) => {
      if (isVisible && !isLoading && hasMore && !searchValue) {
        loadMore();
      }
    },
    [isLoading, loadMore, hasMore, searchValue],
  );

  const onSearch = useCallback(
    (event) => {
      dispatch(setSearch(event.target.value));
    },
    [dispatch],
  );

  return { items, isLoading, onScroll, favorites, hasLoaded, searchValue, onSearch };
};
