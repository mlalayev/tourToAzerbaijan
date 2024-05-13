import './mainpage.css';
import SLIDER from '../sliders/slider.jsx';
import sliderdos from '../../assets/slider2.jpg';
import { RiArrowDownSLine } from "react-icons/ri";
import slideruno from '../../assets/slider1.jpeg';
import { FaArrowRightLong } from "react-icons/fa6";
import slidersessi from '../../assets/slider6quba.jpg';
import slidertres from '../../assets/slider3qabala.jpg';
import slidercuatro from '../../assets/slider4lerik.jpg';
import sliderseptini from '../../assets/slider7shusha.jpg';
import React, { useState, useEffect, useRef } from 'react';
import sliderpierci from '../../assets/slider5lankaran.jpg';


function mainpage() {


    const [isRotatedUp, setIsRotatedUp] = useState(false);
    const [isRotatedDown, setIsRotatedDown] = useState(false);
    const dropdownRefUp = useRef(null);
    const dropdownRefDown = useRef(null);

    useEffect(() => {
        function handleClickOutside(event) {
            if (dropdownRefUp.current && !dropdownRefUp.current.contains(event.target)) {
                setIsRotatedUp(false);
            }
            if (dropdownRefDown.current && !dropdownRefDown.current.contains(event.target)) {
                setIsRotatedDown(false);
            }
        }

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [dropdownRefUp, dropdownRefDown]);

    const handleClickUp = () => {
        setIsRotatedUp(!isRotatedUp);
    };

    const handleClickDown = () => {
        setIsRotatedDown(!isRotatedDown);
    };

    return (

        <div className="mainpage">

            <div className="containermn">

                <section className="sectionfirst">
                    <div className="citychoose">

                        <div className="leftbuttons">

                            <div ref={dropdownRefUp} onClick={handleClickUp} className={`lftlftbtndrpdwn ${isRotatedUp ? 'lftlftbtndrpdwnactive' : ''}`}>
                                Choose city <RiArrowDownSLine strokeWidth={2} style={{ transform: isRotatedUp ? 'rotate(180deg)' : 'none' }} />
                                <ul className={`lftlftbtndrpdwnul ${isRotatedUp ? 'lftlftbtndrpdwnulactive' : ''}`}>
                                    <li>Aghdjabadi</li>
                                    <li>Aghdam</li>
                                    <li>Aghdash</li>
                                    <li>Aghdara</li>
                                    <li>Ahstafa</li>
                                    <li>Aghsu</li>
                                    <li>Astara</li>
                                    <li>Babek</li>
                                    <li>Baku</li>
                                    <li>Balakan</li>
                                    <li>Baylagan</li>
                                    <li>Barda</li>
                                    <li>Bilasuvar</li>
                                    <li>Djabrail</li>
                                    <li>Djalilabad</li>
                                    <li>Djulfa</li>
                                    <li>Dashkasan</li>
                                    <li>Dalimammadli</li>
                                    <li>Fuzuli</li>
                                    <li>Gadabay</li>
                                    <li>Ganja</li>
                                    <li>Goranboy</li>
                                    <li>Goychay</li>
                                    <li>Goygol</li>
                                    <li>Goytapa</li>
                                    <li>Hadjikabul</li>
                                    <li>Horadiz</li>
                                    <li>Khachmas</li>
                                    <li>Khankandi</li>
                                    <li>Khizy</li>
                                    <li>Khojaly</li>
                                    <li>Khodjavand</li>
                                    <li>Khirdalan</li>
                                    <li>Khudat</li>
                                    <li>Ismailly</li>
                                    <li>Kalbadjar</li>
                                    <li>Kurdamir</li>
                                    <li>Gakh</li>
                                    <li>Kazakh</li>
                                    <li>Gabala</li>
                                    <li>Gobustan</li>
                                    <li>Govlar</li>
                                    <li>Guba</li>
                                    <li>Kubadly</li>
                                    <li>Kusar</li>
                                    <li>Lachin</li>
                                    <li>Lerik</li>
                                    <li>Lankaran</li>
                                    <li>Liman</li>
                                    <li>Masally</li>
                                    <li>Mingachevir</li>
                                    <li>Naftalan</li>
                                    <li>Oghuz</li>
                                    <li>Ordubad</li>
                                    <li>Saatly</li>
                                    <li>Sabirabad</li>
                                    <li>Salyan</li>
                                    <li>Samukh</li>
                                    <li>Siyasan</li>
                                    <li>Sumgait</li>
                                    <li>Shabran</li>
                                    <li>Shahbuz</li>
                                    <li>Shamakhy</li>
                                    <li>Shaki</li>
                                    <li>Shamkir</li>
                                    <li>Sharur</li>
                                    <li>Shirvan</li>
                                    <li>Shusha</li>
                                    <li>Tartar</li>
                                    <li>Tovuz</li>
                                    <li>Udjar</li>
                                    <li>Yardymly</li>
                                    <li>Yevlakh</li>
                                    <li>Zagatala</li>
                                    <li>Zangilan</li>
                                    <li>Zardab</li>
                                </ul>

                            </div>

                            <div ref={dropdownRefDown} onClick={handleClickDown} className="lftrghtbtndrpdwn">
                                Choose travel type
                                <RiArrowDownSLine strokeWidth={2} style={{ transform: isRotatedDown ? 'rotate(180deg)' : 'none' }} />
                                <ul className={`rghtlftbtndrpdwnul ${isRotatedDown ? 'rghtlftbtndrpdwnulactive' : ''}`}>
                                    <li>Package tours</li>
                                    <li>Day tours & excursions</li>
                                    <li>Visa-free shore tours</li>
                                </ul>

                            </div>
                        </div>

                        <div className="checkoutpart">
                            <span>Find Tours ! <FaArrowRightLong /></span>
                        </div>
                    </div>
                </section>

                <section className="sectionsecond">
                    <div className='scndsctnup'>
                        <div className="scndsctntxt">
                            <h1>Package tours</h1>
                            <p>Select one of our tailor-made packages and get prepared for your Russian adventure! You do not need to worry about accommodation, airport transfers, museum tickets, transportation between the cities, tour guides — we will take care of it for you. </p>
                        </div>
                        <button className="btntoleft">a</button>
                        <button className="btntoright">a</button>
                    </div>
                    <div className="sliderholder">

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
                </section>

                <section className="sectionthird">
                    <div className='scndsctnup'>
                        <div className="scndsctntxt">
                            <h1>Package tours</h1>
                            <p>Select one of our tailor-made packages and get prepared for your Russian adventure! You do not need to worry about accommodation, airport transfers, museum tickets, transportation between the cities, tour guides — we will take care of it for you. </p>
                        </div>
                        <button className="btntoleft">a</button>
                        <button className="btntoright">a</button>
                    </div>
                    <div className="sliderholder">

                        <div className="yellowcirclescnd"></div>

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
                </section>
            </div>
        </div>
    )
}

export default mainpage