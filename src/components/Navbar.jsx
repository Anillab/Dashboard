import React from 'react';
import {Nav, Navbar} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FiBell } from "react-icons/fi";
import Credbook from "../assets/Credbook.png";
import Image from 'react-render-image';
import { Link } from 'react-router-dom';

const NavigationBar = (props)=>{
  return(
    <>
<Navbar bg="light" expand="lg" variant="crimson">
  <Navbar.Brand>
  <Image src={Credbook}>
   {({image})=>{
     return <img src={Credbook} width={'200px'} height={'75px'} alt={Credbook}/>;
   }}
  </Image>
  </Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="#home">Contact Us hello@credbook.com</Nav.Link>
      <Nav.Link href="#link">TEL:+2331345761</Nav.Link>
      <Link to='/notification'>
      <Nav.Link>< FiBell/></Nav.Link>
      </Link>
    </Nav>
  </Navbar.Collapse>
</Navbar>
</>
)
}
export default NavigationBar;
