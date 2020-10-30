import PropTypes from 'prop-types';
import cn from 'classnames/bind';
import React, { memo } from 'react';

import styles from './styles.scss';

const cx = cn.bind(styles);

const Info = ({ image, text }) => {
  return (
    <div
      className={cx('pd-info w-100 d-flex flex-column justify-content-center align-items-center')}
    >
      <img src={image} className={cx('pd-info__image rounded border my-5')} alt="info" />
      <p className={cx('pd-info__text text-muted mt-3')}>{text}</p>
    </div>
  );
};

Info.propTypes = {
  image: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default memo(Info);
