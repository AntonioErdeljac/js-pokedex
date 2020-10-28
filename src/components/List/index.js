import React from 'react';
import { Container, Row } from 'react-bootstrap';

import { Item } from './components';
import { useList } from './hooks';

const List = () => {
  const { filteredItems } = useList();

  return (
    <Container>
      <Row>
        {filteredItems.map((item, index) => (
          <Item key={item.name} name={item.name} index={index} />
        ))}
      </Row>
    </Container>
  );
};

export default List;
