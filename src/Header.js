// Header.jsx

import React from 'react';
function Header() {
    return (
        <div className="header">
            <div className="container">
                <img className="logo" src="../images/logo.png" alt="" />
                <div className="links">
                    <span className="icon">
                        <i class="fa fa-bars" aria-hidden="true"></i>
                    </span>
                    <ul>
                        <li><a href="#services">Services</a></li>
                        <li><a href="#portfolio">Portfolio</a></li>
                        <li><a href="#about">About</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Header;

