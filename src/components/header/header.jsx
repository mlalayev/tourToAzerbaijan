import React, { useState, useEffect, useRef } from 'react';
import './header.css'
import logo from '../../assets/logo.svg';
import { RxHamburgerMenu } from "react-icons/rx";


function header() {

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleHamburgerClick = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            const hamdiv = document.querySelector('.hamdiv');
            if (hamdiv && !hamdiv.contains(event.target)) {
                setIsMenuOpen(false);
            }
        };

        document.addEventListener('click', handleClickOutside);
        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, []);

    return (
        <header>
            <div className="container">
                <a href="/home"><img src={logo} className="logo" alt="Logo" /></a>

                <ul className="headerul">
                    <li><a href="/mltdytrs">Multi-day tours</a></li>
                    <li><a href="/sngldytrips">Day trips</a></li>
                    <li><a href="/dstntns">Destinations</a></li>
                    <li><a href="https://www.evisa.gov.az/en/" target="_blank">Visa informations</a></li>
                </ul>


                <div className="rghtbtnsdv">
                    <button className="chcktbtn">Checkout</button>
                </div>

                <div className="hamdiv" onClick={handleHamburgerClick}>
                    <RxHamburgerMenu className="hamburger" size={20} color="black" />
                </div>
            </div>

            {isMenuOpen && (
                <div className="hamburger-menu">
                    <ul>
                        <li><a href="/mltdytrs">Multi-day tours</a></li>
                        <li><a href="/sngldytrips">Day trips</a></li>
                        <li><a href="/dstntns">Destinations</a></li>
                        <li><a href="https://www.evisa.gov.az/en/" target="_blank">Visa informations</a></li>
                    </ul>
                </div>
            )}
        </header>
    )
}

export default header