import cn from 'classnames/bind';
import PropTypes from 'prop-types';
import React, { memo } from 'react';
import { Col, Card } from 'react-bootstrap';

import styles from './styles.scss';
import { FavoriteButton } from './components';
import { generateImage } from './helpers';

const cx = cn.bind(styles);

const Item = ({ name, index }) => {
  return (
    <Col className={cx('pd-card')} key={name} md={4}>
      <Card className="mb-4 shadow-sm">
        <Card.Img className="p-5" variant="top" src={generateImage(index)} />
        <FavoriteButton />
        <hr />
        <Card.Body>
          <Card.Title className="text-capitalize font-weight-bold text-center">{name}</Card.Title>
        </Card.Body>
      </Card>
    </Col>
  );
};

Item.propTypes = {
  name: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
};

export default memo(Item);
