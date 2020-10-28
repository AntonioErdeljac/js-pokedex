import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';

import { Item } from './components';

const List = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get('https://pokeapi.co/api/v2/pokemon?limit=5')
      .then(({ data: tempData }) => setData(tempData.results));
  }, []);

  return (
    <Container>
      <Row>
        {data.map((item, index) => (
          <Item key={item.name} name={item.name} index={index} />
        ))}
      </Row>
    </Container>
  );
};

export default List;
