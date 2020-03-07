import React from 'react';
import {Nav,Button, Navbar,Brand,Toggle} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import { FiBell } from "react-icons/fi";


const NavigationBar = (props)=>{
  return(
    <>
<Navbar bg="light" expand="lg">
  <Navbar.Brand href="#home">Credbook</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="#home">Contact Us hello@credbook.com</Nav.Link>
      <Nav.Link href="#link">TEL:+2331345761</Nav.Link>
      <Nav.Link href="#link">< FiBell/></Nav.Link>

    </Nav>
  </Navbar.Collapse>
</Navbar>
</>
)
}
export default NavigationBar;
