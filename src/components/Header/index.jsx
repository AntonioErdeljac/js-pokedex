import React, { memo } from 'react';
import { Container, Navbar } from 'react-bootstrap';

const Header = () => {
  return (
    <Navbar className="mb-5 shadow-sm" bg="white">
      <Container className="d-inline-flex justify-content-center">
        <Navbar.Brand>
          <img
            height="70"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/800px-International_Pok%C3%A9mon_logo.svg.png"
            className="d-inline-block align-top"
            alt="React Bootstrap logo"
          />
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
};

export default memo(Header);
