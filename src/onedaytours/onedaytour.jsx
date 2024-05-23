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


    const [tours, setTours] = useState([]);

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


        setLoading(true);
        setTimeout(() => {
            fetchTours();
            setLoading(false);
        }, 2000);

    }, []);

    const [loading, setLoading] = useState(false)


    if (loading) {
        return (
            <div className="loadingscreen">
                <svg class="pl" viewBox="0 0 160 160" width="160px" height="160px" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                        <linearGradient id="grad" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="0%" stop-color="#000"></stop>
                            <stop offset="100%" stop-color="#fff"></stop>
                        </linearGradient>
                        <mask id="mask1">
                            <rect x="0" y="0" width="160" height="160" fill="url(#grad)"></rect>
                        </mask>
                        <mask id="mask2">
                            <rect x="28" y="28" width="104" height="104" fill="url(#grad)"></rect>
                        </mask>
                    </defs>

                    <g>
                        <g class="pl__ring-rotate">
                            <circle class="pl__ring-stroke" cx="80" cy="80" r="72" fill="none" stroke="hsl(223,90%,55%)" stroke-width="16" stroke-dasharray="452.39 452.39" stroke-dashoffset="452" stroke-linecap="round" transform="rotate(-45,80,80)"></circle>
                        </g>
                    </g>
                    <g mask="url(#mask1)">
                        <g class="pl__ring-rotate">
                            <circle class="pl__ring-stroke" cx="80" cy="80" r="72" fill="none" stroke="hsl(193,90%,55%)" stroke-width="16" stroke-dasharray="452.39 452.39" stroke-dashoffset="452" stroke-linecap="round" transform="rotate(-45,80,80)"></circle>
                        </g>
                    </g>

                    <g>
                        <g stroke-width="4" stroke-dasharray="12 12" stroke-dashoffset="12" stroke-linecap="round" transform="translate(80,80)">
                            <polyline class="pl__tick" stroke="hsl(223,10%,90%)" points="0,2 0,14" transform="rotate(-135,0,0) translate(0,40)"></polyline>
                            <polyline class="pl__tick" stroke="hsl(223,10%,90%)" points="0,2 0,14" transform="rotate(-90,0,0) translate(0,40)"></polyline>
                            <polyline class="pl__tick" stroke="hsl(223,10%,90%)" points="0,2 0,14" transform="rotate(-45,0,0) translate(0,40)"></polyline>
                            <polyline class="pl__tick" stroke="hsl(223,10%,90%)" points="0,2 0,14" transform="rotate(0,0,0) translate(0,40)"></polyline>
                            <polyline class="pl__tick" stroke="hsl(223,10%,90%)" points="0,2 0,14" transform="rotate(45,0,0) translate(0,40)"></polyline>
                            <polyline class="pl__tick" stroke="hsl(223,10%,90%)" points="0,2 0,14" transform="rotate(90,0,0) translate(0,40)"></polyline>
                            <polyline class="pl__tick" stroke="hsl(223,10%,90%)" points="0,2 0,14" transform="rotate(135,0,0) translate(0,40)"></polyline>
                            <polyline class="pl__tick" stroke="hsl(223,10%,90%)" points="0,2 0,14" transform="rotate(180,0,0) translate(0,40)"></polyline>
                        </g>
                    </g>
                    <g mask="url(#mask1)">
                        <g stroke-width="4" stroke-dasharray="12 12" stroke-dashoffset="12" stroke-linecap="round" transform="translate(80,80)">
                            <polyline class="pl__tick" stroke="hsl(223,90%,80%)" points="0,2 0,14" transform="rotate(-135,0,0) translate(0,40)"></polyline>
                            <polyline class="pl__tick" stroke="hsl(223,90%,80%)" points="0,2 0,14" transform="rotate(-90,0,0) translate(0,40)"></polyline>
                            <polyline class="pl__tick" stroke="hsl(223,90%,80%)" points="0,2 0,14" transform="rotate(-45,0,0) translate(0,40)"></polyline>
                            <polyline class="pl__tick" stroke="hsl(223,90%,80%)" points="0,2 0,14" transform="rotate(0,0,0) translate(0,40)"></polyline>
                            <polyline class="pl__tick" stroke="hsl(223,90%,80%)" points="0,2 0,14" transform="rotate(45,0,0) translate(0,40)"></polyline>
                            <polyline class="pl__tick" stroke="hsl(223,90%,80%)" points="0,2 0,14" transform="rotate(90,0,0) translate(0,40)"></polyline>
                            <polyline class="pl__tick" stroke="hsl(223,90%,80%)" points="0,2 0,14" transform="rotate(135,0,0) translate(0,40)"></polyline>
                            <polyline class="pl__tick" stroke="hsl(223,90%,80%)" points="0,2 0,14" transform="rotate(180,0,0) translate(0,40)"></polyline>
                        </g>
                    </g>

                    <g>
                        <g transform="translate(64,28)">
                            <g class="pl__arrows" transform="rotate(45,16,52)">
                                <path fill="hsl(3,90%,55%)" d="M17.998,1.506l13.892,43.594c.455,1.426-.56,2.899-1.998,2.899H2.108c-1.437,0-2.452-1.473-1.998-2.899L14.002,1.506c.64-2.008,3.356-2.008,3.996,0Z"></path>
                                <path fill="hsl(223,10%,90%)" d="M14.009,102.499L.109,58.889c-.453-1.421,.559-2.889,1.991-2.889H29.899c1.433,0,2.444,1.468,1.991,2.889l-13.899,43.61c-.638,2.001-3.345,2.001-3.983,0Z"></path>
                            </g>
                        </g>
                    </g>
                    <g mask="url(#mask2)">
                        <g transform="translate(64,28)">
                            <g class="pl__arrows" transform="rotate(45,16,52)">
                                <path fill="hsl(333,90%,55%)" d="M17.998,1.506l13.892,43.594c.455,1.426-.56,2.899-1.998,2.899H2.108c-1.437,0-2.452-1.473-1.998-2.899L14.002,1.506c.64-2.008,3.356-2.008,3.996,0Z"></path>
                                <path fill="hsl(223,90%,80%)" d="M14.009,102.499L.109,58.889c-.453-1.421,.559-2.889,1.991-2.889H29.899c1.433,0,2.444,1.468,1.991,2.889l-13.899,43.61c-.638,2.001-3.345,2.001-3.983,0Z"></path>
                            </g>
                        </g>
                    </g>
                </svg>
            </div>
        );
    }


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