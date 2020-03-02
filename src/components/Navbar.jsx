import React from 'react';
import {Nav,Form,FormControl,Button, Navbar,Brand,Toggle,Collapse, NavDropdown } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';


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
      <NavDropdown title="Dropdown" id="basic-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
      </NavDropdown>
    </Nav>
    <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-success">Search</Button>
    </Form>
  </Navbar.Collapse>
</Navbar>
</>
)
}
export default NavigationBar;
