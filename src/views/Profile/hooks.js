import { useEffect } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import selectors from './selectors';

import { getItem, resetItem } from '../../store/actions/item';

export const useProfile = () => {
  const dispatch = useDispatch();
  const params = useParams();

  const item = useSelector(selectors.item, shallowEqual);
  const isLoading = useSelector(selectors.isLoading, shallowEqual);
  const hasFailedToLoad = useSelector(selectors.hasFailedToLoad, shallowEqual);

  useEffect(() => {
    if (params.id) {
      dispatch(getItem(params.id));
    }

    return () => dispatch(resetItem());
  }, [dispatch, params]);

  return { item, isLoading, hasFailedToLoad };
};
