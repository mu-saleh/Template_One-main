/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect, useRef } from 'react';
import { FaBars } from 'react-icons/fa';
import LogoImg from '../assets/images/logo.png';

function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const menuRef = useRef(null);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    const handleClickOutside = (event) => {
        if (menuRef.current && !menuRef.current.contains(event.target)) {
            closeMenu();
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <div className="header">
            <div className="container">
                <img className="logo" src={LogoImg} alt="" />
                <div className="links" ref={menuRef}>
                    <span className="icon" onClick={toggleMenu}>
                        <FaBars />
                    </span>
                    {isMenuOpen && (
                        <ul>
                            <li><a href="#services" onClick={closeMenu}>Services</a></li>
                            <li><a href="#portfolio" onClick={closeMenu}>Portfolio</a></li>
                            <li><a href="#about" onClick={closeMenu}>About</a></li>
                            <li><a href="#contact" onClick={closeMenu}>Contact</a></li>
                        </ul>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Header;
