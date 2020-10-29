import cn from 'classnames';
import React, { memo } from 'react';

import styles from './styles.scss';

const cx = cn.bind(styles);

const FavoriteButton = () => {
  return (
    <div className={cx('pd-favorite shadow')} variant="primary">
      <span className="material-icons text-muted">favorite_border</span>
    </div>
  );
};

export default memo(FavoriteButton);
