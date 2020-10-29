import { useCallback, useMemo, useState } from 'react';

import { storage } from '../../../../../../constants';

const getCurrentItems = () => JSON.parse(localStorage.getItem(storage.FAVORITES) || '[]');

export const useFavoriteButton = ({ id }) => {
  const [favorites, setFavorites] = useState([...getCurrentItems()]);

  const isFavorite = useMemo(() => {
    return favorites.indexOf(id) !== -1;
  }, [favorites]);

  const setFavorite = useCallback(() => {
    const currentItems = getCurrentItems();
    let newItems = [...currentItems, id];

    if (!isFavorite) {
      localStorage.setItem(storage.FAVORITES, JSON.stringify(newItems));
      setFavorites(newItems);
    } else {
      newItems = currentItems.filter((item) => item !== id);
      localStorage.setItem(storage.FAVORITES, JSON.stringify(newItems));
      setFavorites(newItems);
    }
  }, [isFavorite]);

  return { setFavorite, isFavorite };
};
