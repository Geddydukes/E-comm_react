import React from "react";
import { Navbar, Nav, FormControl, Form, Button } from "react-bootstrap";

const Navigation = () => {
  return (
    <div>
      <Navbar bg="light" expand="lg" fixed="top">
        <Navbar.Brand href="/">E-Comm</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/shop">Shop</Nav.Link>
            <Nav.Link href="/about">About</Nav.Link>
            <Nav.Link href="/mission">Mission</Nav.Link>
          </Nav>
          <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default Navigation;
