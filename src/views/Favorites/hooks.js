import { useSelector, shallowEqual } from 'react-redux';

import selectors from './selectors';

export const useFavorites = () => {
  const items = useSelector(selectors.favorites, shallowEqual);

  return { items };
};
