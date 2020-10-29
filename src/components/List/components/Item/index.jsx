import cn from 'classnames/bind';
import PropTypes from 'prop-types';
import React, { memo, useCallback } from 'react';
import { Col, Card } from 'react-bootstrap';
import { useHistory, generatePath } from 'react-router-dom';

import styles from './styles.scss';

import FavoriteButton from '../../../FavoriteButton';

import { assets } from '../../../../utils';
import { paths } from '../../../../constants';

const cx = cn.bind(styles);

const Item = ({ name, index, src }) => {
  const history = useHistory();

  const onClick = useCallback(() => {
    history.push(generatePath(paths.client.PROFILE_ID, { id: name }));
  }, [history, name]);

  return (
    <Col onClick={onClick} className={cx('pd-card')} key={name} xl={4} lg={6} md={12}>
      <Card className="mb-4 shadow-sm">
        <Card.Img className="p-5" variant="top" src={src || assets.generateImage(index + 1)} />
        <div className={cx('pd-favorite__wrapper')}>
          <FavoriteButton src={assets.generateImage(index + 1)} name={name} index={index} />
        </div>
        <hr />
        <Card.Body>
          <Card.Title className="text-capitalize font-weight-bold text-center">{name}</Card.Title>
        </Card.Body>
      </Card>
    </Col>
  );
};

Item.defaultProps = {
  src: null,
};

Item.propTypes = {
  src: PropTypes.string,
  name: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
};

export default memo(Item);
