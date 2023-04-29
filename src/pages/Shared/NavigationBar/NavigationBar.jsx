import React, { useContext } from 'react';
import { Container } from 'react-bootstrap';
import { FaUserCircle } from 'react-icons/fa';
import { Button, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../providers/AuthProvider';



const NavigationBar = () => {

    const {user, logOut} = useContext(AuthContext);

    const handleLogOut = () => {
      logOut()
      .then()
      .catch(error => console.log(error));
    }


    return (
        <Container>
   <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
     <Container>
    
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mx-auto">
           
              <Link to="/category/0">Home</Link>
            
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#career">Career</Nav.Link>
            
          </Nav>
          <Nav>
            {user && <FaUserCircle style={{fontSize: '2rem'}}></FaUserCircle>}
           {user ?
            <Button className='dark' onClick={handleLogOut} variant="dark">Logout</Button> : 
            <Link to="/login">
           <Button className='dark' variant="dark">Login</Button> 
            </Link>
            }
          </Nav>
        </Navbar.Collapse>
        </Container> 
    </Navbar>          
        </Container>
    );
};

export default NavigationBar;