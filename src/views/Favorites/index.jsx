import React, { memo } from 'react';

import { useFavorites } from './hooks';

import { List } from '../../components';

const Favorites = () => {
  const { items } = useFavorites();

  return <List hasLoaded items={items} />;
};

export default memo(Favorites);
