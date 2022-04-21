import React from 'react'
import {Nav , Navbar , Container} from 'react-bootstrap'
import {useNavigate} from 'react-router-dom'
const AppNavbar = ({setLog , log}) => {
 const navigate = useNavigate()
  return (
    <div>
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Container>
  <Navbar.Brand >RRD WS</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
      <Nav.Link onClick={()=>navigate('/')} >home</Nav.Link>
      <Nav.Link  onClick={()=>navigate('/contactlist')}>contacts</Nav.Link>
   
    </Nav>
    <Nav>
      <Nav.Link  onClick={()=>setLog(!log)}>{log?'logout' : 'login'}</Nav.Link>
       
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
    </div>
  )
}

export default AppNavbar