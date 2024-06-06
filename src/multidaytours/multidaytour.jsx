import cityData from '../../cities.json';
import '../multidaytours/multidaytour.css';
import momuna from '../assets/mominakhatun.png';
import { RiArrowDownSLine } from "react-icons/ri";
import { FaArrowRightLong } from "react-icons/fa6";
import HEADER from '../components/header/header.jsx';
import React, { useState, useEffect, useRef } from 'react';
import WAPI from '../components/weatherapi/weatherapi.jsx'
import SEARCH from '../components/search/search.jsx'


function onedaytour() {
    const dropdownRefUp = useRef(null);
    const [tours, setTours] = useState([]);
    const [cityLi, setCityLi] = useState('Choose City');
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

    useEffect(() => {
        const fetchTours = async () => {
            try {
                const response = await fetch('../../../multidaytours.json');
                const data = await response.json();
                setTours(data);
            } catch (error) {
                // console.error('Error fetching the tours data:', error);
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

            <section className="sectionsecondonedaytour">

                <h1>Multi-day tours</h1>
                <div className="singledaytoursdiv">
                    {tours.map((tour, index) => (
                        <div className="tourone" key={index}>
                            <div className="touroneimgdiv">
                                <img src={tour.imgSrc} className="touroneimg" alt={tour.title} />
                            </div>
                            <div className="touronediv">
                                <h1>{tour.title}</h1>
                                <p>{tour.description}</p>
                                <button className="learn-more" id='learn-more'>
                                    <span className="circle" aria-hidden="true">
                                        <span className="icon arrow"></span>
                                    </span>
                                    <span className="button-text" id='button-text'>Check</span>
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            <SEARCH />
        </div>
    )
}

export default onedaytour