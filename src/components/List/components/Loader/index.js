import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { SkeletonTheme } from 'react-loading-skeleton';

import Styled from './styles';

const Loader = () => {
  return (
    <SkeletonTheme color="#f3f3f3" highlightColor="#efefef">
      <Container>
        <Row>
          {[...new Array(3)].map((index) => (
            <Col md={4} className="mb-4">
              <Styled.Skeleton height={380} key={index} />
              <Styled.Skeleton height={30} className="mt-3" />
              <Styled.Skeleton height={30} width={300} className="mt-3" />
            </Col>
          ))}
        </Row>
      </Container>
    </SkeletonTheme>
  );
};

export default Loader;
