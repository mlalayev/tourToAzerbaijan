import React, { useState, useEffect } from 'react';
import './header.css';
import logo from '../../assets/logo.svg';
import { RxHamburgerMenu } from "react-icons/rx";
import { IoLanguageSharp } from "react-icons/io5";
import { RiArrowDownSLine } from "react-icons/ri";
import { useTranslation } from 'react-i18next';
import az from '../../assets/az.svg'
import gb from '../../assets/gb.svg'
import ru from '../../assets/ru.svg'
import de from '../../assets/de.svg'

function Header() {


    const { t, i18n } = useTranslation();

    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [langMenuOpen, setLangMenuOpen] = useState(false);

    const handleLangButtonClick = () => {
        setLangMenuOpen(!langMenuOpen);
    };

    const handleHamburgerClick = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    useEffect(() => {
        const body = document.body;
        const selectedLanguage = i18n.language; // Get the selected language from i18n
        if (selectedLanguage === 'ru') {
            body.style.fontFamily = "Arial-RU";
        }
    }, [i18n.language]); // Run this effect whenever the language changes

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
        setLangMenuOpen(false); // Close the menu after selecting a language
    };

    return (
        <header>
            <div className="container">
                <a href="/home"><img src={logo} className="logo" alt={t('header.logoAlt')} /></a>

                <ul className="headerul">
                    <li><a href="/mltdytrs">{t('header.multiDayTours')}</a></li>
                    <li><a href="/sngldytrips">{t('header.dayTrips')}</a></li>
                    <li><a href="/dstntns">{t('header.destinations')}</a></li>
                    <li><a href="https://www.evisa.gov.az/en/" target="_blank">{t('header.visaInformations')}</a></li>
                </ul>

                <div className="rghtbtnsdv">
                    <div className="language-switcher">
                        <button className="lang" onClick={handleLangButtonClick}>
                            <IoLanguageSharp size={20} />
                            <RiArrowDownSLine size={20}
                                className={langMenuOpen ? 'rotated' : 'm'} />
                        </button>
                        {langMenuOpen && (
                            <ul className="language-menu">
                                <li onClick={() => changeLanguage('en')}><img src={gb} className='flag'alt='flag' /> English</li>
                                <li onClick={() => changeLanguage('az')}><img src={az} className='flag'alt='flag' />Azərbaycan</li>
                                <li onClick={() => changeLanguage('ru')}><img src={ru} className='flag'alt='flag' /> Русский</li>
                                <li onClick={() => changeLanguage('ge')}><img src={de} className='flag'alt='flag' /> German</li>
                            </ul>
                        )}
                    </div>
                    <button className="chcktbtn">{t('header.checkout')}</button>
                </div>

                <div className="hamdiv" onClick={handleHamburgerClick}>
                    <RxHamburgerMenu className="hamburger" size={20} color="black" />
                </div>
            </div>

            {isMenuOpen && (
                <div className="hamburger-menu">
                    <ul>
                        <li><a href="/mltdytrs">{t('header.multiDayTours')}</a></li>
                        <li><a href="/sngldytrips">{t('header.dayTrips')}</a></li>
                        <li><a href="/dstntns">{t('header.destinations')}</a></li>
                        <li><a href="https://www.evisa.gov.az/en/" target="_blank">{t('header.visaInformations')}</a></li>
                    </ul>
                </div>
            )}
        </header>
    );
}

export default Header;