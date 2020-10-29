import cn from 'classnames/bind';
import React, { memo } from 'react';
import { Nav } from 'react-bootstrap';

import styles from './styles.scss';

const cx = cn.bind(styles);

const Footer = () => {
  return (
    <Nav className={cx('pd-footer fixed-bottom')} fill variant="tabs" defaultActiveKey="/home">
      <Nav.Item className="bg-white border">
        <Nav.Link className={cx('pd-footer__item__link display-inline-flex align-items-center')}>
          <i className="material-icons mt-1">home</i>
        </Nav.Link>
      </Nav.Item>
      <Nav.Item className={cx('pd-footer__item border')}>
        <Nav.Link
          className={cx('pd-footer__item__link display-inline-flex align-items-center')}
          eventKey="link-1"
        >
          <i className="material-icons mt-1">favorite</i>
        </Nav.Link>
      </Nav.Item>
      <Nav.Item className="bg-white border">
        <Nav.Link
          className={cx('pd-footer__item__link display-inline-flex align-items-center')}
          eventKey="link-2"
        >
          <i className="material-icons mt-1">compare_arrows</i>
        </Nav.Link>
      </Nav.Item>
    </Nav>
  );
};

export default memo(Footer);
