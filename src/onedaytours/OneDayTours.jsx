import '../OneDayTours/OneDayTours.css';
import cityData from '../../Cities.json';
import { FaArrowRight } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { RiArrowDownSLine } from 'react-icons/ri';
import maidentower from '../Assets/maidentower.png';
import HEADER from '../Components/Header/Header.jsx';
import SEARCH from '../Components/Search/Search.jsx';
import WAPI from '../Components/WeatherAPI/WeatherAPI.jsx';
import React, { useState, useEffect, useRef } from 'react';


function onedaytour() {
    const dropdownRefUp = useRef(null);
    const [tours, setTours] = useState([]);
    const [cityLi, setCityLi] = useState('Choose City');
    const [isRotatedUp, setIsRotatedUp] = useState(false);
    const navigate = useNavigate();

    const { t, i18n } = useTranslation();


    const handleCityChangeLi = (cityName) => {
        const cityList = cityData.cities.find((city) => city.cityLi === cityName);
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
        const fetchTours = async () => {
            try {
                const response = await fetch('../../../SingleDayTours.json');
                const data = await response.json();
                setTours(data);
            } catch (error) {
                console.error('Error fetching the tours data:', error);
            }
        };

        fetchTours();
    }, []);

    useEffect(() => {
        const handleOutsideClickUp = handleClickOutside(dropdownRefUp, setIsRotatedUp);
        document.addEventListener('mousedown', handleOutsideClickUp);

        return () => {
            document.removeEventListener('mousedown', handleOutsideClickUp);
        };
    }, []);

    const handleButtonClick = (path) => {
        navigate(path);
    };

    return (
        <div className="body">
            <div className="upper-part">
                <HEADER />
                <div className="container-upr">
                    <div className="text-part">
                        <div className="text-part-ra">
                            <h1 className="text-part-firsth">{t('onedaytours.title')}</h1>
                            <h1 className="text-part-secondh">
                            {t('onedaytours.titletwo')}<span className="yellow"> {t('onedaytours.titleicon')}</span>
                            </h1>
                            <p className="text-partp">{t('onedaytours.titlethree')}
                                
                            </p>
                        </div>
                        <div className="main-pic-part">
                            <img src={maidentower} className="main-maiden" alt="Maiden Tower" />
                        </div>
                    </div>
                </div>
            </div>

            <section className="section-first">
                <div className="container-first">
                    <div className="city-choose">
                        <div className="left-button">
                            <div
                                ref={dropdownRefUp}
                                onClick={handleClickUp}
                                className={`lftlftbtndrpdwnn ${isRotatedUp ? 'lftlftbtndrpdwnactive' : ''
                                    }`}
                            >
                                {cityLi}{' '}
                                <RiArrowDownSLine
                                    strokeWidth={2}
                                    style={{
                                        transform: isRotatedUp ? 'rotate(180deg)' : 'none',
                                    }}
                                />
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
                            <span>
                                Find Tours ! <FaArrowRight />
                            </span>
                        </div>
                    </div>
                </div>
            </section>

            <WAPI />

            <section className="sectionsecondonedaytour">
                <h1>Single-day tours</h1>
                <div className="singledaytoursdiv">
                    {tours.map((tour, index) => (
                        <div className="tourone" key={index}>
                            <div className="touroneimgdiv">
                                <img src={tour.imgSrc} className="touroneimg" alt={tour.title} />
                            </div>
                            <div className="touronediv">
                                <h1>{tour.title}</h1>
                                <p>{tour.description}</p>
                                <button className="learn-more" id='learn-more' onClick={() => handleButtonClick(tour.path)}>
                                    <span className="circle" aria-hidden="true">
                                        <span className="icon arrow"></span>
                                    </span>
                                    <span className="button-text">Check</span>
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            <SEARCH />
        </div>
    );
}

export default onedaytour;


