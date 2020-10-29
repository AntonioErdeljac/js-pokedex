import { useCallback, useEffect, useMemo } from 'react';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';

import selectors from './selectors';

import { getItems } from '../../store/actions/items';

export const useList = () => {
  const dispatch = useDispatch();

  const items = useSelector(selectors.items, shallowEqual);
  const isLoading = useSelector(selectors.isLoading, shallowEqual);
  const nextQuery = useSelector(selectors.nextQuery, shallowEqual);
  const hasLoaded = useSelector(selectors.hasLoaded, shallowEqual);

  useEffect(() => {
    dispatch(getItems());
  }, [dispatch]);

  const loadMore = useCallback(() => {
    dispatch(getItems(nextQuery));
  }, [getItems, nextQuery]);

  const hasMore = useMemo(() => hasLoaded && nextQuery, [hasLoaded, nextQuery]);

  return { items, isLoading, loadMore, hasMore };
};
