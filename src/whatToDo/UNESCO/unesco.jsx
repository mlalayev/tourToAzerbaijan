import logo from '../../assets/logo.svg';
import { RxHamburgerMenu } from "react-icons/rx";
import React, { useState, useEffect, useRef } from 'react';
import ImageSlider from '../../components/imageSlider/imageSlider.jsx';
import { useTranslation } from 'react-i18next';
import { IoLanguageSharp } from "react-icons/io5";
import { RiArrowDownSLine } from "react-icons/ri";

import az from '../../assets/az.svg'
import gb from '../../assets/gb.svg'
import ru from '../../assets/ru.svg'
import de from '../../assets/de.svg'

function UNESCO() {

  const { t, i18n } = useTranslation();

  const [slides, setSlides] = useState([]);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [langMenuOpen, setLangMenuOpen] = useState(false);


  const handleLangButtonClick = () => {
    setLangMenuOpen(!langMenuOpen);
  };



  useEffect(() => {
    const handleClickOutside = (event) => {
      const langButton = document.querySelector('.lang');
      const langMenu = document.querySelector('.language-menu');
      const hamdiv = document.querySelector('.hamdiv');

      if (langButton && langMenu && !langButton.contains(event.target) && !langMenu.contains(event.target)) {
        setLangMenuOpen(false);
      }
      if (hamdiv && !hamdiv.contains(event.target)) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    setLangMenuOpen(false); // Close the menu after selecting a language
  };

  const dropdownRefUp = useRef(null);
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
        const response = await fetch('../../../UNESCO.json');
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
          <a href="/home"><img src={logo} className="plogo logo" alt="Logo" /></a>

          <ul className="headerul destnul">
            <li><a href="/mltdytrs">{t('header.multiDayTours')}</a></li>
            <li><a href="/sngldytrips">{t('header.dayTrips')}</a></li>
            <li><a href="/dstntns">{t('header.destinations')}</a></li>
            <li><a href="https://www.evisa.gov.az/en/" target="_blank">{t('header.visaInformations')}</a></li>
          </ul>

          <div className="language-switcher" id='sliderlangmenu'>
            <button className="lang" onClick={handleLangButtonClick}>
              <IoLanguageSharp size={20} color='white' />
              <RiArrowDownSLine size={20} color='white'
               className={langMenuOpen ? 'rotated' : 'm'} />
            </button>
            {langMenuOpen && (
              <ul className="language-menu" id='language-menu'>
                <li onClick={() => changeLanguage('en')}><img src={gb} className='flag' /> English</li>
                <li onClick={() => changeLanguage('az')}><img src={az} className='flag' />Azərbaycan</li>
                <li onClick={() => changeLanguage('ru')}><img src={ru} className='flag' /> Русский</li>
                <li onClick={() => changeLanguage('ge')}><img src={de} className='flag' /> German</li>
              </ul>
            )}
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

        {slides.length > 0 ? <ImageSlider slides={slides} /> : <p>Loading...</p>}

      </section>

    </div>
  );
}

export default UNESCO;