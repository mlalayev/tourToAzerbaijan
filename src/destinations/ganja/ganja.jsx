import logo from '../../Assets/logo.svg';
import { useTranslation } from 'react-i18next';
import { RxHamburgerMenu } from "react-icons/rx";
import { IoLanguageSharp } from "react-icons/io5";
import { RiArrowDownSLine } from "react-icons/ri";
import React, { useState, useEffect, useRef } from 'react';
import ImageSlider from '../../Components/ImageSlider/ImageSlider.jsx';

import az from '../../Assets/az.svg';
import gb from '../../Assets/gb.svg';
import ru from '../../Assets/ru.svg';
import de from '../../Assets/de.svg';

function Ganja() {
  const { t, i18n } = useTranslation();

  const [slides, setSlides] = useState([]);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [langMenuOpen, setLangMenuOpen] = useState(false);

  const handleLangButtonClick = () => {
    setLangMenuOpen(!langMenuOpen);
  };

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

  useEffect(() => {
    const fetchSlides = async () => {
      try {
        const response = await fetch('../../../SliderGanja.json');
        const data = await response.json();
        setSlides(data[i18n.language]);
      } catch (error) {
        console.error('Error fetching the slides data:', error);
      }
    };

    fetchSlides();
  }, [i18n.language]);

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
              <RiArrowDownSLine size={20} color='white' className={langMenuOpen ? 'rotated' : 'm'} />
            </button>
            {langMenuOpen && (
              <ul className="language-menu" id='language-menu'>
                <li onClick={() => changeLanguage('en')}><img src={gb} className='flag' alt="English" /> English</li>
                <li onClick={() => changeLanguage('az')}><img src={az} className='flag' alt="Azerbaijani" />Azərbaycan</li>
                <li onClick={() => changeLanguage('ru')}><img src={ru} className='flag' alt="Russian" /> Русский</li>
                <li onClick={() => changeLanguage('ge')}><img src={de} className='flag' alt="German" /> German</li>
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
              <li><a href="/mltdytrs">{t('header.multiDayTours')}</a></li>
              <li><a href="/sngldytrips">{t('header.dayTrips')}</a></li>
              <li><a href="/dstntns">{t('header.destinations')}</a></li>
              <li><a href="https://www.evisa.gov.az/en/" target="_blank">{t('header.visaInformations')}</a></li>
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

export default Ganja;
