import cn from 'classnames/bind';
import React from 'react';
import { isEmpty } from 'lodash';
import { Container, Row } from 'react-bootstrap';

import styles from './styles.scss';
import { Item, Loader, LoadMore } from './components';
import { useList } from './hooks';

const cx = cn.bind(styles);

const List = () => {
  const { items, isLoading, loadMore, hasMore } = useList();

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
      <LoadMore onClick={loadMore} disabled={!hasMore || isLoading} />
    </Container>
  );
};

export default List;
