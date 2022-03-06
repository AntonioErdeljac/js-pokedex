import React, { memo } from 'react';

import { useFavorites } from './hooks';

import { List } from '../../components';

const Favorites = () => {
  const { items, onSearch, searchValue, onSort, sortValue } = useFavorites();

  return (
    <List
      onSort={onSort}
      searchValue={searchValue}
      sortValue={sortValue}
      onSearch={onSearch}
      hasLoaded
      items={items}
    />
  );
};

export default memo(Favorites);
