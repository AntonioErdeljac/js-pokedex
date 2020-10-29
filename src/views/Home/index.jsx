import React from 'react';

import { useList } from './hooks';

import { List } from '../../components';

const Home = () => {
  const { items, isLoading, onScroll } = useList();

  return <List isLoading={isLoading} items={items} onScroll={onScroll} />;
};

export default Home;
