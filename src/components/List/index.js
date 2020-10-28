import React, { useEffect } from 'react';
import { Container, Row } from 'react-bootstrap';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';

import selectors from './selectors';
import { Item } from './components';

import { getItems } from '../../store/actions/items';

const List = () => {
  const dispatch = useDispatch();
  const items = useSelector(selectors.items, shallowEqual);

  useEffect(() => {
    dispatch(getItems());
  }, [dispatch]);

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
