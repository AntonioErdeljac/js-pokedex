import { useCallback, useEffect, useMemo } from 'react';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';

import selectors from './selectors';

import { getItems, resetItems } from '../../store/actions/items';

export const useList = () => {
  const dispatch = useDispatch();

  const items = useSelector(selectors.items, shallowEqual);
  const isLoading = useSelector(selectors.isLoading, shallowEqual);
  const nextQuery = useSelector(selectors.nextQuery, shallowEqual);
  const hasLoaded = useSelector(selectors.hasLoaded, shallowEqual);

  useEffect(() => {
    dispatch(getItems());

    return () => dispatch(resetItems());
  }, [dispatch]);

  const loadMore = useCallback(() => {
    dispatch(getItems(nextQuery));
  }, [dispatch, nextQuery]);

  const hasMore = useMemo(() => hasLoaded && nextQuery, [hasLoaded, nextQuery]);

  return { items, isLoading, loadMore, hasMore };
};
