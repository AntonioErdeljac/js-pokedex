import cn from 'classnames/bind';
import PropTypes from 'prop-types';
import React from 'react';
import Visibility from 'react-visibility-sensor';
import { Container, Form, Row } from 'react-bootstrap';
import { isEmpty } from 'lodash';

import empty from './images/empty.png';
import styles from './styles.scss';
import { Item, BottomPixel, Loader } from './components';

import FadeIn from '../FadeIn';
import Info from '../Info';

const cx = cn.bind(styles);

const List = ({ items, onScroll, isLoading, hasLoaded, onSearch, searchValue }) => {
  let content = (
    <>
      {onSearch ? (
        <Form.Control
          value={searchValue}
          onChange={onSearch}
          className={cx('pd-list__input')}
          placeholder="Search"
        />
      ) : null}
      <Row className="mt-3">
        {items.map((item, index) => (
          <Item key={item.name} photo={item.photo} name={item.name} index={index} />
        ))}
        {isLoading && !isEmpty(items) ? (
          <Container>
            <Loader />
          </Container>
        ) : null}
      </Row>
      {onScroll ? (
        <Visibility onChange={onScroll}>
          <BottomPixel />
        </Visibility>
      ) : null}
    </>
  );

  if (hasLoaded && isEmpty(items)) {
    content = (
      <>
        {onSearch ? (
          <Form.Control
            value={searchValue}
            onChange={onSearch}
            className={cx('pd-list__input')}
            placeholder="Search"
          />
        ) : null}
        <Info text="No items found." image={empty} />
      </>
    );
  }

  if (isLoading && isEmpty(items)) {
    content = <Loader />;
  }

  return (
    <FadeIn>
      <Container className={cx('pd-list')}>{content}</Container>
    </FadeIn>
  );
};

List.defaultProps = {
  onScroll: null,
  isLoading: false,
  hasLoaded: false,
  onSearch: null,
  searchValue: '',
};

List.propTypes = {
  isLoading: PropTypes.bool,
  hasLoaded: PropTypes.bool,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      src: PropTypes.string,
    }),
  ).isRequired,
  onScroll: PropTypes.func,
  onSearch: PropTypes.func,
  searchValue: PropTypes.string,
};

export default List;
