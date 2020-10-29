import React from 'react';
import { Container, Row } from 'react-bootstrap';

import { Item, Loader, LoadMore } from './components';
import { useList } from './hooks';

const List = () => {
  const { items, isLoading } = useList();

  if (isLoading) {
    return <Loader />;
  }

  return (
    <Container>
      <Row>
        {items.map((item, index) => (
          <Item key={item.name} name={item.name} index={index} />
        ))}
      </Row>
      <LoadMore />
    </Container>
  );
};

export default List;
