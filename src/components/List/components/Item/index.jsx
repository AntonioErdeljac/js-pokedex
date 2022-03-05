import cn from 'classnames/bind';
import PropTypes from 'prop-types';
import React, { memo, useCallback } from 'react';
import { Col, Card } from 'react-bootstrap';
import { useNavigate, generatePath } from 'react-router-dom';

import styles from './styles.scss';

import FavoriteButton from '../../../FavoriteButton';

import { paths } from '../../../../constants';

const cx = cn.bind(styles);

const Item = ({ name, index, photo }) => {
  const navigate = useNavigate();

  const onClick = useCallback(() => {
    navigate(generatePath(paths.client.PROFILE_ID, { id: name }));
  }, [navigate, name]);

  return (
    <Col onClick={onClick} className={cx('pd-card')} key={name} xl={4} lg={6} md={12}>
      <Card className="mb-4 shadow-sm">
        <Card.Img className="p-5" variant="top" src={photo} />
        <div className={cx('pd-favorite__wrapper')}>
          <FavoriteButton photo={photo} name={name} index={index} />
        </div>
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
  photo: PropTypes.string.isRequired,
};

export default memo(Item);
