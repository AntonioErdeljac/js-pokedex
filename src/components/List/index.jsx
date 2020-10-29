import cn from 'classnames/bind';
import Visibility from 'react-visibility-sensor';
import React from 'react';
import { isEmpty } from 'lodash';
import { Container, Row, Tab, Tabs } from 'react-bootstrap';

import styles from './styles.scss';
import { Item, Loader, BottomPixel } from './components';
import { useList } from './hooks';

const cx = cn.bind(styles);

const List = () => {
  const { items, isLoading, onScroll, favorites } = useList();

  if (isLoading && isEmpty(items)) {
    return <Loader />;
  }

  return (
    <Container className={cx('pd-list')}>
      <Tabs defaultActiveKey="home" id="tabs">
        <Tab eventKey="home" title="Home">
          <>
            <Row className="mt-3">
              {items.map((item, index) => (
                <Item key={item.name} name={item.name} index={index} />
              ))}
            </Row>
            <Visibility onChange={onScroll}>
              <BottomPixel />
            </Visibility>
          </>
        </Tab>
        <Tab eventKey="favorites" title="Favorites">
          <Row className="mt-3">
            {favorites.map((item, index) => (
              <Item src={item.src} key={item.name} name={item.name} index={index} />
            ))}
          </Row>
        </Tab>
      </Tabs>
    </Container>
  );
};

export default List;
