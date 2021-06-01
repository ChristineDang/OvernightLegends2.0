import React from 'react';
import './nav.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';

import {IconButton, Badge, MenuItem, menu, Typography } from '@material-ui/core';
import { ShoppingCart } from '@material-ui/icons';

class Navbarf extends React.Component {
render(){
    return (
    
      <Navbar bg="light" expand="lg">
      <Navbar.Brand href="/">Overnight Legends</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">

          <NavDropdown title="Shop Affiliate" id="basic-nav-dropdown">

            <NavDropdown.Item href="#action/3.1">Alerts</NavDropdown.Item>
            <NavDropdown.Item href="/products">Badges</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Emotes</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.4">Overlays</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.5">Panels</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.6">Scenes</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.7">Transitions</NavDropdown.Item>
            {/* <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item> */}
          </NavDropdown>

          <NavDropdown title="Shop Non-Affiliate" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Alerts</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">Overlays</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Panels</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.4">Scenes</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.5">Transitions</NavDropdown.Item>
            {/* <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item> */}
          </NavDropdown>

          <Nav.Link href="#home">About Us</Nav.Link>
          <Nav.Link href="#home">Contact Us</Nav.Link>
        </Nav>
        {/* <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-success">Search</Button>
        </Form> */}
      </Navbar.Collapse>

      <IconButton aria-label="Show cart items" color="inherit">
        <Badge badgeContent={2} color="secondary">
          <ShoppingCart />
        </Badge>
      </IconButton>
    </Navbar>
    )
}
}


export default Navbarf;
