import React from 'react';
import './SignUp.css';
import Form from './Form';


function SignUp() {
    return (
        <div className="sign-up-container">
            <video src="videos/sign-up-bg.mp4" autoPlay loop muted />
            <h1>Sign up</h1>
            <h2>Coffe Buddies<i class="fas fa-fill-drip"></i>
            </h2>
            <div className="forms">
                <Form />
            </div>
        </div>
    );

};

export default SignUp;
