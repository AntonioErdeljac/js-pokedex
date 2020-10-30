import cn from 'classnames/bind';
import React from 'react';
import { isEmpty } from 'lodash';
import { Col, Container, Image } from 'react-bootstrap';

import styles from './styles.scss';
import { Loader, Badges, Content } from './components';
import { useProfile } from './hooks';

import { assets } from '../../utils';
import { FadeIn, FavoriteButton } from '../../components';

const cx = cn.bind(styles);

const Profile = () => {
  const { item, isLoading } = useProfile();

  if (isLoading && isEmpty(item)) {
    return (
      <Container className={cx('pd-profile')}>
        <Loader />
      </Container>
    );
  }

  if (!isLoading && isEmpty(item)) {
    return <h3>Unkown entity</h3>;
  }

  return (
    <FadeIn>
      <Container className={cx('pd-profile')}>
        <Col md={12} lg={{ span: 6, offset: 3 }}>
          <div className="d-flex flex-column justify-content-center align-items-center w-100 position-relative">
            <Image src={assets.generateImage(item.id)} />
            <h3 className="text-capitalize font-weight-bold mt-3">{item.name}</h3>
            <Badges types={item.types ?? []} />
            <div className={cx('pd-profile__favorite')}>
              <FavoriteButton
                src={assets.generateImage(item.id)}
                name={item.name}
                index={item.id}
              />
            </div>
          </div>
          <hr />
          <Content height={item.height} weight={item.weight} />
        </Col>
      </Container>
    </FadeIn>
  );
};

export default Profile;
