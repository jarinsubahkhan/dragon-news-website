import React from 'react';
import { Link } from 'react-router-dom';

const Terms = () => {
    return (
        <div>
     <h2>Terms & conditions</h2>  
     <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Omnis illo voluptatibus quos odio aspernatur ea nihil aliquam quisquam est explicabo.</p>  
     <p>Go back to <Link to='/register'>Register</Link> </p>   
        </div>
    );
};

export default Terms;