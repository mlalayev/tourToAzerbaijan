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



function onedaytour() {
    const [cityLi, setCityLi] = useState('Choose City');
    const dropdownRefUp = useRef(null);
    const [isRotatedUp, setIsRotatedUp] = useState(false);
    const [isRotatedDown, setIsRotatedDown] = useState(false);

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

    useEffect(() => {
        const handleOutsideClickUp = handleClickOutside(dropdownRefUp, setIsRotatedUp);

        document.addEventListener('mousedown', handleOutsideClickUp);

        return () => {
            document.removeEventListener('mousedown', handleOutsideClickUp);
        };
    }, []);

    const handleClickUp = () => {
        setIsRotatedUp(!isRotatedUp);
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

        fetchTours();
    }, []);


    const [tours, setTours] = useState([]);


    return (
        <>

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
                    <div className="citychoose">

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
        </>
    )
}

export default onedaytour