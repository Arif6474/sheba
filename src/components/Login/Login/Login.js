import React from 'react';
import { Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import './Login.css'

const Login = () => {
    const navigate =useNavigate();

    const handleLogin = () => {
        navigate('/signup')
    }
    return (
        <Form className="login-form mx-auto mt-4">
        <div className="text-center text-success">
            <h2>Sheba</h2>
        </div>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        
        <Form.Control type="email" placeholder="Enter email" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>

      <button className="register-btn" >
        Login
      </button>
      <p className="account">
        New to Sheba?
        <span onClick={handleLogin} className="text-info ms-2">
          Open an account
        </span>
      </p>
    </Form>
    );
};

export default Login;