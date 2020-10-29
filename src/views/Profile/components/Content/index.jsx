import PropTypes from 'prop-types';
import React, { memo } from 'react';

const Content = ({ weight, height }) => {
  return (
    <div className="d-flex flex-column mt-5">
      <div className="d-inline-flex">
        <p className="font-weight-bold">Weight:&nbsp;</p>
        <p>{weight}</p>
      </div>
      <div className="d-inline-flex">
        <p className="font-weight-bold">Height:&nbsp;</p>
        <p>{height}</p>
      </div>
    </div>
  );
};

Content.defaultProps = {
  weight: 0,
  height: 0,
};

Content.propTypes = {
  weight: PropTypes.number,
  height: PropTypes.number,
};

export default memo(Content);
