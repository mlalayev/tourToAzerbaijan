import '../whatToDo/whatToDo.css';
import cityData from '../../cities.json';
import momuna from '../assets/mominakhatun.png';
import { RiArrowDownSLine } from "react-icons/ri";
import { FaArrowRightLong } from "react-icons/fa6";
import HEADER from '../components/header/header.jsx';
import React, { useState, useEffect, useRef } from 'react';
import WAPI from '../components/weatherapi/weatherapi.jsx'
import SEARCH from '../components/search/search.jsx'
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';


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
                const response = await fetch('../whattodo.json');
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
                            <h1 className='text-part-firsth'>Where do you want
                            </h1>
                            <h1 className='text-part-secondh'>to go<span className='yellow'>?</span></h1>

                            <p className='text-partp'>Here you can book a tour to Baku, Gabala, Sheki, and other amazing cities and regions of Azerbaijan.</p>
                        </div>

                        <div className="main-pic-parttwo">
                            <img src={momuna} className='main-momuna' />
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


            {/* <section className="section-info">
                {whatToDo.map((item, index) => (
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
                                <h1>{t(`whatToDo.${item.title}`)}</h1>
                                <p>{t(`whatToDo.${item.description}`)}</p>
                                <p className='descriptionadd'>{t(`whatToDo.${item.descriptiontwo}`)}</p>
                                <strong className='strong'>{t('whatToDo.furtherInfo')}</strong>
                            </div>
                            <button className="learn-more" id='learn-more'>
                                <span className="circle" aria-hidden="true">
                                    <span className="icon arrow"></span>
                                </span>
                                <span className="button-text" id='button-text'>{t('whatToDo.check')}</span>
                            </button>
                        </div>
                    </div>
                ))}
            </section> */}


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
                                    <h1>{t(`whatToDo.${key}.title`)}</h1>
                                    <p>{t(`whatToDo.${key}.info`)}</p>
                                    {item.descriptiontwo && <p className='descriptionadd'>{t(`whatToDo.${key}.descriptiontwo`)}</p>}
                                    <strong className='strong'>{t(`whatToDo.${key}.furtherInfo`)}</strong>
                                </div>
                                <button className="learn-more" id='learn-more' onClick={() => handleButtonClick(item.path)}>
                                    <span className="circle" aria-hidden="true">
                                        <span className="icon arrow"></span>
                                    </span>
                                    <span className="button-text" id='button-text'>{t(`whatToDo.${key}.check`)}</span>
                                </button>
                            </div>
                        </div>
                    );
                })}
            </section>

            <SEARCH />
        </div >)
}

export default whattodo