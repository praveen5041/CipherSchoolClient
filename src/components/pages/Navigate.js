import React from 'react'
import {Navbar,Nav,Container} from 'react-bootstrap'
import logo from '../images/logo.png'
import {useSelector} from 'react-redux'
import {LinkContainer} from 'react-router-bootstrap'
function Navigate() {
    const user=useSelector((state)=>state.user)
  return (
     <Navbar bg='info' expand='lg'>
        <Container>
            <LinkContainer to='/'>
            <img src={logo} style={{ width: 50, height: 50 }} />
            </LinkContainer>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className='ms-auto'>
                    {!user&&(
                        <LinkContainer to="/signup">
                        <Nav.Link >Signup</Nav.Link>
                    </LinkContainer>
                    )}
                    <LinkContainer to="/login">
                        <Nav.Link >Login</Nav.Link>
                    </LinkContainer>
                </Nav>
            </Navbar.Collapse>
        </Container>
     </Navbar>
  )
}

export default Navigate