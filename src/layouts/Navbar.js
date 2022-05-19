import React from 'react';
import { Container, Navbar } from 'react-bootstrap';
import { StaticImage } from 'gatsby-plugin-image';

const NavbarLayout = () => (
  <Navbar bg="light" variant="light">
    <Container>
      <Navbar.Brand href="/">
        <StaticImage
          alt=""
          src="../images/mwm.png"
          width="320"
          height="120"
        />
      </Navbar.Brand>
    </Container>
  </Navbar>
);

export default NavbarLayout;
