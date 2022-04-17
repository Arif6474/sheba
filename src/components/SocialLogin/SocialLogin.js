import React from 'react';

const SocialLogin = () => {
    return (
        <div>
            <div className="d-flex align-items-center">
            <div style={{height: "1px"}} className="bg-primary w-50"></div>
            <p className="mt-2 px-2">or</p>
            <div style={{height: "1px"}} className="bg-primary w-50"></div>
        </div>
        
        <div className="text-center">
            <button className="btn btn-primary text-white w-75 my-2"><img style={{height:"20px"}} className="rounded-circle mx-2" alt="" /> Google Sign in</button>
        </div>
        </div>
    );
};

export default SocialLogin;