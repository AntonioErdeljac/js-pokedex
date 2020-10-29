import PropTypes from 'prop-types';
import React, { memo } from 'react';
import { Badge } from 'react-bootstrap';

const Badges = ({ types }) => {
  return (
    <div className="d-inline-flex my-3">
      {types.map((type) => (
        <Badge key={type.type.name} className="mx-1 text-uppercase" variant="primary">
          {type.type.name}
        </Badge>
      ))}
    </div>
  );
};

Badges.defaultProps = {
  types: [],
};

Badges.propTypes = {
  types: PropTypes.arrayOf(
    PropTypes.shape({
      type: PropTypes.shape({
        type: PropTypes.shape({
          name: PropTypes.string,
        }),
      }),
    }),
  ),
};

export default memo(Badges);
