import cn from 'classnames/bind';
import React from 'react';
import { isEmpty } from 'lodash';
import { Container, Tab, Tabs } from 'react-bootstrap';

import styles from './styles.scss';
import { Loader } from './components';
import { useList } from './hooks';

import { List } from '../../components';

const cx = cn.bind(styles);

const Home = () => {
  const { items, isLoading, onScroll, favorites } = useList();

  if (isLoading && isEmpty(items)) {
    return <Loader />;
  }

  return (
    <Container className={cx('pd-list')}>
      <Tabs defaultActiveKey="home" id="tabs">
        <Tab eventKey="home" title="Home">
          <List items={items} onScroll={onScroll} />
        </Tab>
        <Tab eventKey="favorites" title="Favorites">
          <List items={favorites} />
        </Tab>
      </Tabs>
    </Container>
  );
};

export default Home;
