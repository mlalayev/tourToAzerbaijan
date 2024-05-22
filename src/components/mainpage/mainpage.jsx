import './mainpage.css';
import { IoMdStar } from "react-icons/io";
import SLIDER from '../sliders/slider.jsx';
import cityData from '../../../cities.json';
import cityTour from '../../../tourtype.json';
import { GrUserManager } from "react-icons/gr";
import { FaAnglesLeft } from "react-icons/fa6";
import { GrCertificate } from "react-icons/gr";
import { FaAnglesRight } from "react-icons/fa6";
import sliderdos from '../../assets/slider2.jpg';
import { RiArrowDownSLine } from "react-icons/ri";
import slideruno from '../../assets/slider1.jpeg';
import { FaArrowRightLong } from "react-icons/fa6";
import slidersessi from '../../assets/slider6quba.jpg';
import slidertres from '../../assets/slider3qabala.jpg';
import slidercuatro from '../../assets/slider4lerik.jpg';
import sliderseptini from '../../assets/slider7shusha.jpg';
import React, { useState, useEffect, useRef } from 'react';
import { LiaHandHoldingHeartSolid } from "react-icons/lia";
import sliderpierci from '../../assets/slider5lankaran.jpg';
import recommendeduno from '../../assets/recommended-1.png';
import recommendeddos from '../../assets/recommended-2.png';
import citiesData from '../../../cityinfosectionfifth.json';
import recommendedtres from '../../assets/recommended-3.png';
import recommendedpieci from '../../assets/recommended-5.png';
import recommendedcuatro from '../../assets/recommended-4.png';
import fifthsliderone from '../../assets/fifthsectionimgone.jpg';


function mainpage() {
    const [cityLi, setCityLi] = useState('Choose City');
    const [selectedCity, setSelectedCity] = useState('Baku');
    const [tourLi, setTourLi] = useState('Choose travel type');
    const [chooseCity, setChooseCity] = useState('Choose City');
    const [selectedCityImg, setSelectedCityImg] = useState(fifthsliderone);
    const [cityInfo, setCityInfo] = useState('Baku, the capital and largest city of Azerbaijan, is a vibrant metropolis blending ancient heritage and modernity. Our tours of Baku offer an insightful journey through its most captivating landmarks and unique sites. From the historical charm of the Old City (Icherisheher) to the futuristic Flame Towers, our knowledgeable guides will share intriguing stories and give you a glimpse into the dynamic life and rich culture of contemporary Baku residents. Discover the enchanting blend of East and West that defines this fascinating city.');

    const [isRotatedUp, setIsRotatedUp] = useState(false);
    const [isRotatedDown, setIsRotatedDown] = useState(false);
    const [isRotatedDownFifthSection, setIsRotatedDownFifthSection] = useState(false);

    const dropdownRefUp = useRef(null);
    const dropdownRefDown = useRef(null);
    const dropdownRefDownFifthSection = useRef(null);

    const handleCityChangem = (cityName) => {
        const city = citiesData.find(city => city.cityName === cityName);
        if (city) {
            setCityInfo(city.cityInfo);
            setChooseCity(city.cityName);
            setSelectedCity(city.cityName);
            setSelectedCityImg(city.cityImg);
        }
    };

    const handleCityChangeLi = (cityName) => {
        const cityList = cityData.cities.find(city => city.cityLi === cityName);
        if (cityList) {
            setCityLi(cityName);
        }
    };

    const handleTourChangeLi = (tourName) => {
        const tourType = cityTour.tourtypes.find(tour => tour.tourtype === tourName);
        if (tourType) {
            setTourLi(tourName);
        }
    };

    const handleClickUp = () => {
        setIsRotatedUp(!isRotatedUp);
    };

    const handleClickDown = () => {
        setIsRotatedDown(!isRotatedDown);
    };

    const handleClickDownFifthSection = () => {
        setIsRotatedDownFifthSection(!isRotatedDownFifthSection);
    };

    const handleClickOutside = (ref, setState) => (event) => {
        if (ref.current && !ref.current.contains(event.target)) {
            setState(false);
        }
    };

    const handleScrollRight = () => {
        const section = document.getElementById('sectionthird');
        if (section) {
            section.scrollBy({
                left: 200,
                behavior: 'smooth',
            });
        }
    };

    const handleScrollLeft = () => {
        const section = document.getElementById('sectionthird');
        if (section) {
            section.scrollBy({
                left: -200,
                behavior: 'smooth',
            });
        }
    };

    const handleScrollRightScnd = () => {
        const sectionscnd = document.getElementById('sectionsecond');
        if (sectionscnd) {
            sectionscnd.scrollBy({
                left: 200,
                behavior: 'smooth',
            });
        }
    };

    const handleScrollLeftScnd = () => {
        const sectionscnd = document.getElementById('sectionsecond');
        if (sectionscnd) {
            sectionscnd.scrollBy({
                left: -200,
                behavior: 'smooth',
            });
        }
    };

    useEffect(() => {
        const handleOutsideClickUp = handleClickOutside(dropdownRefUp, setIsRotatedUp);
        const handleOutsideClickDown = handleClickOutside(dropdownRefDown, setIsRotatedDown);
        const handleOutsideClickDownFifth = handleClickOutside(dropdownRefDownFifthSection, setIsRotatedDownFifthSection);

        document.addEventListener('mousedown', handleOutsideClickUp);
        document.addEventListener('mousedown', handleOutsideClickDown);
        document.addEventListener('mousedown', handleOutsideClickDownFifth);

        return () => {
            document.removeEventListener('mousedown', handleOutsideClickUp);
            document.removeEventListener('mousedown', handleOutsideClickDown);
            document.removeEventListener('mousedown', handleOutsideClickDownFifth);
        };
    }, []);




    return (

        <div className="mainpage">

            <section className="sectionfirst">
                <div className="containerfrstsc">
                    <div className="citychoose">

                        <div className="leftbuttons">

                            <div ref={dropdownRefUp} onClick={handleClickUp} className={`lftlftbtndrpdwn ${isRotatedUp ? 'lftlftbtndrpdwnactive' : ''}`}>
                                {cityLi} <RiArrowDownSLine strokeWidth={2} style={{ transform: isRotatedUp ? 'rotate(180deg)' : 'none' }} />
                                <ul className={`lftlftbtndrpdwnul ${isRotatedUp ? 'lftlftbtndrpdwnulactive' : ''}`}>
                                    {cityData.cities.map((city, index) => (
                                        <li key={index} onClick={() => handleCityChangeLi(city.cityLi)}>
                                            {city.cityLi}
                                        </li>
                                    ))}
                                </ul>

                            </div>

                            <div ref={dropdownRefDown} onClick={handleClickDown} className="lftrghtbtndrpdwn">
                                {tourLi}
                                <RiArrowDownSLine strokeWidth={2} style={{ transform: isRotatedDown ? 'rotate(180deg)' : 'none' }} />
                                <ul className={`rghtlftbtndrpdwnul ${isRotatedDown ? 'rghtlftbtndrpdwnulactive' : ''}`}>
                                    {cityTour.tourtypes.map((tour, index) => (
                                        <li key={index} onClick={() => handleTourChangeLi(tour.tourtype)}>
                                            {tour.tourtype}
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

            <section className="sectionsecond">
                <div className="containerscndsc">
                    <div className='scndsctnup'>
                        <div className="scndsctntxt">
                            <h1>Package tours</h1>
                            <p>Select one of our tailor-made packages and get prepared for your Russian adventure! You do not need to worry about accommodation, airport transfers, museum tickets, transportation between the cities, tour guides — we will take care of it for you. </p>
                        </div>

                        <div className="sctnscndbtnhldr">
                            <button className="btntoleft" onClick={handleScrollLeftScnd}><FaAnglesLeft size={16} color={"white"} /></button>
                            <button className="btntoright" onClick={handleScrollRightScnd}><FaAnglesRight size={16} color={"white"} /></button>
                        </div>

                    </div>
                    <div className="sliderholder" id='sectionsecond'>

                        <div className="yellowcircle"></div>

                        <div className="sliderone">
                            <img src={slideruno} className='slideruno' />
                            <div className="txtprtscndscc">
                                <h1>Tours to Baku and its sights</h1>
                                <p>Feel the lifestyle and culture of the ancient Azerbaijani metropolis. Our professional guides...</p>
                                <button>View 29 tours <FaArrowRightLong /> </button>
                            </div>
                        </div>

                        <SLIDER imgg={sliderdos} huno={'Baku Boulevard'} p={'1 day from 179,48 eur'} btn={'View'} />
                        <SLIDER imgg={slidertres} huno={'Weekend in Qabala from Upon request'} p={'8 days / 7 nights from 343,64 Eur'} btn={'View'} />
                        <SLIDER imgg={slidercuatro} huno={'Weekend in Lerik from Upon request'} p={'3 days / 2 nights from 94,54'} btn={'View'} />
                        <SLIDER imgg={sliderpierci} huno={'Weekend in Lankaran from Upon request'} p={'3 days / 2 nights from 146,85'} btn={'View'} />
                        <SLIDER imgg={slidersessi} huno={'Weekend in Quba from Upon request'} p={'3 days / 2 nights from 245,58'} btn={'View'} />
                        <SLIDER imgg={sliderseptini} huno={'Weekend in Shusha from Upon request'} p={'3 days / 2 nights from 180,93'} btn={'View'} />
                    </div>
                </div>
            </section>

            <section className="sectionthird">
                <div className="containerthrdsc">
                    <div className='thrdsctnup'>
                        <div className="thrdsctntxt">
                            <h1>Package tours</h1>
                            <p>Select one of our tailor-made packages and get prepared for your Russian adventure! You do not need to worry about accommodation, airport transfers, museum tickets, transportation between the cities, tour guides — we will take care of it for you. </p>
                        </div>
                        <div className="sctnthrdbtnhldr">
                            <button onClick={handleScrollLeft} className="btntoleft"><FaAnglesLeft size={16} color={"white"} /></button>
                            <button onClick={handleScrollRight} className="btntoright"><FaAnglesRight size={16} color={"white"} /></button>
                        </div>
                    </div>

                    <div className="yellowcirclescnd"></div>

                    <div className="sliderholderthrd" id='sectionthird'>

                        <div className="sliderone">
                            <img src={slideruno} className='slideruno' />
                            <div className="txtprtthrdscc">
                                <h1>Tours to Baku and its sights</h1>
                                <p>Feel the lifestyle and culture of the ancient Azerbaijani metropolis. Our professional guides...</p>
                                <button>View 29 tours <FaArrowRightLong /> </button>
                            </div>
                        </div>

                        <SLIDER imgg={sliderdos} huno={'Baku Boulevard'} p={'1 day from 179,48 eur'} btn={'View'} />
                        <SLIDER imgg={slidertres} huno={'Weekend in Qabala from Upon request'} p={'8 days / 7 nights from 343,64 Eur'} btn={'View'} />
                        <SLIDER imgg={slidercuatro} huno={'Weekend in Lerik from Upon request'} p={'3 days / 2 nights from 94,54'} btn={'View'} />
                        <SLIDER imgg={sliderpierci} huno={'Weekend in Lankaran from Upon request'} p={'3 days / 2 nights from 146,85'} btn={'View'} />
                        <SLIDER imgg={slidersessi} huno={'Weekend in Quba from Upon request'} p={'3 days / 2 nights from 245,58'} btn={'View'} />
                        <SLIDER imgg={sliderseptini} huno={'Weekend in Shusha from Upon request'} p={'3 days / 2 nights from 180,93'} btn={'View'} />
                    </div>
                </div>
            </section>

            <section className="sectionfourth">
                <div className="containerfrthsc">
                    <div className="frthlft">
                        <h1 className='txtprtfrsth frthhuno'>Welcome to</h1>
                        <div className="div">
                            <h1 className='txtprtfrsth'>Azerbaijan <span className='yellow'>.</span></h1>
                        </div>
                    </div>

                    <div className="frthrght">
                        <p>Planning a trip to Azerbaijan can be a challenging endeavor, particularly when you're unfamiliar with all the unique aspects and hidden treasures of this captivating country.  <a className='travelazer' target='_blank' href="https://azerbaijan.travel/"> Azerbaijan.travel</a> is here to assist you in selecting the perfect itinerary for your adventure. Why should you choose us:</p>
                        <div className="frthrghttxtprt">
                            <div className="pprtuno">
                                <div className="icons"><GrUserManager size={32} color='black' /></div>  <p className='frthrghtp'>We are the experienced travel concierge with more than 10 years’ experience and thousands of happy tourists</p>
                            </div>

                            <div className="pprtdos">
                                <div className="icons"><GrCertificate className='iconuno' size={32} color='black' /></div> <p className='frthrghtp'>We are the registered tour operator officially licensed by the State Tourism Agency of the Republic of Azerbaijan</p>
                            </div>

                            <div className="pprttres">
                                <div className="icons"><LiaHandHoldingHeartSolid size={32} color='black' /></div> <p className='frthrghtp'>We practise a personal approach to each customer and design your trip according to your needs</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="sectionfifth">
                <div className="containerffthsc">

                    <div className="ffthscup">
                        <h1>Popular destinations</h1>


                        <ul className='destinations' >
                            {citiesData.map(city => (
                                <li className={`ulli ${selectedCity === city.cityName ? 'nulliactive' : ''}`} key={city.cityName} onClick={() => { handleCityChangem(city.cityName); handleClickList(); }}>
                                    {city.cityName}
                                </li>
                            ))}
                        </ul>

                        <div className="horizontalffth"></div>

                        <div ref={dropdownRefDownFifthSection} onClick={handleClickDownFifthSection} className={`fifthsctndv ${isRotatedDownFifthSection ? 'fifthsctndvactive' : ''}`}>
                            {chooseCity} <RiArrowDownSLine strokeWidth={2} style={{ transform: isRotatedDownFifthSection ? 'rotate(180deg)' : 'none' }} />
                            <ul className={`ffthsctnul ${isRotatedDownFifthSection ? 'ffthsctnulactive' : ''}`}>
                                {citiesData.map(city => (
                                    <li key={city.cityName} onClick={() => handleCityChangem(city.cityName)}  >
                                        {city.cityName}
                                    </li>
                                ))}
                            </ul>
                        </div>


                        <div className="horizontalline"></div>
                    </div>

                    <div className="sldrhldrtwo">
                        <div className="ffthscdwnlft">

                            {selectedCity && (
                                <div>
                                    <h1 id='destinatonhuno'>{selectedCity}</h1>
                                    <p>{cityInfo}</p>
                                </div>
                            )}
                            <div className="btnshldr">
                                <button>left</button>
                                <button>right</button>
                            </div>
                        </div>

                        <div className="ffthscdwnrght">
                            {selectedCityImg && <img src={selectedCityImg} className='sldrimg' alt={selectedCity} />}
                        </div>

                    </div>
                </div>

            </section>

            <section className="sectionsixth">
                <div className="containersxth">
                    <div className="trstssy">
                        <h1>What tourists say?</h1>
                        <p>More than 1500 tourists already travelled to Russia with us. Here is what they say:</p>

                        <div className="horizontalwhite"></div>

                        <div className="rcmndtrst">
                            <div className="trstuno">
                                <p>Yvonne Sanders</p>
                                <div className="strs">
                                    <p>2019-10-05</p>
                                    <div className="strcnt">
                                        <IoMdStar color='gold' />
                                        <IoMdStar color='gold' />
                                        <IoMdStar color='gold' />
                                        <IoMdStar color='gold' />
                                        <IoMdStar color='gold' />
                                    </div>
                                </div>
                                <p>Hello and Good day We wanted to say "Thank you so very much" to Irina and Sergej for their warm welcome and the wonderful time that we had in St. Petersburg in early October while we were with them. We enjoyed their...</p>
                            </div>

                            <div className="horizontal"></div>
                            <div className="vertical"></div>

                            <div className="trstdos">
                                <p>Yvonne Sanders</p>
                                <div className="strs">
                                    <p>2019-10-05</p>
                                    <div className="strcnt">
                                        <IoMdStar color='gold' />
                                        <IoMdStar color='gold' />
                                        <IoMdStar color='gold' />
                                        <IoMdStar color='gold' />
                                        <IoMdStar color='gold' />
                                    </div>
                                </div>
                                <p>Hello and Good day We wanted to say "Thank you so very much" to Irina and Sergej for their warm welcome and the wonderful time that we had in St. Petersburg in early October while we were with them. We enjoyed their...</p>
                            </div>

                            <div className="horizontal"></div>
                            <div className="vertical"></div>


                            <div className="trsttres">
                                <p>Yvonne Sanders</p>
                                <div className="strs">
                                    <p>2019-10-05</p>
                                    <div className="strcnt">
                                        <IoMdStar color='gold' />
                                        <IoMdStar color='gold' />
                                        <IoMdStar color='gold' />
                                        <IoMdStar color='gold' />
                                        <IoMdStar color='gold' />
                                    </div>
                                </div>
                                <p>Hello and Good day We wanted to say "Thank you so very much" to Irina and Sergej for their warm welcome and the wonderful time that we had in St. Petersburg in early October while we were with them. We enjoyed their...</p>
                            </div>
                        </div>
                    </div>

                    <div className="horizontalwhite"></div>
                    <div className="horizontalwhite"></div>

                    <div className="recommendedby">
                        <p>Recommended by:</p>
                        <div className="recomimg">
                            <img src={recommendeduno} />
                            <img src={recommendeddos} />
                            <img src={recommendedtres} />
                            <img src={recommendedcuatro} />
                            <img src={recommendedpieci} />
                        </div>
                    </div>
                </div>
            </section>

        </div>
    )
}


export default mainpage