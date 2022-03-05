import { find } from 'lodash';
import { useCallback, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import selectors from './selectors';

import { setFavorites } from '../../store/actions/favorites';

export const useFavoriteButton = ({ name, index, photo }) => {
  const dispatch = useDispatch();
  const favorites = useSelector(selectors.favorites);

  const isFavorite = useMemo(() => find(favorites, { name }), [favorites, name]);

  const toggleFavorite = useCallback(
    (event) => {
      if (event) {
        event.stopPropagation();
      }

      const newItems = isFavorite
        ? favorites.filter((item) => item.name !== name)
        : [...favorites, { name, index, photo }];

      dispatch(setFavorites(newItems));
    },
    [dispatch, favorites, name, index, isFavorite, photo],
  );

  return { toggleFavorite, isFavorite };
};
