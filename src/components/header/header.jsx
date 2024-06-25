import React, { useState, useEffect, useRef } from 'react';
import './header.css';
import logo from '../../assets/logo.svg';
import { RxHamburgerMenu } from "react-icons/rx";
import { IoLanguageSharp } from "react-icons/io5";
import { RiArrowDownSLine } from "react-icons/ri";
import { useTranslation } from 'react-i18next';
import az from '../../assets/az.svg';
import gb from '../../assets/gb.svg';
import ru from '../../assets/ru.svg';
import de from '../../assets/de.svg';

function Header() {
    const { t, i18n } = useTranslation();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [langMenuOpen, setLangMenuOpen] = useState(false);
    const langMenuRef = useRef(null);
    const langButtonRef = useRef(null);

    const handleLangButtonClick = () => {
        setLangMenuOpen((prev) => !prev);
    };

    const handleHamburgerClick = () => {
        setIsMenuOpen((prev) => !prev);
    };

    useEffect(() => {
        const body = document.body;
        const selectedLanguage = i18n.language; // Get the selected language from i18n
        if (selectedLanguage === 'ru') {
            body.style.fontFamily = "Arial-RU";
        }

        // Add event listener to handle clicks outside language menu
        function handleClickOutside(event) {
            if (langMenuRef.current && !langMenuRef.current.contains(event.target) && langButtonRef.current && !langButtonRef.current.contains(event.target)) {
                setLangMenuOpen(false);
            }
        }

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [i18n.language]);

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
        setLangMenuOpen(false);
    };

    return (
        <header>
            <div className="container">
                <a href="/home"><img src={logo} className="logo" alt={t('header.logoAlt')} /></a>

                <ul className="headerul">
                    <li className="dropdown">
                        <a href="/mltdytrs">{t('header.multiDayTours')}</a>
                        <div className="dropdown-menu">
                            <ul className="dropdown-column">
                                <li><a href="/museum">Museum</a></li>
                                <li><a href="/architecture">Architecture</a></li>
                                <li><a href="/lakes">Lakes</a></li>
                                <li><a href="/unesco">UNESCO</a></li>
                                <li><a href="/religious">Religious</a></li>
                                <li><a href="/parks">Parks</a></li>
                            </ul>
                            <ul className="dropdown-column">
                                <li><a href="/hiking">Hiking</a></li>
                                <li><a href="/sports">Entertainment</a></li>
                                <li><a href="/cuisine">Cuisine</a></li>
                                <li><a href="/wineries">Wineries</a></li>
                                <li><a href="/waterfall">Waterfall</a></li>
                                <li><a href="/bazaars">Bazaar</a></li>
                            </ul>
                        </div>
                    </li>
                    <li><a href="/sngldytrips">{t('header.dayTrips')}</a></li>
                    <li className="dropdown">
                        <a href="/dstntns">{t('header.destinations')}</a>
                        <div className="dropdown-menu seconddropdown">
                            <ul className="dropdown-column">
                                <li><a href="/baku">Baku</a></li>
                                <li><a href="/ganja">Ganja</a></li>
                                <li><a href="/guba">Guba</a></li>
                                <li><a href="/gusar">Gusar</a></li>
                                <li><a href="/ismailly">Ismailly</a></li>
                            </ul>
                            <ul className="dropdown-column">
                                <li><a href="/khizi">Khizi</a></li>
                                <li><a href="/lankaran">Lankaran</a></li>
                                <li><a href="/lerik">Lerik</a></li>
                                <li><a href="/shaki">Shaki</a></li>
                                <li><a href="/shamaky">Shamaky</a></li>
                            </ul>
                        </div>
                    </li>
                    <li><a href="https://www.evisa.gov.az/en/" target="_blank">{t('header.visaInformations')}</a></li>
                </ul>

                <div className="rghtbtnsdv">
                    <div className="language-switcher">
                        <button ref={langButtonRef} className="lang" onClick={handleLangButtonClick}>
                            <IoLanguageSharp size={20} />
                            <RiArrowDownSLine size={20} className={langMenuOpen ? 'rotated' : 'm'} />
                        </button>
                        {langMenuOpen && (
                            <ul className="language-menu" ref={langMenuRef}>
                                <li onClick={() => changeLanguage('en')}><img src={gb} className='flag' alt='flag' /> English</li>
                                <li onClick={() => changeLanguage('az')}><img src={az} className='flag' alt='flag' />Azərbaycan</li>
                                <li onClick={() => changeLanguage('ru')}><img src={ru} className='flag' alt='flag' /> Русский</li>
                                <li onClick={() => changeLanguage('ge')}><img src={de} className='flag' alt='flag' /> German</li>
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
