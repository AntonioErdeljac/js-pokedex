import cn from 'classnames/bind';
import Visibility from 'react-visibility-sensor';
import React from 'react';
import { isEmpty } from 'lodash';
import { Container, Row } from 'react-bootstrap';

import styles from './styles.scss';
import { Item, Loader, BottomPixel } from './components';
import { useList } from './hooks';

const cx = cn.bind(styles);

const List = () => {
  const { items, isLoading, onScroll } = useList();

  if (isLoading && isEmpty(items)) {
    return <Loader />;
  }

  return (
    <Container className={cx('pd-list')}>
      <Row>
        {items.map((item, index) => (
          <Item key={item.name} name={item.name} index={index} />
        ))}
      </Row>
      <Visibility onChange={onScroll}>
        <BottomPixel />
      </Visibility>
    </Container>
  );
};

export default List;
