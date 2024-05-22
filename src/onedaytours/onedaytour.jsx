import { RiArrowDownSLine } from "react-icons/ri";
import React, { useState, useEffect, useRef } from 'react';
import { FaArrowRightLong } from "react-icons/fa6";
import cityTour from '../../tourtype.json';
import cityData from '../../cities.json';
import citiesData from '../../cityinfosectionfifth.json';
import maidentower from '../assets/maidentower.png'
import HEADER from '../components/header/header.jsx'
import '../onedaytours/onedaytours.css'
import shahdag from '../assets/shahdag.jpg'
import tourtwo from '../assets/zernavabridge.jpg'
import tourthree from '../assets/masalliistisu.jpg'



function onedaytour() {
    const [cityLi, setCityLi] = useState('Choose City');
    const [tourLi, setTourLi] = useState('Choose Tour');
    const dropdownRefUp = useRef(null);
    const dropdownRefDown = useRef(null);
    const [isRotatedUp, setIsRotatedUp] = useState(false);
    const [isRotatedDown, setIsRotatedDown] = useState(false);

    const handleCityChangeLi = (cityName) => {
        const cityList = cityData.cities.find(city => city.cityLi === cityName);
        if (cityList) {
            setCityLi(cityName);
            setIsRotatedUp(false);
        }
    };

    // const handleTourChangeLi = (tourType) => {
    //     const tourList = cityTour.tourtypes.find(tour => tour.tourtype === tourType);
    //     if (tourList) {
    //         setTourLi(tourType);
    //         setIsRotatedDown(false);
    //     }
    // };

    const handleClickOutside = (ref, setFunction) => (event) => {
        if (ref.current && !ref.current.contains(event.target)) {
            setFunction(false);
        }
    };

    useEffect(() => {
        const handleOutsideClickUp = handleClickOutside(dropdownRefUp, setIsRotatedUp);
        // const handleOutsideClickDown = handleClickOutside(dropdownRefDown, setIsRotatedDown);

        document.addEventListener('mousedown', handleOutsideClickUp);
        // document.addEventListener('mousedown', handleOutsideClickDown);

        return () => {
            document.removeEventListener('mousedown', handleOutsideClickUp);
            // document.removeEventListener('mousedown', handleOutsideClickDown);
        };
    }, []);

    const handleClickUp = () => {
        setIsRotatedUp(!isRotatedUp);
    };

    const handleClickDown = () => {
        setIsRotatedDown(!isRotatedDown);
    };

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
                            <div ref={dropdownRefUp} onClick={handleClickUp} className={`lftlftbtndrpdwn onedaytour ${isRotatedUp ? 'lftlftbtndrpdwnactive' : ''}`}>
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
                    <div className="tourone">
                        <div className="touroneimgdiv">
                            <img src={shahdag} className="touroneimg"/>
                        </div>
                        <div className="touronediv">
                            <h1>Shahdag</h1>
                            <p>Shahdag in Azerbaijan is a premier mountain resort offering year-round outdoor activities and stunning natural scenery.</p>
                            <button>a</button>
                        </div>
                    </div>

                    <div className="tourone">
                        <div className="touroneimgdiv">
                            <img src={tourtwo} className="touroneimg"/>
                        </div>
                        <div className="touronediv">
                            <h1>Shahdag</h1>
                            <p>Shahdag in Azerbaijan is a premier mountain resort offering year-round outdoor activities and stunning natural scenery.</p>
                            <button>a</button>
                        </div>
                    </div>

                    <div className="tourone">
                        <div className="touroneimgdiv">
                            <img src={tourthree} className="touroneimg"/>
                        </div>
                        <div className="touronediv">
                            <h1>Shahdag</h1>
                            <p>Shahdag in Azerbaijan is a premier mountain resort offering year-round outdoor activities and stunning natural scenery.</p>
                            <button>a</button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default onedaytour