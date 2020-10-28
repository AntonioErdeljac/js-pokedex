import React from 'react';
import { Container, Row } from 'react-bootstrap';

import { Item } from './components';
import { useList } from './hooks';

const List = () => {
  const { items } = useList();

  return (
    <Container>
      <Row>
        {items.map((item, index) => (
          <Item key={item.name} name={item.name} index={index} />
        ))}
      </Row>
    </Container>
  );
};

export default List;
