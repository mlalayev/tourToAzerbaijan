import React from 'react';
import { useState } from 'react';
import './header.css';
import main from '../../assets/main.png';
import logo from '../../assets/logo.svg';
import { CgShoppingCart } from "react-icons/cg";
import { IoPersonOutline } from "react-icons/io5";
import { IoMdArrowDropdown } from "react-icons/io";
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

                        <button><IoPersonOutline size={20} className='icon' /></button>
                        <button><CgShoppingCart size={20} className='icon' /></button>
                        <button onClick={handleClick}><MdOutlineEuroSymbol size={20} className='icon' /> <IoMdArrowDropdown size={16} style={{ transform: isRotated ? 'rotate(180deg)' : 'none' }}/></button>

                    </div>

                    <div className="rghtbtnsdv">
                        <button className='chcktbtn'>Checkout</button>
                    </div>
                </div>
            </header>

            {/* <img src={main} className='main'/> */}

        </div>
    )
}

export default header