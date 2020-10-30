import { useCallback, useEffect, useMemo } from 'react';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';

import selectors from './selectors';

import { getItems, resetItems, initializeItems } from '../../store/actions/items';

export const useList = () => {
  const dispatch = useDispatch();

  const items = useSelector(selectors.items, shallowEqual);
  const favorites = useSelector(selectors.favorites, shallowEqual);
  const isLoading = useSelector(selectors.isLoading, shallowEqual);
  const nextQuery = useSelector(selectors.nextQuery, shallowEqual);
  const hasLoaded = useSelector(selectors.hasLoaded, shallowEqual);

  useEffect(() => {
    dispatch(initializeItems());

    return () => dispatch(resetItems());
  }, [dispatch]);

  const loadMore = useCallback(() => {
    dispatch(getItems(nextQuery));
  }, [dispatch, nextQuery]);

  const hasMore = useMemo(() => hasLoaded && nextQuery, [hasLoaded, nextQuery]);

  const onScroll = useCallback(
    (isVisible) => {
      if (isVisible && !isLoading && hasMore) {
        loadMore();
      }
    },
    [isLoading, loadMore, hasMore],
  );

  return { items, isLoading, onScroll, favorites };
};
