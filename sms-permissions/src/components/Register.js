import React from 'react';
import "./login.css"
import picture from "./images/signuppage/teacher.jpg";

const Register = () => {
    return (
        <div className="register">
            <div className="description">
                <p>Contact Parents or Guardians with a quick secure response for permission slips.</p>
                <img src={picture} alt="teacher" />
            </div>

            <div className="signup">
                <h1>Register</h1>
                <form className="signin">
                    <label className="label">FULL NAME</label>
                    <input className="input" type="text" name="name" placeholder="First and last name" />
                    <label className="label">EMAIL</label>
                    <input className="input" type="email" name="email" placeholder="Email address" />
                    <label className="label">PASSWORD</label>
                    <input className="input" type="password" placeholder="***********" name="password" />
                    <div className="submit">
                        <p>I'm already a member</p>
                        <button type="submit">Sign In</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Register;