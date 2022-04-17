
import React, { useRef } from 'react';
import {  Form } from 'react-bootstrap';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import SocialLogin from '../../SocialLogin/SocialLogin';
import './Login.css'
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
    const [sendPasswordResetEmail] = useSendPasswordResetEmail(auth);
    let location = useLocation();
    let from = location.state?.from?.pathname || "/";
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useSignInWithEmailAndPassword(auth);

    const emailRef= useRef('');
    const passwordRef = useRef('');
    const navigate = useNavigate();

    let errorMessage;
    if (error) {
        
        errorMessage = <p className="text-center text-danger">Error: {error.message}
        </p>
          
        
      }
   if(user){
    navigate(from, { replace: true });
   }
    const handleLogin = event => {
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;

        signInWithEmailAndPassword(email, password);
    }
    const navigateRegister = () => {
        navigate('/signup')
    }
    const resetPassword =async () => {
        const email = emailRef.current.value;
        await sendPasswordResetEmail(email);
        toast('Your password has been reset.Check your email');
    }
    return (
        <div className="login-form mx-auto mt-4">
            <h1 className="login-title text-center">Sheba</h1>
            <Form onSubmit={handleLogin}>
  <Form.Group className="mb-3" controlId="formBasicEmail">
   
    <Form.Control ref={emailRef} type="email" placeholder="Enter email" required/>
  
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">

    <Form.Control ref={passwordRef} type="password" placeholder="Password" required/>
  </Form.Group>
  {errorMessage}
  <button className="register-btn">
    Submit
  </button>
</Form>
<p className="account">
        New to Sheba?
        <span onClick={navigateRegister} className="text-info ms-2">
          Open an account
        </span>
      </p>
      <p className="account">Are you forget password? <span  onClick={resetPassword} className="text-info">Reset password</span> </p>
      <SocialLogin></SocialLogin>
      <ToastContainer />
        </div>
    );
};

export default Login;