import React from 'react';
import schedule from "./images/landing/schedule-icon.png"
import calendar from "./images/landing/calendar.png"
import sms from "./images/landing/sms-icon.png"
import phone from "./images/landing/phone.png"
import confirm from "./images/landing/confirm-icon.png"
import check from "./images/landing/check.png"
import organized from "./images/landing/stay-organized.svg"
import connected from "./images/landing/stay-connected.svg"
import assured from "./images/landing/stay-assured.svg"
import "./home.css"

const Home = () => {
    return (
        <div class="container">

            <div class="landing">
                <div class="header-display">
                    <div class="start-now">
                        <h2>Get Started Now</h2>
                        <h1>A modern way to do permission slips.</h1>
                    </div>
                </div>
            </div>

            <div class="features-container">

                <div class="schedule">
                    <div class="schedule-img">
                        <img src={schedule} alt="pink circle" />
                        <img class="small-icon" src={calendar} alt="calendar icon" />
                    </div>
                    <h2>Schedule</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                      et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                      aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
                      dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
          deserunt mollit anim id est laborum.</p>
                </div>

                <div class="sms">
                    <div class="sms-img">
                        <img src={sms} alt="green circle" />
                        <img class="small-icon" src={phone} alt="phone icon" />
                    </div>
                    <h2>SMS</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                      et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                      aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
                      dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
          deserunt mollit anim id est laborum.</p>
                </div>

                <div class="confirm">
                    <div class="confirm-img">
                        <img src={confirm} alt="purple circle" />
                        <img class="small-icon" src={check} alt="checkmark icon" />
                    </div>
                    <h2>Confirm</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                      et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                      aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
                      dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
          deserunt mollit anim id est laborum.</p>
                </div>

            </div>

    <div class="stay-container">

                <div class="organized">
                        <img src={organized} alt="person organizing letter and envelope" />
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                          et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                          aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
                          dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
            deserunt mollit anim id est laborum.</p>
                </div>

                <div class="connected">
                    <img src={connected} alt="person with mobile device" />
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                      et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                      aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
                      dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
          deserunt mollit anim id est laborum.</p>
                </div>

                <div class="assured">
                    <img src={assured} alt="person carrying a baby" />
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                      et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                      aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
                      dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
          deserunt mollit anim id est laborum.</p>
                </div>

            </div>

            <div class="contact-section">
                <div class="contact-info">
                    <div class="cont-box">
                        <h2>Keep everyone up to speed. The right way.</h2>
                        <h2 class="contact-us">Contact Us</h2>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;