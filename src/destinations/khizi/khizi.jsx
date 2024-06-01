import React, { useState, useEffect, useRef } from 'react';
import logo from '../../assets/logo.svg';
import { RxHamburgerMenu } from "react-icons/rx";
import ImageSlider from '../../components/imageSlider/imageSlider.jsx';

function Lankaran() {
    const [slides, setSlides] = useState([]);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const menuRef = useRef(null);

    const handleClickOutside = (ref, setFunction) => (event) => {
        if (ref.current && !ref.current.contains(event.target)) {
            setFunction(false);
        }
    };

    const handleHamburgerClick = () => setIsMenuOpen(!isMenuOpen);

    useEffect(() => {
        const fetchSlides = async () => {
            try {
                const response = await fetch('../../../sliderkhizi.json');
                const data = await response.json();
                setSlides(data);
            } catch (error) {
                console.error('Error fetching the slides data:', error);
            }
        };

        fetchSlides();
    }, []);

    useEffect(() => {
        const handleOutsideClick = handleClickOutside(menuRef, setIsMenuOpen);
        document.addEventListener('mousedown', handleOutsideClick);
        return () => {
            document.removeEventListener('mousedown', handleOutsideClick);
        };
    }, []);

    return (
        <div id='body'>

            <header id='header'>
                <div id='container'>
                    <a href="/home">
                        <img src={logo} className="plogo logo" alt="Logo" />
                    </a>
                    <ul className="headerul destnul">
                        <li><a href="/mltdytrs">Multi-day tours</a></li>
                        <li><a href="/sngldytrips">Day trips</a></li>
                        <li><a href="/dstntns">Destinations</a></li>
                        <li>
                            <a href="https://www.evisa.gov.az/en/" target="_blank" rel="noopener noreferrer">
                                Visa informations
                            </a>
                        </li>
                    </ul>
                    <div className="rghtbtnsdv">
                        <button className="chcktbtn destbtn">Checkout</button>
                    </div>
                    <div className="hamdiv" onClick={handleHamburgerClick}>
                        <RxHamburgerMenu className="hamburger" size={20} color="black" />
                    </div>
                </div>
                {isMenuOpen && (
                    <div className="hamburger-menu" ref={menuRef}>
                        <ul>
                            <li><a href="/mltdytrs">Multi-day tours</a></li>
                            <li><a href="/sngldytrips">Day trips</a></li>
                            <li><a href="/dstntns">Destinations</a></li>
                            <li>
                                <a href="https://www.evisa.gov.az/en/" target="_blank" rel="noopener noreferrer">
                                    Visa informations
                                </a>
                            </li>
                        </ul>
                    </div>
                )}
            </header>

            <section className="sectionslider">

                {slides.length > 0 ? <ImageSlider slides={slides} /> : <p>Loading...</p>}

            </section>

        </div>
    );
}

export default Lankaran;
