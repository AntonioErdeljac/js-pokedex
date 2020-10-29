import PropTypes from 'prop-types';
import React from 'react';
import { Button } from 'react-bootstrap';

const LoadMore = ({ onClick, disabled }) => {
  return (
    <div className="w-100 d-inline-flex justify-content-center align-items-center">
      <Button onClick={onClick} disabled={disabled} className="my-5" size="lg">
        Load More
      </Button>
    </div>
  );
};

LoadMore.propTypes = {
  onClick: PropTypes.func.isRequired,
  disabled: PropTypes.bool.isRequired,
};

export default LoadMore;
