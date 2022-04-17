import React from 'react';
import { useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import google from '../../images/google.png'
import github from '../../images/github.png'
const SocialLogin = () => {
    const navigate = useNavigate();
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const [signInWithGithub, user2, loading2, error2] = useSignInWithGithub(auth);
    let errorMessage;
    if (error || error2) {   
        errorMessage =  <div>
            <p className="text-danger text-center">Error: {error?.message} {error2?.message}</p>
          </div>
      }
    if(user || user2) {
        navigate('/')
    }
    return (
        <div>
            <div className="d-flex align-items-center">
            <div style={{height: "1px"}} className="bg-primary w-50"></div>
            <p className="mt-2 px-2">or</p>
            <div style={{height: "1px"}} className="bg-primary w-50"></div>
        </div>
        {errorMessage}
        <div className="text-center">
            <button onClick={() =>signInWithGoogle()} className="btn btn-primary text-white w-75 my-2"><img style={{height:"20px"}} src={google} className="rounded-circle mx-2" alt="" /> Google Sign in</button>
        </div>
        <div className="text-center">
            <button onClick={() =>signInWithGithub()} className="btn btn-dark w-75 my-2"><img style={{height:"20px"}} className="rounded-circle mx-2" src={github}alt="" /> Github Sign in</button>
        </div>
        </div>
    );
};

export default SocialLogin;