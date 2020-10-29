import { isEmpty } from 'lodash';
import React from 'react';
import { Container, Row } from 'react-bootstrap';

import { Item, Loader, LoadMore } from './components';
import { useList } from './hooks';

const List = () => {
  const { items, isLoading, loadMore, hasMore } = useList();

  if (isLoading && isEmpty(items)) {
    return <Loader />;
  }

  return (
    <Container>
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
