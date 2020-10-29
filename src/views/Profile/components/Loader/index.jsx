import cn from 'classnames/bind';
import React from 'react';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';

import styles from './styles.scss';

const cx = cn.bind(styles);

const Loader = () => {
  return (
    <SkeletonTheme color="#f3f3f3" highlightColor="#efefef">
      <div className="d-flex flex-column w-100 justify-content-center align-items-center">
        <Skeleton className={cx('pd-profile-skeleton')} height={220} width={220} />
        <Skeleton className={cx('pd-profile-skeleton mt-3')} height={30} width={300} />
        <Skeleton className={cx('pd-profile-skeleton my-3')} height={30} width={100} />
      </div>
    </SkeletonTheme>
  );
};

export default Loader;
