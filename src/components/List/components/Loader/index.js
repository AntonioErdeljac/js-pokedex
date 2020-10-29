import cn from 'classnames/bind';
import React from 'react';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import { Container, Row, Col } from 'react-bootstrap';

import styles from './styles.scss';

const cx = cn.bind(styles);

const Loader = () => {
  return (
    <SkeletonTheme color="#f3f3f3" highlightColor="#efefef">
      <Container>
        <Row>
          {[...new Array(3)].map((index) => (
            <Col md={4} className="mb-4">
              <Skeleton className={cx('pd-skeleton')} height={380} key={index} />
              <Skeleton className={cx('pd-skeleton mt-3')} height={30} />
              <Skeleton className={cx('pd-skeleton mt-3')} height={30} width={300} />
            </Col>
          ))}
        </Row>
      </Container>
    </SkeletonTheme>
  );
};

export default Loader;
