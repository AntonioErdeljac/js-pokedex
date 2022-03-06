import React, { memo } from 'react';

import { useFavorites } from './hooks';

import { List } from '../../components';

const Favorites = () => {
  const { items, onSearch, searchValue } = useFavorites();

  return <List searchValue={searchValue} onSearch={onSearch} hasLoaded items={items} />;
};

export default memo(Favorites);
