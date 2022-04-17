import React from 'react';
import { Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import './Signup.css'
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import SocialLogin from '../../SocialLogin/SocialLogin';

const Signup = () => {
     
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useCreateUserWithEmailAndPassword(auth, {sendEmailVerification: true});
      
      const navigate= useNavigate();
    const navigateLogin = () => {
        navigate('/login');
    }
    
    if (user){
        navigate('/')
    }
    const handleRegister = (event) => {
        event.preventDefault();
       const name =event.target.name.value;
       const email = event.target.email.value;
       const password = event.target.password.value;
       createUserWithEmailAndPassword(email, password);
    }
    return (
        <div className="login-form mx-auto mt-4">
            <h2 className="login-title text-center">Sheba</h2>
            <Form  onSubmit={handleRegister}>
           
        <Form.Group className="mb-3" controlId="formBasicEmail">
        
          <Form.Control type="text" name="name" placeholder="Your name" required />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
         
          <Form.Control type="email"  name="email" placeholder="Enter email" required/>
        </Form.Group>
  
        <Form.Group className="mb-3" controlId="formBasicPassword">
          
          <Form.Control type="password"  name="password" placeholder="Password" required />
        </Form.Group>
        
  
        <button className="register-btn" >
          Register
        </button>
       
      </Form>
      <p className="text-center  mt-4 text-info" onClick={navigateLogin}>
          Already have an account?
         
        </p>
        <SocialLogin></SocialLogin>
        </div>
    );
};

export default Signup;