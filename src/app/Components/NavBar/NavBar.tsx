'use client';
import React, { useState } from 'react';
import './NavBar.css';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function NavBar({setSelectedRegion, setSearchBar, setFilteredSearch,searchBarValue}:any) {
  const [nowRegion, setNowRegion] = useState<any>();

  const handleRegionClick = (region:any)=>{
    setSelectedRegion(region.target.text);
    setNowRegion(region.target.text)
  }
  const clearRegion = ()=>{
    setSelectedRegion('');
    setNowRegion('');
  }
  const handleSearchBar = (searchValue:any)=>{
    setSearchBar(searchValue.target.value)
  }
  const handleSearchButton = ()=>{
    setFilteredSearch(searchBarValue);
    console.log(searchBarValue)
  }
  return (
    <>
      <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="/">Countries</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Form className="d-flex">
                    <Form.Control
                      type="search"
                      placeholder="Search"
                      className="me-2 navBarSearchBar"
                      aria-label="Search"
                      onChange={handleSearchBar}
                    />
                    <Button variant="outline-success" className='mainNavBarSearchButton' onClick={handleSearchButton}>Search</Button>
                  </Form>
          </Nav>
          <Nav>
          <NavDropdown title={nowRegion ? nowRegion : "Filter by Region"} id="collasible-nav-dropdown">
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
        </Navbar.Collapse>
      </Container>
    </Navbar> 
        
      
    </>
  )
}

export default NavBar