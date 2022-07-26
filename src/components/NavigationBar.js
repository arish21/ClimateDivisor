import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';




const NavigationBar = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
          <Navbar.Brand href="/" className="mx-1">Climate Divisor</Navbar.Brand>
        <Container>

              
            <Nav className="m-auto">
              <Nav.Link className="mx-4" href="/">Home</Nav.Link>
              <Nav.Link className="mx-4" href="/forecast">Forecast</Nav.Link>
              <Nav.Link className="mx-4" href="/login">Login</Nav.Link>
              <Nav.Link className="mx-4" href="/signup">Signup</Nav.Link>
            </Nav>
            
            <Nav className="auto">
              <Nav.Link href=""></Nav.Link>
            </Nav>
            <Nav className="auto">
              <Nav.Link href=""></Nav.Link>
            </Nav>
            <Nav className="auto">
              <Nav.Link href=""></Nav.Link>
            </Nav>
            <Nav className="auto">
              <Nav.Link href=""></Nav.Link>
            </Nav>
            <Nav className="auto">
              <Nav.Link href=""></Nav.Link>
            </Nav>
            <Nav className="auto">
              <Nav.Link href=""></Nav.Link>
            </Nav>
            <Nav className="auto">
              <Nav.Link href=""></Nav.Link>
            </Nav>
            <Nav className="auto">
              <Nav.Link href=""></Nav.Link>
            </Nav>
        
        </Container>
      </Navbar>
      
  )
}

export default NavigationBar


