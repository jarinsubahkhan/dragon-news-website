import React from 'react';
import { Button } from 'react-bootstrap';
import { FaGoogle, FaGithub, FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import './RightNav.css'
import QZone from '../QZone/QZone';
import bg from '../../../assets/bg.png'
const RightNav = () => {
    return (
        <div>
            <h4 className='mb-2 mt-10'>Login With</h4>
            <Button className='W-50 mb-2' variant="outline-primary"> <FaGoogle></FaGoogle> Login with Google</Button>
            <Button className='W-50' variant="outline-dark"> <FaGithub></FaGithub> Login with Github     </Button>
            <div className='d-grid mt-4'>
<h4 className='mb-2'>Find us on</h4>
<Button className='text-secondary' variant="outline-primary"> <FaFacebook className='text-primary'></FaFacebook> Facebook</Button>
<Button className='text-secondary' variant="outline-primary"> <FaTwitter className='text-primary'></FaTwitter> Twitter</Button>
<Button className='text-secondary' variant="outline-primary"> <FaInstagram className='text-danger'></FaInstagram> Instagram</Button>
            </div>
            <QZone></QZone>
            <div className='deg'>
                <img className='img-deg' src={bg} alt="" />
                <h2>Create an Amazing Newspaper</h2>
                <p>Discover thousands of options, easy to customize layouts, one-click to import demo and much more.</p>
                <button>Learn More</button>
            </div>
        </div>

    );
};

export default RightNav;