import { useEffect } from 'react';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';

import selectors from './selectors';

import { getItems } from '../../store/actions/items';

export const useList = () => {
  const dispatch = useDispatch();

  const items = useSelector(selectors.items, shallowEqual);
  const isLoading = useSelector(selectors.isLoading, shallowEqual);

  useEffect(() => {
    dispatch(getItems());
  }, [dispatch]);

  return { items, isLoading };
};
