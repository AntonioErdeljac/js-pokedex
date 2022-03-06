import { useCallback } from 'react';
import { useSelector, shallowEqual, useDispatch } from 'react-redux';
import { setSearch } from '../../store/actions/favorites';

import selectors from './selectors';

export const useFavorites = () => {
  const dispatch = useDispatch();

  const items = useSelector(selectors.favorites, shallowEqual);
  const searchValue = useSelector(selectors.searchValue, shallowEqual);

  const onSearch = useCallback(
    (event) => {
      dispatch(setSearch(event.target.value));
    },
    [dispatch],
  );

  return { items, onSearch, searchValue };
};
