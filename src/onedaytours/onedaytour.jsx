import { RiArrowDownSLine } from "react-icons/ri";
import React, { useState, useEffect, useRef } from 'react';
import { FaArrowRightLong } from "react-icons/fa6";
import cityTour from '../../tourtype.json';
import cityData from '../../cities.json';
import citiesData from '../../cityinfosectionfifth.json';
import maidentower from '../assets/maidentower.png'
import HEADER from '../components/header/header.jsx'
import '../onedaytours/onedaytours.css'
// import shahdag from '../assets/shahdag.jpg'
import tourtwo from '../assets/zernavabridge.jpg'
import tourthree from '../assets/masalliistisu.jpg'
import axios from 'axios';



function onedaytour() {
    const dropdownRefUp = useRef(null);
    const [tours, setTours] = useState([]);
    const [cityInput, setCityInput] = useState('');
    const [cityLi, setCityLi] = useState('Choose City');
    const [weatherData, setWeatherData] = useState(null);
    const [isRotatedUp, setIsRotatedUp] = useState(false);

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

    const handleCityInputChange = (event) => {
        setCityInput(event.target.value);
    };

    const handleCityFormSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await axios.get(`https://api.weatherapi.com/v1/current.json?key=4c8f79d84e4841f4b9c110121242305&q=${cityInput}`);
            setWeatherData(response.data);
            console.log(response.data);
        } catch (error) {
            console.error('Error fetching weather data:', error);
        }
    };

    useEffect(() => {
        const fetchTours = async () => {
            try {
                const response = await fetch('../../../singledaytours.json');
                const data = await response.json();
                setTours(data);
            } catch (error) {
                console.error('Error fetching the tours data:', error);
            }
        };

        const fetchWeatherData = async () => {
            try {
                const response = await axios.get(`https://api.weatherapi.com/v1/current.json?key=4c8f79d84e4841f4b9c110121242305&q=Azerbaijan`);
                setWeatherData(response.data);
                console.log(response.data);
            } catch (error) {
                console.error('Error fetching weather data:', error);
            }
        };

        fetchTours();
        fetchWeatherData();

    }, []);

    useEffect(() => {
        const handleOutsideClickUp = handleClickOutside(dropdownRefUp, setIsRotatedUp);

        document.addEventListener('mousedown', handleOutsideClickUp);

        return () => {
            document.removeEventListener('mousedown', handleOutsideClickUp);
        };
    }, []);

    return (
        <div className="body">

            <div className="upperpart">

                <HEADER />

                <div className="containerupr">


                    <div className="txtprt">

                        <div className="txtprtrtra">
                            <h1 className='txtprtfrsth'>Which city will you
                            </h1>
                            <h1 className='txtprtscndh'>explore with us<span className='yellow'>?</span></h1>

                            <p className='txtprtp'>Here you can book excursions and one-day tours without buying a package. You can combine these short tours to create your unique itinerary.</p>
                        </div>

                        <div className="mainpicprt">
                            <img src={maidentower} className='main maiden' />
                        </div>
                    </div>
                </div>
            </div>


            <section className="sectionfirst onedaytourcitychoose">
                <div className="containerfrstsc">
                    <div className="citychoose onedaytourcitychoose">

                        <div className="leftbuttons">
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

            <section className="sectionsecondonedaytour">


                <form onSubmit={handleCityFormSubmit}>
                    <div className="input-container">
                        <input type="text" name="text" className="input" value={cityInput} onChange={handleCityInputChange} placeholder="Enter City Name" />
                        <span className="iconinput">
                            <svg width="19px" height="19px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path opacity="1" d="M14 5H20" stroke="#000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path> <path opacity="1" d="M14 8H17" stroke="#000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path> <path d="M21 11.5C21 16.75 16.75 21 11.5 21C6.25 21 2 16.75 2 11.5C2 6.25 6.25 2 11.5 2" stroke="#000" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"></path> <path opacity="1" d="M22 22L20 20" stroke="#000" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round"></path> </g></svg>
                        </span>
                        <button type="submit">Get Weather</button>
                    </div>

                    {/* <div className="tempinfo">
                        <h1>{city}</h1>
                        <h1>{country}</h1>
                        <p>{celci}</p>
                        <p>{fahren}</p>
                    </div> */}
                </form>


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
                                <button className="cta">
                                    <span>Hover me</span>
                                    <svg width="15px" height="10px" viewBox="0 0 13 10">
                                        <path d="M1,5 L11,5"></path>
                                        <polyline points="8 1 12 5 8 9"></polyline>
                                    </svg>
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    )
}

export default onedaytour