import cn from 'classnames/bind';
import React from 'react';
import { isEmpty } from 'lodash';
import { Col, Container, Image } from 'react-bootstrap';

import error from './images/error.png';
import styles from './styles.scss';
import { Loader, Badges, Content } from './components';
import { useProfile } from './hooks';

import { assets } from '../../utils';
import { Info, FadeIn, FavoriteButton } from '../../components';

const cx = cn.bind(styles);

const Profile = () => {
  const { item, isLoading, hasFailedToLoad } = useProfile();

  if (hasFailedToLoad) {
    return (
      <FadeIn>
        <Container className={cx('pd-profile')}>
          <Info text="Something went wrong." image={error} />
        </Container>
      </FadeIn>
    );
  }

  if (isLoading || isEmpty(item)) {
    return (
      <FadeIn>
        <Container className={cx('pd-profile')}>
          <Loader />
        </Container>
      </FadeIn>
    );
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
