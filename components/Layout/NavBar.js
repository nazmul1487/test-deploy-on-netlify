import React from 'react'
import {Navbar,Container, Nav, NavDropdown} from 'react-bootstrap'

export default function NavBar() {
  return (
<Navbar bg="dark" expand="lg" variant="dark" sticky="top">
    <Container>
        <Navbar.Brand href="/">Navbar</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                  <Nav.Link active="true" className='mx-md-5' href="/about-us">AboutUs</Nav.Link>
                  <NavDropdown active="true" title="Business" id="basic-nav-dropdown">
                    <NavDropdown.Item href="/business/motorola">Motorola</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">Xtra</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">Amazfit</NavDropdown.Item>
                    
                  </NavDropdown>
                  {/* <Nav.Link className='mx-md-5' href="#link">Leadership</Nav.Link> */}
                  <NavDropdown active="true" className='mx-md-5' title="News & Gallery" id="basic-nav-dropdown">
                    <NavDropdown.Item href="/news-&-gallery/news">News</NavDropdown.Item>
                    <NavDropdown.Item href="/news-&-gallery/gallery">Gallery</NavDropdown.Item>
                  </NavDropdown>
                  <Nav.Link  href="/contact-us">ContactUs</Nav.Link>
                  <Nav.Link className='mx-md-5' href="/career">Career</Nav.Link>
              </Nav>
              <Nav>
              <Nav.Link active="true" href="#link">01810008810</Nav.Link>
              </Nav>
          </Navbar.Collapse>
    </Container>
  </Navbar>
  )
}
