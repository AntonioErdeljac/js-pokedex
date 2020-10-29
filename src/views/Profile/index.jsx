import cn from 'classnames/bind';
import React from 'react';
import { Container } from 'react-bootstrap';

import styles from './styles.scss';
import { useProfile } from './hooks';

import { assets } from '../../utils';

const cx = cn.bind(styles);

const Profile = () => {
  const { item } = useProfile();

  return (
    <Container className={cx('pd-profile')}>
      <p className="text-capitalize">{item.name}</p>
      <img alt="test" src={assets.generateImage(item.id)} />
    </Container>
  );
};

export default Profile;
