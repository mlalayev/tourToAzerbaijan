import axios from 'axios';
import cityData from '../../cities.json';
import '../onedaytours/onedaytours.css';
import { RiArrowDownSLine } from "react-icons/ri";
import { FaArrowRightLong } from "react-icons/fa6";
import maidentower from '../assets/maidentower.png';
import HEADER from '../components/header/header.jsx';
import React, { useState, useEffect, useRef } from 'react';
import TEMP from '../components/temprature/temprature.jsx';



function onedaytour() {
    const dropdownRefUp = useRef(null);
    const [city, setCity] = useState('');
    const [wind, setWind] = useState('');
    const [tours, setTours] = useState([]);
    const [fahren, setFahren] = useState('');
    const [country, setCountry] = useState('');
    const [celcius, setCelcius] = useState('');
    const [cityInput, setCityInput] = useState('');
    const [weatherIcon, setWeatherIcon] = useState('');
    const [cityLi, setCityLi] = useState('Choose City');
    const [errorMessage, setErrorMessage] = useState(''); 
    const [weatherData, setWeatherData] = useState(null);
    const [isRotatedUp, setIsRotatedUp] = useState(false);

    const [bakuWeather, setBakuWeather] = useState({
        city: '',
        icon: '',
        wind: '',
        country: '',
        celcius: ''
    });

    const [ganjaWeather, setGanjaWeather] = useState({
        city: '',
        wind: '',
        icon: '',
        celcius: '',
        country: ''
    })



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
            const data = response.data;

            setErrorMessage('');

            setWeatherData(data);
            setCity(data.location.name);
            setWind(data.current.wind_kph);
            setCelcius(data.current.temp_c);
            setCountry(data.location.country);
            setFahren(data.current.condition.text);
            setWeatherIcon(data.current.condition.icon);
        } catch (error) {
            setErrorMessage('Please enter a correct city.');
            setWeatherData(null);
            // console.error('Error fetching weather data:', error);
        }
    };

    useEffect(() => {
        const fetchTours = async () => {
            try {
                const response = await fetch('../../../singledaytours.json');
                const data = await response.json();
                setTours(data);
            } catch (error) {
                // console.error('Error fetching the tours data:', error);
            }
        };

        const fetchBakuWeather = async () => {
            try {
                const response = await axios.get(`https://api.weatherapi.com/v1/current.json?key=4c8f79d84e4841f4b9c110121242305&q=Baku`);
                const data = response.data;
                setBakuWeather({
                    city: data.location.name,
                    wind: data.current.wind_kph,
                    celcius: data.current.temp_c,
                    country: data.location.country,
                    icon: data.current.condition.icon,
                    fahren: data.current.condition.text
                });
                // console.log(data);
            } catch (error) {
                // console.error('Error fetching weather data for Baku:', error);
            }
        };

        const fetchGanjaWeather = async () => {
            try {
                const response = await axios.get(`https://api.weatherapi.com/v1/current.json?key=4c8f79d84e4841f4b9c110121242305&q=Ganja`);
                const data = response.data;
                setGanjaWeather({
                    city: data.location.name,
                    country: data.location.country,
                    celcius: data.current.temp_c,
                    fahren: data.current.condition.text,
                    wind: data.current.wind_kph,
                    icon: data.current.condition.icon
                });
                // console.log(data);
            } catch (error) {
                // console.error('Error fetching weather data for Baku:', error);
            }
        };

        const fetchWeatherData = async () => {
            try {
                const response = await axios.get(`https://api.weatherapi.com/v1/current.json?key=4c8f79d84e4841f4b9c110121242305&q=Azerbaijan`);
                setWeatherData(response.data);
                // console.log(response.data);
            } catch (error) {
                // console.error('Error fetching weather data:', error);
            }
        };

        fetchTours();
        fetchWeatherData();
        fetchBakuWeather();
        fetchGanjaWeather();

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

            <section className="sectionweatherinfo">
                <div className="weatherinfo">

                    <div className="infouno">

                        <TEMP
                            temperature={bakuWeather.celcius}
                            wind={bakuWeather.wind}
                            location={`${bakuWeather.city}, ${bakuWeather.country}`}
                            weather={bakuWeather.fahren}
                            icon={bakuWeather.icon}
                        />

                    </div>

                    {errorMessage && <p className='errormsg'>{errorMessage}</p>}
                    <div className="infotres" style={{ display: city ? 'block' : 'none' }}>
                        {weatherData && (
                            <TEMP
                                temperature={celcius}
                                wind={wind}
                                location={`${city}, ${country}`}
                                weather={fahren}
                                icon={weatherIcon}
                            />
                        )}
                    </div>

                    <div className="infodos">

                        <TEMP
                            temperature={ganjaWeather.celcius}
                            wind={ganjaWeather.wind}
                            location={`${ganjaWeather.city}, ${ganjaWeather.country}`}
                            weather={ganjaWeather.fahren}
                            icon={ganjaWeather.icon}
                        />

                    </div>
                </div>

                <form className="form" onSubmit={handleCityFormSubmit}>
                    <button>
                        <svg width="17" height="16" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 16" role="img" aria-labelledby="search">
                            <path d="M7.667 12.667A5.333 5.333 0 107.667 2a5.333 5.333 0 000 10.667zM14.334 14l-2.9-2.9" stroke="currentColor" strokeWidth="1.333" strokeLinecap="round" strokeLinejoin="round"></path>
                        </svg>
                    </button>
                    <input className="input" value={cityInput} onChange={handleCityInputChange} placeholder="Enter City Name" required type="text" />
                    <button className="reset" type="reset">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12"></path>
                        </svg>
                    </button>
                    <button id="btnwdth" type="submit">Get Weather</button>
                </form>
            </section>

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