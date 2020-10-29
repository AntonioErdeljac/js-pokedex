import { useCallback, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import selectors from './selectors';

import { setFavorites } from '../../store/actions/favorites';

export const useFavoriteButton = ({ id }) => {
  const dispatch = useDispatch();
  const favorites = useSelector(selectors.favorites);

  const isFavorite = useMemo(() => favorites.indexOf(id) !== -1, [favorites, id]);

  const toggleFavorite = useCallback(() => {
    const newItems = isFavorite ? favorites.filter((item) => item !== id) : [...favorites, id];

    dispatch(setFavorites(newItems));
  }, [dispatch, favorites, id, isFavorite]);

  return { toggleFavorite, isFavorite };
};
