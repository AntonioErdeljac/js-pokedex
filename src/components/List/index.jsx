import PropTypes from 'prop-types';
import React from 'react';
import Visibility from 'react-visibility-sensor';
import { Row } from 'react-bootstrap';

import { Item, BottomPixel } from './components';

const List = ({ items, onScroll }) => {
  return (
    <>
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
    </>
  );
};

List.defaultProps = {
  onScroll: null,
};

List.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      src: PropTypes.string,
    }),
  ).isRequired,
  onScroll: PropTypes.func,
};

export default List;
