import React from 'react';
import "./login.css"
import picture from "./images/signuppage/teacher.jpg";

const Register = () => {
    return (
        <div style={{ display: 'flex', width: '100%', height: "auto" }}>
            <div style={{ background: "#F5F5F5", width: '50%', paddingBottom: "55%" }} className="description">
                <p>Contact Parents or Guardians with a quick secure response for permission slips.</p>
                <img src={picture} alt="teacher" style={{ width: "90%", height: "150px" }} />
            </div>

            <div style={{ background: "#200835", width: '50%', flexDirection: 'column', paddingBottom: "55%", paddingTop: "35%" }} className="signup">
                <h1>Register</h1>
                <form style={{ background: "#200835", width: '50%', flexDirection: 'column' }} className="signin">
                    <label>FULL NAME</label>
                    <input className="input" type="text" name="name" placeholder="First and last name" />
                    <label>EMAIL</label>
                    <input className="input" type="email" name="email" placeholder="Email address" />
                    <label>PASSWORD</label>
                    <input className="input" type="password" placeholder="***********" name="password" />
                    <div style={{ fontSize: ".6rem" }} className="submit">
                        <p>I'm already a member</p>
                        <button type="submit">Sign In</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Register;