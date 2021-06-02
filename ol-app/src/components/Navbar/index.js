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

          <NavDropdown title="Shop" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.4">Packages</NavDropdown.Item>
          <NavDropdown.Divider />
            <h5>Affiliate</h5>
              <NavDropdown.Item href="#action/3.1">Alerts</NavDropdown.Item>
              <NavDropdown.Item href="/shop">Badges</NavDropdown.Item>
              <NavDropdown.Item href="/shop">Emotes</NavDropdown.Item>
              <NavDropdown.Item href="/shop">Overlays</NavDropdown.Item>
              <NavDropdown.Item href="/shop">Panels</NavDropdown.Item>
              <NavDropdown.Item href="/shop">Scenes</NavDropdown.Item>
              <NavDropdown.Item href="/shop">Transitions</NavDropdown.Item>

          <NavDropdown.Divider />

            <h5>Non-Affiliate</h5>
              <NavDropdown.Item href="/shop">Alerts</NavDropdown.Item>
              <NavDropdown.Item href="/shop">Overlays</NavDropdown.Item>
              <NavDropdown.Item href="/shop">Panels</NavDropdown.Item>
              <NavDropdown.Item href="/shop">Scenes</NavDropdown.Item>
              <NavDropdown.Item href="/shop">Transitions</NavDropdown.Item>
          </NavDropdown>

          <Nav.Link href="#home">About Us</Nav.Link>
          <Nav.Link href="#home">Contact Us</Nav.Link>
        </Nav>
        {/* <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-success">Search</Button>
        </Form> */}

        <IconButton aria-label="Show cart items" color="inherit">
          <Badge badgeContent={2} color="secondary">
            <ShoppingCart />
          </Badge>
        </IconButton>
      </Navbar.Collapse>


    </Navbar>
    )
}
}


export default Navbarf;

// import React from "react";
// import "./nav.css";
// import "bootstrap/dist/css/bootstrap.min.css";
// import { Navbar, Nav, NavDropdown } from "react-bootstrap";
// // import { Container, Row, Col } from 'react';
// import logo from "../../assets/Logo.jpg";
// import { Badge, IconButton } from "@material-ui/core";
// import { ShoppingCart } from "@material-ui/icons";
// class Navbarf extends React.Component {
//   render() {
//     return (
//       <Navbar id="navbarfy">
//         <Navbar.Brand id="home" href="/">
//           <img
//             alt=""
//             src={logo}
//             width="50"
//             height="50"
//             className="d-inline-block align-center"
//           />{" "}
//           Overnight Legends
//         </Navbar.Brand>
//         <Navbar.Toggle aria-controls="responsive-navbar-nav" />
//         <Navbar.Collapse id="responsive-navbar-nav">
//           <Nav classNameName="mr-auto">
//             <Nav.Link id="home" href="/">
//               Home
//             </Nav.Link>
//             {/* <Nav.Link id="home" href="#link">Packages</Nav.Link> */}

//             <NavDropdown
//               id="home"
//               classNameName="dropdown-menu multi-column columns-2"
//               title="Shop"
//             >
//               <div className="drip">
//                 <h5>Non-Affiliate</h5>
//                 <div className="multi-column-dropdown">
//                   {/* <ul classNameName="dropdown-menu multi-column columns-2">              */}
//                   {/* <ul className="multi-column-dropdown"> */}

//                   <NavDropdown.Item href="/OvernightLegends/products">
//                     Alerts
//                   </NavDropdown.Item>
//                   <NavDropdown.Item href="#action/3.3">
//                     Overlays
//                   </NavDropdown.Item>
//                   <NavDropdown.Item href="#action/3.3">Panels</NavDropdown.Item>
//                   <NavDropdown.Item href="#action/3.3">Scenes</NavDropdown.Item>
//                   <NavDropdown.Item href="#action/3.3">
//                     Transitions
//                   </NavDropdown.Item>
//                   {/* </ul> */}
//                 </div>
//                 <NavDropdown.Divider />
//                 <h5>Affiliate</h5>
//                 <div className="multi-column-dropdown">
//                   {/* <ul className="multi-column-dropdown"> */}

//                   <NavDropdown.Item href="#action/3.1">Alerts</NavDropdown.Item>
//                   <NavDropdown.Item href="#action/3.3">Badges</NavDropdown.Item>
//                   <NavDropdown.Item href="#action/3.2">Emotes</NavDropdown.Item>
//                   <NavDropdown.Item href="#action/3.3">
//                     Overlays
//                   </NavDropdown.Item>
//                   <NavDropdown.Item href="#action/3.3">Panels</NavDropdown.Item>
//                   <NavDropdown.Item href="#action/3.3">Scenes</NavDropdown.Item>
//                   <NavDropdown.Item href="#action/3.3">
//                     Transitions
//                   </NavDropdown.Item>
//                   {/* <NavDropdown.Divider />
//                             <NavDropdown.Item href="#action/3.4">Packages</NavDropdown.Item> */}
//                   {/* </ul> */}
//                   {/* </ul> */}
//                 </div>
//               </div>
//             </NavDropdown>

//             <Nav.Link id="home" href="#link">
//               Contact
//             </Nav.Link>
//           </Nav>
//           <Nav className="justify-content-center shopping-button">
//             <IconButton aria-label="Show cart items" color="inherit">
//               <Badge badgeContent={2} color="secondary">
//                 <ShoppingCart />
//               </Badge>
//             </IconButton>
//           </Nav>

//           {/* <Form inline>
//             <FormControl type="text" placeholder="Search" classNameName="mr-sm-2" />
//             <Button variant="outline-success">Search</Button>
//           </Form> */}
//         </Navbar.Collapse>
//       </Navbar>
//     );
//   }
// }

// export default Navbarf;