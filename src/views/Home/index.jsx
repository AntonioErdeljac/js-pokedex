import cn from 'classnames/bind';
import React from 'react';
import { Container, Tab, Tabs } from 'react-bootstrap';

import styles from './styles.scss';
import { useList } from './hooks';

import { List } from '../../components';

const cx = cn.bind(styles);

const Home = () => {
  const { items, isLoading, onScroll, favorites } = useList();

  return (
    <Container className={cx('pd-list')}>
      <Tabs defaultActiveKey="home" id="tabs">
        <Tab eventKey="home" title="Home">
          <List isLoading={isLoading} items={items} onScroll={onScroll} />
        </Tab>
        <Tab eventKey="favorites" title="Favorites">
          <List items={favorites} />
        </Tab>
      </Tabs>
    </Container>
  );
};

export default Home;
