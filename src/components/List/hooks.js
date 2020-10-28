import { useEffect } from 'react';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';

import selectors from './selectors';

import { getItems } from '../../store/actions/items';

export const useList = () => {
  const dispatch = useDispatch();

  const items = useSelector(selectors.items, shallowEqual);

  useEffect(() => {
    dispatch(getItems());
  }, [dispatch]);

  return { items };
};
