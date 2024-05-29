import cityData from '../../cities.json';
import '../destinations/destinations.css';
import { useNavigate } from 'react-router-dom';
import momuna from '../assets/mominakhatun.png';
import { RiArrowDownSLine } from "react-icons/ri";
import { FaArrowRightLong } from "react-icons/fa6";
import HEADER from '../components/header/header.jsx';
import WAPI from '../components/weatherapi/weatherapi.jsx';
import React, { useState, useEffect, useRef } from 'react';



function destinations() {
    const dropdownRefUp = useRef(null);
    const [cityLi, setCityLi] = useState('Choose City');
    const [destinations, setDestinations] = useState([]);
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
        const fetchDestinations = async () => {
            try {
                const response = await fetch('../../destinations.json');
                const data = await response.json();
                setDestinations(data);
            } catch (error) {
                console.error('Error fetching the tours data:', error);
            }
        };

        fetchDestinations();
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

            <section className="section-info">
                {destinations.map((item, index) => (
                    <div key={index} className='infoholder'>
                        <div className="infoholder-img">
                            {item.isRecommended && (
                                <button className="custom-button">
                                    <span className="custom-button-text">Recommended</span>
                                    <div className="tooltip-container">
                                        <div className="tooltip-content">
                                            <div className="tooltip-box">
                                                <p>This city is recommended by the author!</p>
                                            </div>
                                            <div className="tooltip-arrow"></div>
                                        </div>
                                    </div>
                                </button>
                            )}
                            <img src={item.imgSrc} alt={item.title} className='infoholder-image' />
                        </div>
                        <div className="div-holder">
                            <div className="infoholder-text">
                                <h1>{item.title}</h1>
                                <p>{item.description}</p>
                                <p className='descriptionadd'>{item.descriptiontwo}</p>
                                <strong className='strong'> For further information click the button!</strong>
                            </div>
                            <button className="cta mnpgbtn dstbtn" onClick={() => handleButtonClick(item.path)}>
                                <span>View me</span>
                                <svg width="15px" height="10px" viewBox="0 0 13 10">
                                    <path d="M1,5 L11,5"></path>
                                    <polyline points="8 1 12 5 8 9"></polyline>
                                </svg>
                            </button>
                        </div>
                    </div>
                ))}
            </section>
        </div>
    )
}

export default destinations