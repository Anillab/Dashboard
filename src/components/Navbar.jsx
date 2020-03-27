import React from 'react';
import {Nav, Navbar} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Credbook from "../assets/Credbook.png";
import Image from 'react-render-image';

const NavigationBar = (props)=>{
  return(
    <>
<Navbar bg="light" expand="lg" variant="crimson">
  <Navbar.Brand>
  <Image src={Credbook}>
   {({image})=>{
     return <img src={Credbook} width={'200px'} height={'90px'} alt={Credbook}/>;
   }}
  </Image>
  </Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="#home">Contact Us hello@credbook.com</Nav.Link>
      <Nav.Link href="#link">TEL:+2331345761</Nav.Link>


    </Nav>
  </Navbar.Collapse>
</Navbar>
</>
)
}
export default NavigationBar;
