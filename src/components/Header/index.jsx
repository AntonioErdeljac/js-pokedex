import cn from 'classnames/bind';
import React, { memo } from 'react';
import { Container, Navbar, Nav, NavLink } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import styles from './styles.scss';
import logo from './images/logo.png';

import { paths } from '../../constants';
import { useLinks } from '../../hooks';

const cx = cn.bind(styles);

const Header = () => {
  const { isActive } = useLinks();

  return (
    <Navbar fixed="top" className="mb-5 shadow-sm" bg="white">
      <Container className="d-inline-flex justify-content-center">
        <Navbar.Brand>
          <img
            height="70"
            src={logo}
            className={cx('pd-brand d-inline-block align-top')}
            alt="React Bootstrap logo"
          />
        </Navbar.Brand>
        <Nav className={cx('pd-nav ml-auto')}>
          <NavLink
            active={isActive(paths.client.HOME)}
            as={Link}
            to={paths.client.HOME}
            className="d-inline-flex align-items-center font-weight-bold"
          >
            <i className="material-icons mr-2">home</i>
            Home
          </NavLink>
          <NavLink
            active={isActive(paths.client.FAVORITES)}
            as={Link}
            to={paths.client.FAVORITES}
            className="d-inline-flex align-items-center font-weight-bold"
          >
            <i className="material-icons mr-2">favorite</i>
            Favorites
          </NavLink>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default memo(Header);
