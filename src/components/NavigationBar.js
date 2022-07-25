import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';




const NavigationBar = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
          <Navbar.Brand href="#home" className="mx-2">ClimateDivisor</Navbar.Brand>
        <Container>

            <Nav className="m-auto">
              <Nav.Link href="#home" className="mx-4">Home</Nav.Link>
              <Nav.Link href="#home" className="mx-4">Forecast</Nav.Link>
              <Nav.Link href="#home" className="mx-4">Login</Nav.Link>
              <Nav.Link href="#home" className="mx-4">Signup</Nav.Link>
            </Nav>
            
            <Nav className="auto">
              <Nav.Link href="#home"></Nav.Link>
            </Nav>
        
        </Container>
      </Navbar>
      
  )
}

export default NavigationBar


