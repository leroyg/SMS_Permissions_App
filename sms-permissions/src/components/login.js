import React from 'react';
import "./login.css"
import picture from "./images/signuppage/teacher.jpg";

const login = () => {
    return (
        <div className="login">
            <div className="description">
                <p>Contact Parents or Guardians with a quick secure response for permission slips.</p>
                <img src={picture} alt="teacher"/>
            </div>
            
            <div className="signup">
                <h1>Sign in</h1>
                <form className="signin">
                    <label className="label">EMAIL</label>
                    <input className="input" type="email" name="email" placeholder="Email address" />
                    <label className="label">PASSWORD</label>
                    <input className="input" type="password" placeholder="***********" name="password" />
                    <div className="submit">
                        <button type="submit">Sign In</button>
                        <p>Need to Sign up?</p>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default login;