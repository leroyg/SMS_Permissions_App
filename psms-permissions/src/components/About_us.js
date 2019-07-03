import React from 'react';
import curtis from "./images/aboutus/curtis.jpg";
import jason from "./images/aboutus/jason.jpg";
import lennox from "./images/aboutus/lennox.jpg";
import leroy from "./images/aboutus/leroy.jpg";
import rodean from "./images/aboutus/rodean.jpg";
import ryan from "./images/aboutus/ryan.jpg";
import vicky from "./images/aboutus/vicky.jpg";


const About_us = () => {
    return (
        <div className="about">
            <h1 className="welcome">Welcome</h1>
            <h2 className="team">To the team.</h2>
            
            <div className="row1">
                <img src={leroy} alt="LeRoy Gardner"/>
                <h3>Project Manager</h3>
                <h4>Leroy Gardner</h4>
                <h5>WEBPT6</h5>

                <img src={lennox} alt="Lennox Prince Jr"/>
                <h3>User Experience Designer</h3>
                <h4>Lennox Prince Jr</h4>
                <h5>UX3</h5>
            </div>
            
            <div className="row2">
                <img src={rodean} alt="Rodean Fraser"/>
                <h3>Project Manager</h3>
                <h4>Rodean Fraser</h4>
                <h5>WEB19</h5>
            
                <img src={ryan} alt="Ryan Matthews"/>
                <h3>Project Manager</h3>
                <h4>Ryan Matthews</h4>
                <h5>Team Lead WEBPT2</h5>
            </div>

            <div className="row3">
                <img src={vicky} alt="Vicky Yue"/>
                <h3>Project Manager</h3>
                <h4>Vicky Yue</h4>
                <h5>WEB21</h5>

                <img src={jason} alt="Jason Aviles"/>
                <h3>Project Manager</h3>
                <h4>Jason Aviles</h4>
                <h5>Team Lead WEB20_75</h5>

                <img src={curtis} alt="Curtis Scafe"/>
                <h3>Project Manager</h3>
                <h4>Curtis Scafe</h4>
                <h5>WEBPT6</h5>
            </div>
        </div>
    );
};

export default About_us;