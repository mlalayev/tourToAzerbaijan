import './mainpage.css';
import { IoMdStar } from "react-icons/io";
import SLIDER from '../sliders/slider.jsx';
import cityData from '../../../cities.json';
// import cityTour from '../../../tourtype.json';
import { GrUserManager } from "react-icons/gr";
import { FaAnglesLeft } from "react-icons/fa6";
import { GrCertificate } from "react-icons/gr";
import { FaAnglesRight } from "react-icons/fa6";
import WAPI from '../weatherapi/weatherapi.jsx';
import sliderdos from '../../assets/slider2.jpg';
import yanardag from '../../assets/yanardag.jpg';
import khizidag from '../../assets/khizidag.jpg';
import atashgah from '../../assets/atashgah.jpeg';
import { RiArrowDownSLine } from "react-icons/ri";
import slideruno from '../../assets/slider1.jpeg';
import { FaArrowRightLong } from "react-icons/fa6";
import mudvolcano from '../../assets/mudvolcano.jpg';
import hdlymosque from '../../assets/hdlymosque.jpg';
import slidersessi from '../../assets/slider6quba.jpg';
import ganimetpark from '../../assets/ganimetpark.jpg';
import slidertres from '../../assets/slider3qabala.jpg';
import IMAGESLIDER from '../imageSlider/imageSlider.jsx';
import slidercuatro from '../../assets/slider4lerik.jpg';
import slidershahdag from '../../assets/slidershahdag.jpg';
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
import SEARCH from '../search/search.jsx'
import { useTranslation } from 'react-i18next';

function mainpage() {

    const { t, i18n } = useTranslation();
    // const { t } = useTranslation();

    const dropdownRefUp = useRef(null);
    const dropdownRefDown = useRef(null);
    const dropdownRefDownFifthSection = useRef(null);

    const [cityLi, setCityLi] = useState(t('default'));
    const [selectedCity, setSelectedCity] = useState('Baku');
    const [chooseCity, setChooseCity] = useState('Choose City');
    const [selectedCityImg, setSelectedCityImg] = useState(fifthsliderone);
    const [cityInfo, setCityInfo] = useState(
        'Baku, the capital and largest city of Azerbaijan, is a vibrant metropolis blending ancient heritage and modernity. Our tours of Baku offer an insightful journey through its most captivating landmarks and unique sites. From the historical charm of the Old City (Icherisheher) to the futuristic Flame Towers, our knowledgeable guides will share intriguing stories and give you a glimpse into the dynamic life and rich culture of contemporary Baku residents. Discover the enchanting blend of East and West that defines this fascinating city.'
    );

    const [isRotatedUp, setIsRotatedUp] = useState(false);
    const [isRotatedDown, setIsRotatedDown] = useState(false);
    const [isRotatedDownFifthSection, setIsRotatedDownFifthSection] = useState(false);


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

    const handleClickOutside = (ref, setState) => (event) => {
        if (ref.current && !ref.current.contains(event.target)) {
            setState(false);
        }
    };

    const handleCityChangeLi = (cityName) => {
        const cityList = cityData.cities.find(city => city.cityLi === cityName);
        if (cityList) {
            setCityLi(cityName);
        }
    };

    const handleCityChangem = (cityName) => {
        const city = citiesData.find(city => city.cityName === cityName);
        if (city) {
            setCityInfo(city.cityInfo);
            setChooseCity(city.cityName);
            setSelectedCity(city.cityName);
            setSelectedCityImg(city.cityImg);
        }
    };

    const handleClickUp = () => {
        setIsRotatedUp(!isRotatedUp);
    };

    const handleClickDownFifthSection = () => {
        setIsRotatedDownFifthSection(!isRotatedDownFifthSection);
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

    return (

        <div className="mainpage">

            <section className="sectionfirst">
                <div className="container-first">
                    <div className="city-choose">
                        <div className="left-button">
                            <div ref={dropdownRefUp} onClick={handleClickUp} className={`lftlftbtndrpdwnn  ${isRotatedUp ? 'lftlftbtndrpdwnactive' : ''}`}>
                                {t(`cities.${cityLi}`)} <RiArrowDownSLine strokeWidth={2} style={{ transform: isRotatedUp ? 'rotate(180deg)' : 'none' }} />
                                <ul className={`lftlftbtndrpdwnul ${isRotatedUp ? 'lftlftbtndrpdwnulactive' : ''}`}>
                                    {cityData.cities.map((city, index) => (
                                        <li key={index} onClick={() => handleCityChangeLi(city.cityLi)}>
                                            {t(`cities.${city.cityLi}`)}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                        <div className="checkoutpart">
                            <span>{t('sectionfirst.findTours')}! <FaArrowRightLong /></span>
                        </div>
                    </div>
                </div>
            </section>

            <WAPI />

            <section className="sectionsecond">
                <div className="containerscndsc">
                    <div className='scndsctnup'>
                        <div className="scndsctntxt">
                            <h1>{t('sectionsecond.packageTours')}</h1>
                            <p>{t('sectionsecond.selectPackage')}</p>
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
                                <h1>{t('sectionsecond.toursToBaku')}</h1>
                                <p>{t('sectionsecond.bakuBoulevard')}</p>
                                <button className="learn-more" id='learn-more'>
                                    <span className="circle" aria-hidden="true">
                                        <span className="icon arrow"></span>
                                    </span>
                                    <span className="button-text" id='button-text'>Check</span>
                                </button>
                            </div>
                        </div>
                        <SLIDER imgg={sliderdos} huno={t('sectionsecond.sliderProps.sliderdos.huno')} p={t('sectionsecond.sliderProps.sliderdos.p')} btn={t('sectionsecond.sliderProps.sliderdos.btn')} />
                        <SLIDER imgg={slidercuatro} huno={t('sectionsecond.sliderProps.slidercuatro.huno')} p={t('sectionsecond.sliderProps.slidercuatro.p')} btn={t('sectionsecond.sliderProps.slidercuatro.btn')} />
                        <SLIDER imgg={slidertres} huno={t('sectionsecond.sliderProps.slidertres.huno')} p={t('sectionsecond.sliderProps.slidertres.p')} btn={t('sectionsecond.sliderProps.slidertres.btn')} />
                        <SLIDER imgg={sliderpierci} huno={t('sectionsecond.sliderProps.sliderpierci.huno')} p={t('sectionsecond.sliderProps.sliderpierci.p')} btn={t('sectionsecond.sliderProps.sliderpierci.btn')} />
                        <SLIDER imgg={slidersessi} huno={t('sectionsecond.sliderProps.slidersessi.huno')} p={t('sectionsecond.sliderProps.slidersessi.p')} btn={t('sectionsecond.sliderProps.slidersessi.btn')} />
                        <SLIDER imgg={sliderseptini} huno={t('sectionsecond.sliderProps.sliderseptini.huno')} p={t('sectionsecond.sliderProps.sliderseptini.p')} btn={t('sectionsecond.sliderProps.sliderseptini.btn')} />
                    </div>
                </div>
            </section>

            <section className="sectionthird">
                <div className="containerthrdsc">
                    <div className='thrdsctnup'>
                        <div className="thrdsctntxt">
                            <h1>{t('sectionthird.packageTours')}</h1>
                            <p>{t('sectionthird.selectPackage')}</p>
                        </div>
                        <div className="sctnthrdbtnhldr">
                            <button onClick={handleScrollLeft} className="btntoleft"><FaAnglesLeft size={16} color={"white"} /></button>
                            <button onClick={handleScrollRight} className="btntoright"><FaAnglesRight size={16} color={"white"} /></button>
                        </div>
                    </div>

                    <div className="yellowcirclescnd"></div>

                    <div className="sliderholderthrd" id='sectionthird'>

                        <div className="sliderone">
                            <img src={atashgah} className='slideruno' />
                            <div className="txtprtthrdscc">
                                <h1>{t('sectionthird.atashgah')}</h1>
                                <p>{t('sectionthird.atashgahDescription')}</p>
                                <button className="learn-more" id='learn-more'>
                                    <span className="circle" aria-hidden="true">
                                        <span className="icon arrow"></span>
                                    </span>
                                    <span className="button-text" id='button-text'>Check</span>
                                </button>
                            </div>
                        </div>

                        <SLIDER imgg={slidershahdag} huno={t('sectionthird.sliderProps.slidershahdag.huno')} p={t('sectionthird.sliderProps.slidershahdag.p')} btn={t('sectionthird.sliderProps.slidershahdag.btn')} />
                        <SLIDER imgg={khizidag} huno={t('sectionthird.sliderProps.khizidag.huno')} p={t('sectionthird.sliderProps.khizidag.p')} btn={t('sectionthird.sliderProps.khizidag.btn')} />
                        <SLIDER imgg={ganimetpark} huno={t('sectionthird.sliderProps.ganimetpark.huno')} p={t('sectionthird.sliderProps.ganimetpark.p')} btn={t('sectionthird.sliderProps.ganimetpark.btn')} />
                        <SLIDER imgg={mudvolcano} huno={t('sectionthird.sliderProps.mudvolcano.huno')} p={t('sectionthird.sliderProps.mudvolcano.p')} btn={t('sectionthird.sliderProps.mudvolcano.btn')} />
                        <SLIDER imgg={hdlymosque} huno={t('sectionthird.sliderProps.hdlymosque.huno')} p={t('sectionthird.sliderProps.hdlymosque.p')} btn={t('sectionthird.sliderProps.hdlymosque.btn')} />
                        <SLIDER imgg={yanardag} huno={t('sectionthird.sliderProps.yanardag.huno')} p={t('sectionthird.sliderProps.yanardag.p')} btn={t('sectionthird.sliderProps.yanardag.btn')} />
                    </div>
                </div>
            </section>

            <section className="sectionfourth">
                <div className="containerfrthsc">
                    <div className="frthlft">
                        <h1 className='txtprtfrsth frthhuno'>{t('sectionfourth.welcomeTo')}</h1>
                        <div className="div">
                            <h1 className='txtprtfrsth'>{t('sectionfourth.azerbaijan')} <span className='yellow'>.</span></h1>
                        </div>
                    </div>

                    <div className="frthrght">
                        <p>{t('sectionfourth.planningTrip')} <a className='travelazer' target='_blank' href="https://azerbaijan.travel/"> Azerbaijan.travel</a> {t('sectionfourth.assistance')}</p>
                        <div className="frthrghttxtprt">
                            <div className="pprtuno">
                                <div className="icons"><GrUserManager size={32} color='black' /></div> <p className='frthrghtp'>{t('sectionfourth.reasons.first')}</p>
                            </div>

                            <div className="pprtdos">
                                <div className="icons"><GrCertificate className='iconuno' size={32} color='black' /></div> <p className='frthrghtp'>{t('sectionfourth.reasons.second')}</p>
                            </div>

                            <div className="pprttres">
                                <div className="icons"><LiaHandHoldingHeartSolid size={32} color='black' /></div> <p className='frthrghtp'>{t('sectionfourth.reasons.third')}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="sectionfifth">
                <div className="containerffthsc">
                    <div className="ffthscup">

                        <h1>{t('sectionfifth.popularDestinations')}</h1>

                        <ul className='destinations'>
                            {citiesData.map(city => (
                                <li
                                    className={`ulli ${selectedCity === city.cityName ? 'nulliactive' : ''}`}
                                    key={city.cityName}
                                    onClick={() => { handleCityChangem(city.cityName); handleClickList(); }}
                                >
                                    {t(`cityDestinations.${city.cityName}`)}
                                </li>
                            ))}
                        </ul>

                        <div className="horizontalffth"></div>

                        <div ref={dropdownRefDownFifthSection} onClick={handleClickDownFifthSection} className={`fifthsctndv ${isRotatedDownFifthSection ? 'fifthsctndvactive' : ''}`}>
                            {t('sectionfifth.chooseCity')} <RiArrowDownSLine strokeWidth={2} style={{ transform: isRotatedDownFifthSection ? 'rotate(180deg)' : 'none' }} />
                            <ul className={`ffthsctnul ${isRotatedDownFifthSection ? 'ffthsctnulactive' : ''}`}>
                                {citiesData.map(city => (
                                    <li key={city.cityName} onClick={() => handleCityChangem(city.cityName)}  >
                                        {t(`citiesDropdown.${city.cityName}`)}
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
                                    <h1 id='destinatonhuno'>{t(`citiesSlider.${selectedCity}.name`)}</h1>
                                    <p>{t(`citiesSlider.${selectedCity}.info`)}</p>
                                </div>
                            )}
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
                        <h1>{t('sectionsixth.whatTouristsSay')}</h1>
                        <p>{t('sectionsixth.touristsSayIntro')}</p>

                        <div className="horizontalwhite"></div>

                        <div className="rcmndtrst">
                            {t('sectionsixth.testimonials', { returnObjects: true }).map((testimonial, index) => (
                                <div key={index} className={`trst${index + 1}`}>
                                    <p>{testimonial.name}</p>
                                    <div className="strs">
                                        <p>{testimonial.date}</p>
                                        <div className="strcnt">
                                            {[...Array(testimonial.rating)].map((_, i) => (
                                                <IoMdStar key={i} color='gold' />
                                            ))}
                                        </div>
                                    </div>
                                    <p>{testimonial.comment}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="horizontalwhite"></div>
                    <div className="horizontalwhite"></div>

                    <div className="recommendedby">
                        <p>{t('sectionsixth.recommendedBy')}</p>
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

            <SEARCH />

        </div>
    )
}


export default mainpage