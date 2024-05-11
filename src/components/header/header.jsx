import React from 'react';
import { useState } from 'react';
import './header.css';
import main from '../../assets/main.png';
import logo from '../../assets/logo.svg';
import { GoPerson } from "react-icons/go";
import { CgShoppingCart } from "react-icons/cg";
import { RiArrowDownSLine } from "react-icons/ri";
import { MdOutlineEuroSymbol } from "react-icons/md";

function header() {

    const [isRotated, setIsRotated] = useState(false);

    const handleClick = () => {
        setIsRotated(!isRotated);
    };


    return (

        <div className="upperpart">

            <header>
                <a href="#"><img src={logo} className='logo' /></a>

                <ul className='headerul'>
                    <li><a href="#">Multi-day tours</a></li>
                    <li><a href="#">Day trips</a></li>
                    <li><a href="#">Visa-free shore tours</a></li>
                    <li><a href="#">Visa informations</a></li>
                </ul>
                <div className="btnsdv">
                    <div className="lftbtnsdv">

                        <button><GoPerson size={20} className='icon' strokeWidth={1}/></button>
                        <button><CgShoppingCart size={20} className='icon' /></button>
                        <button onClick={handleClick}><MdOutlineEuroSymbol size={20} className='icon' /> <RiArrowDownSLine strokeWidth={1} size={16} style={{ transform: isRotated ? 'rotate(180deg)' : 'none' }} /></button>

                    </div>

                    <div className="rghtbtnsdv">
                        <button className='chcktbtn'>Checkout</button>
                    </div>
                </div>
            </header>

            <div className="txtprt">
                <div className="mainpicprt">
                    <img src={main} className='main' />
                </div>

                <div className="txtprtrtra">
                    <h1 className='txtprtfrsth'>Azerbaijan <div className='yellow'></div></h1>
                    <h1 className='txtprtscndh'>The great adventure</h1>

                    <p className='txtprtp'>We offer you our handpicked tours and excursions for an incredible vacation in Azerbaijan</p>
                </div>

            </div>

        </div>
    )
}

export default header