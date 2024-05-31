import '../baku/baku.css'
import logo from '../../assets/logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel';
import { RxHamburgerMenu } from "react-icons/rx";
import React, { useState, useEffect, useRef } from 'react';

function Gusar() {

  const [index, setIndex] = useState(0);
  const [slides, setSlides] = useState([]);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isRotatedUp, setIsRotatedUp] = useState(false);

  const dropdownRefUp = useRef(null);
  const menuRef = useRef(null);

  const handleSelect = (selectedIndex) => setIndex(selectedIndex);

  const handleClickOutside = (ref, setFunction) => (event) => {
    if (ref.current && !ref.current.contains(event.target)) {
      setFunction(false);
    }
  };

  const handleHamburgerClick = () => setIsMenuOpen(!isMenuOpen);

  useEffect(() => {
    const fetchSlides = async () => {
      try {
        const response = await fetch('../../../slidershamakhy.json');
        const data = await response.json();
        setSlides(data);
      } catch (error) {
        console.error('Error fetching the slides data:', error);
      }
    };

    fetchSlides();
  }, []);


  useEffect(() => {
    const handleOutsideClick = handleClickOutside(dropdownRefUp, setIsRotatedUp);
    document.addEventListener('mousedown', handleOutsideClick);
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
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
          <a href="/home"><img src={logo} className="plogo logo" alt="Logo" /></a>

          <ul className="headerul destnul">
            <li><a href="/mltdytrs">Multi-day tours</a></li>
            <li><a href="/sngldytrips">Day trips</a></li>
            <li><a href="/dstntns">Destinations</a></li>
            <li><a href="https://www.evisa.gov.az/en/" target="_blank">Visa informations</a></li>
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
              <li><a href="https://www.evisa.gov.az/en/" target="_blank">Visa informations</a></li>
            </ul>
          </div>
        )}
      </header>

      <section className="sectionslider">
        <Carousel activeIndex={index} onSelect={handleSelect}>
          {slides.map((slide, idx) => (
            <Carousel.Item key={idx}>
              <img src={slide.image} className='murad' alt={`Slide ${idx + 1}`} />
              <Carousel.Caption>
                <div className="textholder">
                  <h3>{slide.title}</h3>
                  <p>{slide.caption}</p>
                </div>
              </Carousel.Caption>
            </Carousel.Item>
          ))}
        </Carousel>
      </section>

    </div>
  );
}

export default Gusar;
