import { useCallback } from 'react';
import { useSelector, shallowEqual, useDispatch } from 'react-redux';
import { setSearch, setSort } from '../../store/actions/favorites';

import selectors from './selectors';

export const useFavorites = () => {
  const dispatch = useDispatch();

  const items = useSelector(selectors.favorites, shallowEqual);
  const searchValue = useSelector(selectors.searchValue, shallowEqual);
  const sortValue = useSelector(selectors.sortValue, shallowEqual);

  const onSearch = useCallback(
    (event) => {
      dispatch(setSearch(event.target.value));
    },
    [dispatch],
  );

  const onSort = useCallback(
    (event) => {
      dispatch(setSort(event));
    },
    [dispatch],
  );

  return { items, onSearch, searchValue, onSort, sortValue };
};
