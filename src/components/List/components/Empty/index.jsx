import cn from 'classnames/bind';
import React, { memo } from 'react';

import styles from './styles.scss';
import empty from './images/empty.png';

const cx = cn.bind(styles);

const Empty = () => {
  return (
    <div
      className={cx('pd-empty w-100 d-flex flex-column justify-content-center align-items-center')}
    >
      <img src={empty} className={cx('pd-empty__image rounded border my-5')} alt="pikachu" />
      <p className={cx('pd-empty__text text-muted mt-3')}>This list seems to be empty!</p>
    </div>
  );
};

export default memo(Empty);
