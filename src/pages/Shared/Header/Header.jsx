import React from 'react';
import logo from '../../../assets/logo.png'
import moment from 'moment';
import { Button, Container } from 'react-bootstrap';
import Marquee from "react-fast-marquee";
import './Header.css'


const Header = () => {

  
    return (
       <Container>

         <div className='text-center'>
    <img src={logo} alt="" />
    <p className='text-secondary'><small>Journalism Without Fear or Favour</small></p> 
    <p>{moment().format("dddd,")}<span className='text-secondary'>{moment().format("MMMM DD,YYYY")}</span></p>     
    {/* <p>Sunday, <span className='text-secondary'>November 27, 2022</span></p>      */}
        </div>

        <div className='d-flex text '>
<Button className='btn' variant="danger">Latest</Button>
<Marquee className='text-black'>
Match Highlights: Germany vs Spain — as it happened   !   Match Highlights: Germany vs Spain as...
</Marquee>
        </div>

        <div>
        {/* <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
      <Container>
    
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mx-auto">
            <Nav.Link href="#home">
              <Link to="/">Home</Link>
            </Nav.Link>
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#career">Career</Nav.Link>
            
          </Nav>
          <Nav>
            {user && <Nav.Link href="#deets"><FaUserCircle style={{fontSize: '2rem'}}></FaUserCircle></Nav.Link>}
           {user ?
            <Button className='dark' variant="dark">Logout</Button> : 
            <Link to="/login">
           <Button className='dark' variant="dark">Login</Button> 
            </Link>
            }
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar> */}
        </div>

       </Container>
    );
};

export default Header;