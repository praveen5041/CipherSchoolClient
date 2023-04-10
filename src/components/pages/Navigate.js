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
            <img src={logo} style={{ width: 5, height: 5 }} />
            </LinkContainer>
        </Container>
     </Navbar>
  )
}

export default Navigate