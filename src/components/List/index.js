import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const List = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get('https://pokeapi.co/api/v2/pokemon?limit=100&offset=200')
      .then(({ data: tempData }) => setData(tempData.results));
  }, []);

  return (
    <Container>
      <Row>
        {data.map((item) => (
          <Col xs={12}>{item.name}</Col>
        ))}
      </Row>
    </Container>
  );
};

export default List;
