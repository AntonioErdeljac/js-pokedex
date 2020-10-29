import cn from 'classnames/bind';
import React, { memo } from 'react';
import { Container, Navbar, Nav, NavLink, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import styles from './styles.scss';
import logo from './images/logo.png';
import { useHeader } from './hooks';

import { paths } from '../../constants';

const cx = cn.bind(styles);

const Header = () => {
  const { toggleAudio, isMuted, isActive } = useHeader();

  return (
    <Navbar fixed="top" className="mb-5 shadow-sm" bg="white">
      <Container className="d-inline-flex">
        <Navbar.Brand as={Link} to={paths.client.HOME}>
          <img
            height="70"
            src={logo}
            className={cx('pd-brand d-inline-block align-top')}
            alt="React Bootstrap logo"
          />
        </Navbar.Brand>
        <div className={cx('pd-audio--mobile')}>
          <Button
            onClick={toggleAudio}
            variant="light"
            className="d-flex justify-content-center align-items-center mr-3"
          >
            <i className="material-icons">{isMuted ? 'volume_off' : 'volume_up'}</i>
          </Button>
        </div>
        <Nav className={cx('pd-nav ml-auto')}>
          <Button
            onClick={toggleAudio}
            variant="light"
            className="d-flex justify-content-center align-items-center mr-3"
          >
            <i className="material-icons">{isMuted ? 'volume_off' : 'volume_up'}</i>
          </Button>
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
