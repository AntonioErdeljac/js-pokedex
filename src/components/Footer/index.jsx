import cn from 'classnames/bind';
import React, { memo } from 'react';
import { Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import styles from './styles.scss';

import { paths } from '../../constants';
import { useLinks } from '../../hooks';

const cx = cn.bind(styles);

const Footer = () => {
  const { isActive } = useLinks();

  return (
    <Nav className={cx('pd-footer fixed-bottom shadow border-top')} fill variant="tabs">
      <Nav.Item className={cx('pd-footer__item')}>
        <Nav.Link
          active={isActive(paths.client.HOME)}
          as={Link}
          to={paths.client.HOME}
          className={cx('pd-footer__item__link display-inline-flex align-items-center', {
            'pd-footer__item__link-active': isActive(paths.client.HOME),
          })}
        >
          <i className="material-icons mt-1">home</i>
        </Nav.Link>
      </Nav.Item>
      <Nav.Item className={cx('pd-footer__item')}>
        <Nav.Link
          active={isActive(paths.client.FAVORITES)}
          as={Link}
          to={paths.client.FAVORITES}
          className={cx('pd-footer__item__link display-inline-flex align-items-center', {
            'pd-footer__item__link-active': isActive(paths.client.FAVORITES),
          })}
        >
          <i className="material-icons mt-1">favorite</i>
        </Nav.Link>
      </Nav.Item>
    </Nav>
  );
};

export default memo(Footer);
