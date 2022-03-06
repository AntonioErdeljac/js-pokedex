import cn from 'classnames/bind';
import PropTypes from 'prop-types';
import React from 'react';
import Visibility from 'react-visibility-sensor';
import { Col, Container, Dropdown, Form, Row } from 'react-bootstrap';
import { isEmpty } from 'lodash';

import empty from './images/empty.png';
import styles from './styles.scss';
import { Item, BottomPixel, Loader } from './components';

import FadeIn from '../FadeIn';
import Info from '../Info';

const cx = cn.bind(styles);

const sortMap = {
  null: 'Sort By',
  asc: 'Name (A-Z)',
  desc: 'Name (Z-A)',
};

const List = ({
  items,
  onScroll,
  isLoading,
  hasLoaded,
  onSearch,
  searchValue,
  onSort,
  sortValue,
}) => {
  let content = (
    <>
      <Row className="mt-3">
        {items.map((item, index) => (
          <Item key={item.name} photo={item.photo} name={item.name} index={index} />
        ))}
        {isLoading && !isEmpty(items) ? (
          <Container>
            <Loader />
          </Container>
        ) : null}
        {searchValue || sortValue ? (
          <div className="w-100 mt-3">
            <p className="text-center text-muted">Remove filters to enable infinite load</p>
          </div>
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
    content = <Info text="No items found." image={empty} />;
  }

  if (isLoading && isEmpty(items)) {
    content = <Loader />;
  }

  return (
    <FadeIn>
      <Container className={cx('pd-list')}>
        <Row className={cx('pd-list__filters')}>
          <Col xs={12} lg={10}>
            <Form.Control value={searchValue} onChange={onSearch} placeholder="Search" />
          </Col>
          <Col xs={12} lg={2}>
            <Dropdown onSelect={onSort}>
              <Dropdown.Toggle variant="info" className={cx('pd-list__sort w-100')}>
                {sortMap[sortValue]}
              </Dropdown.Toggle>
              <Dropdown.Menu className="w-100">
                <Dropdown.Item eventKey={null}>Default</Dropdown.Item>
                <Dropdown.Item eventKey="asc">Name (A-Z)</Dropdown.Item>
                <Dropdown.Item eventKey="desc">Name (Z-A)</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Col>
        </Row>
        {content}
      </Container>
    </FadeIn>
  );
};

List.defaultProps = {
  onScroll: null,
  isLoading: false,
  hasLoaded: false,
  onSearch: null,
  searchValue: '',
  onSort: null,
  sortValue: null,
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
  onSort: PropTypes.func,
  sortValue: PropTypes.string,
};

export default List;
