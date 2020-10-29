import cn from 'classnames/bind';
import React, { memo } from 'react';
import { Container, Navbar, Nav, NavLink } from 'react-bootstrap';

import styles from './styles.scss';

const cx = cn.bind(styles);

const Header = () => {
  return (
    <Navbar fixed="top" className="mb-5 shadow-sm" bg="white">
      <Container className="d-inline-flex justify-content-center">
        <Navbar.Brand>
          <img
            height="70"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/800px-International_Pok%C3%A9mon_logo.svg.png"
            className="d-inline-block align-top"
            alt="React Bootstrap logo"
          />
        </Navbar.Brand>
        <Nav className={cx('pd-nav ml-auto')}>
          <NavLink className="d-inline-flex align-items-center font-weight-bold">
            <i className="material-icons mr-2">home</i>
            Home
          </NavLink>
          <NavLink className="d-inline-flex align-items-center font-weight-bold">
            <i className="material-icons mr-2">favorite</i>
            Favorites
          </NavLink>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default memo(Header);
