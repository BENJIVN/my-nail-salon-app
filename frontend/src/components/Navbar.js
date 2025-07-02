import React from 'react';
import {Container, Nav, Navbar, NavDropdown} from 'react-bootstrap';
 
function AppNavbar(){
    return (
        <>
        <Navbar expand ="lg" className="bg-body-tertiary" data-bs-theme="dark">
            <Container>
                <Navbar.Brand href="#home"> Tiffani Nails Database</Navbar.Brand>
                <Navbar.Toggle aria-controls ="basic-navbar-nav"/>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="/login">Login</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
        </>
    );
}

 export default AppNavbar;