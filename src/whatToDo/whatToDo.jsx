import '../WhatToDo/WhatToDo.css';
import cityData from '../../Cities.json';
import cuisine from '../Assets/cuisine.png';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { RiArrowDownSLine } from "react-icons/ri";
import { FaArrowRightLong } from "react-icons/fa6";
import HEADER from '../Components/Header/Header.jsx';
import SEARCH from '../Components/Search/Search.jsx';
import React, { useState, useEffect, useRef } from 'react';
import WAPI from '../Components/WeatherAPI/WeatherAPI.jsx';


function whattodo() {

    const { t } = useTranslation();

    const dropdownRefUp = useRef(null);
    const [cityLi, setCityLi] = useState('Choose City');
    const [whatToDo, setWhatToDo] = useState([]);
    const [isRotatedUp, setIsRotatedUp] = useState(false);
    const navigate = useNavigate();

    const handleButtonClick = (path) => {
        navigate(path);
    };

    const handleCityChangeLi = (cityName) => {
        const cityList = cityData.cities.find(city => city.cityLi === cityName);
        if (cityList) {
            setCityLi(cityName);
            setIsRotatedUp(false);
        }
    };



    const handleClickOutside = (ref, setFunction) => (event) => {
        if (ref.current && !ref.current.contains(event.target)) {
            setFunction(false);
        }
    };

    const handleClickUp = () => {
        setIsRotatedUp(!isRotatedUp);
    };

    useEffect(() => {
        const fetchWhatToDo = async () => {
            try {
                const response = await fetch('../WhatToDo.json');
                const data = await response.json();
                setWhatToDo(data);
            } catch (error) {
                console.error('Error fetching the tours data:', error);
            }
        };

        fetchWhatToDo();
    }, []);

    return (
        <div className="body">
            <div className="upper-part">
                <HEADER />
                <div className="container-upr">


                    <div className="text-part">

                        <div className="text-part-ra">
                            <h1 className='text-part-firsth'>{t('secondupperpart.title')}
                            </h1>
                            <h1 className='text-part-secondh'>{t('secondupperpart.titletwo')}<span className='yellow'>{t('secondupperpart.titleicon')}</span></h1>

                            <p className='text-partp'>{t('secondupperpart.titlethree')}</p>
                        </div>

                        <div className="main-pic-parttwo">
                            <img src={cuisine} className='main-snowboard' />
                        </div>
                    </div>
                </div>
            </div>

            <section className="section-first">
                <div className="container-first">
                    <div className="city-choose">

                        <div className="left-button">
                            <div ref={dropdownRefUp} onClick={handleClickUp} className={`lftlftbtndrpdwnn  ${isRotatedUp ? 'lftlftbtndrpdwnactive' : ''}`}>
                                {cityLi} <RiArrowDownSLine strokeWidth={2} style={{ transform: isRotatedUp ? 'rotate(180deg)' : 'none' }} />
                                <ul className={`lftlftbtndrpdwnul ${isRotatedUp ? 'lftlftbtndrpdwnulactive' : ''}`}>
                                    {cityData.cities.map((city, index) => (
                                        <li key={index} onClick={() => handleCityChangeLi(city.cityLi)}>
                                            {city.cityLi}
                                        </li>
                                    ))}
                                </ul>

                            </div>
                        </div>

                        <div className="checkoutpart">
                            <span>Find Tours ! <FaArrowRightLong /></span>
                        </div>

                    </div>
                </div>
            </section>

            <WAPI />

            <section className="section-info">
                {Object.keys(whatToDo).map((key, index) => {
                    const item = whatToDo[key];
                    return (
                        <div key={index} className='infoholder'>
                            <div className="infoholder-img">
                                {item.isRecommended && (
                                    <button className="custom-button">
                                        <span className="custom-button-text">{t('whatToDo.recommended')}</span>
                                        <div className="tooltip-container">
                                            <div className="tooltip-content">
                                                <div className="tooltip-box">
                                                    <p>{t('whatToDo.recommendedTooltip')}</p>
                                                </div>
                                                <div className="tooltip-arrow"></div>
                                            </div>
                                        </div>
                                    </button>
                                )}
                                <img src={item.imgSrc} alt={item.title} className='infoholder-image' />
                            </div>
                            <div key={index} className='div-holder'>
                                <div className="infoholder-text">
                                    <div className="p-text-holder">
                                        <h1>{t(`whatToDo.${key}.title`)}</h1>
                                        <p className='description'>{t(`whatToDo.${key}.info`)}</p>
                                        <p className='descriptionadd'>{t(`whatToDo.${key}.descriptiontwo`)}</p>
                                    </div>
                                    <div className="btnholdertext">
                                        <strong className='strong'>{t(`whatToDo.${key}.furtherInfo`)}</strong>
                                        <button className="learn-more" id='learn-more' onClick={() => handleButtonClick(item.path)}>
                                            <span className="circle" aria-hidden="true">
                                                <span className="icon arrow"></span>
                                            </span>
                                            <span className="button-text" id='button-text'>{t(`whatToDo.${key}.check`)}</span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>



                    );
                })}
            </section >

            <SEARCH />
        </div >)
}

export default whattodo