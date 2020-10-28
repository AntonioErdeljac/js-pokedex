import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import Styled from './styles';

const Loader = () => {
  return (
    <Container>
      <Row>
        {[...new Array(3)].map((index) => (
          <Col md={4} className="mb-4">
            <Styled.Skeleton height={450} key={index} />
            <Styled.Skeleton height={30} className="mt-3" />
            <Styled.Skeleton height={30} width={300} className="mt-3" />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Loader;
