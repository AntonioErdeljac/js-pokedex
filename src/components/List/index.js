import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

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
          <Col key={item.name} md={4}>
            <Card className="mb-4 shadow-sm">
              <Card.Img
                variant="bottom"
                src={`https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${`${
                  index + 1
                }`.padStart(3, '0')}.png`}
              />
              <hr />
              <Card.Body>
                <Card.Title className="text-capitalize">{item.name}</Card.Title>
                <Card.Text className="text-muted">
                  Some quick example text to build on the card title and make up the bulk of the
                  cards content.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default List;
