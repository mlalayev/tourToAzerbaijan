import './mainpage.css';
import { RiArrowDownSLine } from "react-icons/ri";
import { FaArrowRightLong } from "react-icons/fa6";
import React, { useState, useEffect, useRef } from 'react';



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

        </div>
    )
}

export default mainpage