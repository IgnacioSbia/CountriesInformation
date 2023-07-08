'use client';
import React, { useState } from 'react';
import './NavBar.css';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';

function NavBar({setSelectedRegion}:any) {
  const [nowRegion, setNowRegion] = useState<any>();


  const handleRegionClick = (region:any)=>{
    setSelectedRegion(region.target.text);
    setNowRegion(region.target.text)
  }

  const clearRegion = ()=>{
    setSelectedRegion('');
    setNowRegion('');
  }

  return (
    <>
      {[false, 'sm'].map((expand:any) => (
        <Navbar key={expand} expand={expand} className="bg-body-tertiary mb-3">
          <Container fluid>
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Body>
                <Form className="d-flex">
                    <Form.Control
                      type="search"
                      placeholder="Search"
                      className="me-2 navBarSearchBar"
                      aria-label="Search"
                    />
                    <Button variant="outline-success" className='mainNavBarSearchButton'>Search</Button>
                  </Form>
                  <Nav className="justify-content-end flex-grow-1 pe-3">
                    <NavDropdown
                      title={nowRegion ? nowRegion : "Filter by Region"}
                      id={`offcanvasNavbarDropdown-expand-${expand}`}
                    >
                      <NavDropdown.Item onClick={(value)=>handleRegionClick(value)}>Asia</NavDropdown.Item>
                      <NavDropdown.Item onClick={(value)=>handleRegionClick(value)}>
                      Americas
                      </NavDropdown.Item>
                      <NavDropdown.Item  onClick={(value)=>handleRegionClick(value)}>
                      Europe
                      </NavDropdown.Item>
                      <NavDropdown.Item  onClick={(value)=>handleRegionClick(value)}>
                      Oceania
                      </NavDropdown.Item>
                      <NavDropdown.Item onClick={(value)=>handleRegionClick(value)}>
                      Africa
                      </NavDropdown.Item>
                      <NavDropdown.Item onClick={clearRegion}>
                        {nowRegion ? "Clear Selection" : ''}
                      </NavDropdown.Item>
                    </NavDropdown>
                  </Nav>
                
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  )
}

export default NavBar