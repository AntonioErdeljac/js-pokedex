import cn from 'classnames/bind';
import PropTypes from 'prop-types';
import React from 'react';
import Visibility from 'react-visibility-sensor';
import { Container, Row } from 'react-bootstrap';
import { isEmpty } from 'lodash';

import styles from './styles.scss';
import { Item, BottomPixel, Loader, Empty } from './components';

const cx = cn.bind(styles);

const List = ({ name, items, onScroll, isLoading }) => {
  if (isLoading && isEmpty(items)) {
    return (
      <Container className={cx('pd-list')}>
        <Loader />
      </Container>
    );
  }

  if (!isLoading && isEmpty(items)) {
    return (
      <Container className={cx('pd-list')}>
        <Empty />
      </Container>
    );
  }

  return (
    <Container className={cx('pd-list')}>
      <h3 className="font-weight-bold my-5">{name}</h3>
      <Row className="mt-3">
        {items.map((item, index) => (
          <Item src={item.src} key={item.name} name={item.name} index={index} />
        ))}
      </Row>
      {onScroll && (
        <Visibility onChange={onScroll}>
          <BottomPixel />
        </Visibility>
      )}
    </Container>
  );
};

List.defaultProps = {
  onScroll: null,
  isLoading: false,
};

List.propTypes = {
  name: PropTypes.string.isRequired,
  isLoading: PropTypes.bool,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      src: PropTypes.string,
    }),
  ).isRequired,
  onScroll: PropTypes.func,
};

export default List;
