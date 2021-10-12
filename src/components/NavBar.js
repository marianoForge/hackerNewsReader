import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { format } from "date-fns";

const NavBar = () => {
  const now = new Date();

  const date = format(now, `yyyy/MM/dd`);

  return (
    <Navbar bg="primary" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand href="#home">Hacker News by MDS</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto" activeKey="/home">
            <Nav.Link href="/home">New</Nav.Link>
            <Nav.Link href="#link" disabled>
              Past
            </Nav.Link>
            <Nav.Link href="#link" disabled>
              Ask
            </Nav.Link>
            <Nav.Link href="#link" disabled>
              Show
            </Nav.Link>
            <Nav.Link href="#link" disabled>
              Jobs
            </Nav.Link>
            <Nav.Link
              href="https://www.timeanddate.com/"
              className="justify-content-end"
              target="_blank"
            >
              {date}
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
