import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

function Header() {
  return (

    <>
    <Navbar className="bg-info">
        <Container>
          <Navbar.Brand>
           <Link to={'/'} className='text-white d-flex mt-2' style={{textDecoration:'none',fontSize:'28px',justifyContent:'space-evenly'}}>
           <i class="fa-solid fa-circle-play" ></i>

          <h2 className='text fs-5 ms-1'>Media Player</h2>

           </Link>
          </Navbar.Brand>
        </Container>
      </Navbar>
    </>

  )
}

export default Header