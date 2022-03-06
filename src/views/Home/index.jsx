import React from 'react';

import { useList } from './hooks';

import { List } from '../../components';

const Home = () => {
  const {
    items,
    isLoading,
    onScroll,
    hasLoaded,
    onSearch,
    searchValue,
    onSort,
    sortValue,
  } = useList();

  return (
    <List
      onSearch={onSearch}
      searchValue={searchValue}
      hasLoaded={hasLoaded}
      isLoading={isLoading}
      items={items}
      onScroll={onScroll}
      onSort={onSort}
      sortValue={sortValue}
    />
  );
};

export default Home;
