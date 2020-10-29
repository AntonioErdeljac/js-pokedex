import cn from 'classnames/bind';
import React from 'react';
import { isEmpty } from 'lodash';
import { Badge, Col, Container, Image } from 'react-bootstrap';

import styles from './styles.scss';
import { useProfile } from './hooks';

import { assets } from '../../utils';
import { FavoriteButton } from '../../components';
import { Loader } from './components';

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
    return <p>Error</p>;
  }

  return (
    <Container className={cx('pd-profile')}>
      <Col md={12} lg={{ span: 6, offset: 3 }}>
        <div className="d-flex flex-column justify-content-center align-items-center w-100 position-relative">
          <Image src={assets.generateImage(item.id)} />
          <h3 className="text-capitalize font-weight-bold mt-3">{item.name}</h3>
          <div className="d-inline-flex my-3">
            {item.types.map((type) => (
              <Badge className="mx-1 text-uppercase" variant="primary">
                {type.type.name}
              </Badge>
            ))}
          </div>
          <div className={cx('pd-profile__favorite')}>
            <FavoriteButton src={assets.generateImage(item.id)} name={item.name} index={item.id} />
          </div>
        </div>
        <hr />
        <div className="d-flex flex-column mt-5">
          <div className="d-inline-flex">
            <p className="font-weight-bold">Weight:&nbsp;</p>
            <p>{item.weight}</p>
          </div>
          <div className="d-inline-flex">
            <p className="font-weight-bold">Height:&nbsp;</p>
            <p>{item.height}</p>
          </div>
        </div>
      </Col>
    </Container>
  );
};

export default Profile;
