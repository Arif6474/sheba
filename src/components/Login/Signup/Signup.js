import React from 'react';
import { Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import './Signup.css'


const Signup = () => {
    const navigate = useNavigate();

    const handleSignup = () => {
        navigate('/login')
    }
    return (
        <Form  className="login-form mx-auto mt-4">
            <div className="text-center text-success">
            <h2>Sheba</h2>
        </div>
        <Form.Group className="mb-3" controlId="formBasicEmail">
        
          <Form.Control type="text" name="name" placeholder="Your name" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
         
          <Form.Control type="email"  name="email" placeholder="Enter email" />
        </Form.Group>
  
        <Form.Group className="mb-3" controlId="formBasicPassword">
          
          <Form.Control type="password"  name="password" placeholder="Password" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
      
          <Form.Control type="password"  name="confirm-password" placeholder="Confirm password" />
        </Form.Group>
  
        <button className="register-btn" >
          Register
        </button>
        <p onClick={handleSignup} className="text-center  mt-4 text-info" >
          Already have an account?
         
        </p>
      </Form>
    );
    
};

export default Signup;