import React from 'react';
import curtis from "./images/aboutus/curtis.jpg";
import jason from "./images/aboutus/jason.jpg";
import lennox from "./images/aboutus/lennox.jpg";
import leroy from "./images/aboutus/leroy.jpg";
import rodean from "./images/aboutus/rodean.jpg";
import ryan from "./images/aboutus/ryan.jpg";
import vicky from "./images/aboutus/vicky.jpg";
import "./aboutus.css";


const About_us = () => {
    return (
        <div className="about">
            <div className="welcome">
                <h1>Welcome</h1>
                <h2>To the team.</h2>
            </div>

            <div className="row">
                <div className="memberDesc">
                    <img src={leroy} alt="LeRoy Gardner"/>
                    <h3 className="projectTitle">Project Manager</h3>
                    <h4 className="name">WEBPT6</h4>
                    <h5 className="name">Leroy Gardner</h5>
                </div>

                <div className="memberDesc">
                    <img src={lennox} alt="Lennox Prince Jr"/>
                    <h3 className="projectTitle">User Experience Designer</h3>
                    <h4 className="name">UX3</h4>
                    <h5 className="name">Lennox Prince Jr</h5>
                </div>
            </div>

            <div className="row">
                <div className="memberDesc">
                    <img src={rodean} alt="Rodean Fraser"/>
                    <h3 className="projectTitle">Back-end Developer</h3>
                    <h4 className="name">WEB19</h4>
                    <h5 className="name">Rodean Fraser</h5>
                </div>
                    
                <div className="memberDesc">
                    <img src={ryan} alt="Ryan Matthews"/>
                    <h3 className="projectTitle">Back-end Developer</h3>
                    <h4 className="name">Team Lead WEBPT2</h4>
                    <h5 className="name">Ryan Matthews</h5>
                </div>
            </div>

            <div className="row">
                <div className="memberDesc">
                    <img src={vicky} alt="Vicky Yue"/>
                    <h3 className="projectTitle">Front-end Developer</h3>
                    <h4 className="name">WEB21</h4>
                    <h5 className="name">Vicky Yue</h5>
                </div>

                <div className="memberDesc">
                    <img src={jason} alt="Jason Aviles"/>
                    <h3 className="projectTitle">Front-end Developer</h3>
                    <h4 className="name">Team Lead WEB20_75</h4>
                    <h5 className="name">Jason Aviles</h5>
                </div>

                <div className="memberDesc">
                    <img src={curtis} alt="Curtis Scafe"/>
                    <h3 className="projectTitle">Front-end Developer</h3>
                    <h4 className="name">WEBPT6</h4>
                    <h5 className="name">Curtis Scafe</h5>
                </div>
            </div>
        </div>
    );
};

export default About_us;