import React, { useState, useEffect } from 'react';
import axios from 'axios';
import TEMP from '../temprature/temprature.jsx';

function WeatherAPI() {
    const [errorMessage, setErrorMessage] = useState('');
    const [cityInput, setCityInput] = useState('');
    const [weatherData, setWeatherData] = useState(null);
    const [cityWeatherFetched, setCityWeatherFetched] = useState(false);

    const [bakuWeather, setBakuWeather] = useState({
        city: '',
        country: '',
        celcius: '',
        wind: '',
        icon: '',
        fahren: ''
    });

    const [ganjaWeather, setGanjaWeather] = useState({
        icon: '',
        wind: '',
        city: '',
        celcius: '',
        country: '',
        fahren: ''
    });

    useEffect(() => {
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
                    fahren: data.current.condition.text,
                });
            } catch (error) {
                console.error('Error fetching weather data for Baku:', error);
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
                    icon: data.current.condition.icon,
                });
            } catch (error) {
                console.error('Error fetching weather data for Ganja:', error);
            }
        };

        fetchBakuWeather();
        fetchGanjaWeather();
    }, []);

    const handleCityFormSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await axios.get(`https://api.weatherapi.com/v1/current.json?key=4c8f79d84e4841f4b9c110121242305&q=${cityInput}`);
            const data = response.data;

            setErrorMessage('');
            setWeatherData({
                city: data.location.name,
                country: data.location.country,
                celcius: data.current.temp_c,
                fahren: data.current.condition.text,
                wind: data.current.wind_kph,
                icon: data.current.condition.icon,
            });
            setCityWeatherFetched(true);
        } catch (error) {
            setErrorMessage('Please enter a correct city.');
            setWeatherData(null);
            setCityWeatherFetched(false);
        } finally {
            setCityInput('');
        }
    };

    return (
        <section className="sectionweatherinfo frmnpg">
            
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

                <div className="infodos">
                    <TEMP
                        temperature={ganjaWeather.celcius}
                        wind={ganjaWeather.wind}
                        location={`${ganjaWeather.city}, ${ganjaWeather.country}`}
                        weather={ganjaWeather.fahren}
                        icon={ganjaWeather.icon}
                    />
                </div>

                <div className="infotres">
                    {(!cityWeatherFetched && !errorMessage) && (
                        <p>Check your city here</p>
                    )}

                    {errorMessage && (
                        <p className='errormsg'>{errorMessage}</p>
                    )}

                    {cityWeatherFetched && weatherData && (
                        <TEMP
                            temperature={weatherData.celcius}
                            wind={weatherData.wind}
                            location={`${weatherData.city}, ${weatherData.country}`}
                            weather={weatherData.fahren}
                            icon={weatherData.icon}
                        />
                    )}
                </div>

            </div>

            <form className="form" onSubmit={handleCityFormSubmit}>
                <button>
                    <svg width="17" height="16" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 16" role="img" aria-labelledby="search">
                        <path d="M7.667 12.667A5.333 5.333 0 107.667 2a5.333 5.333 0 000 10.667zM14.334 14l-2.9-2.9" stroke="currentColor" strokeWidth="1.333" strokeLinecap="round" strokeLinejoin="round"></path>
                    </svg>
                </button>
                <input className="input" value={cityInput} onChange={(e) => setCityInput(e.target.value)} placeholder="Enter City Name" required type="text" />
                <button className="reset" type="reset">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12"></path>
                    </svg>
                </button>
                <button id="btnwdth" type="submit">Get Weather</button>
            </form>
        </section>
    );
}

export default WeatherAPI;
