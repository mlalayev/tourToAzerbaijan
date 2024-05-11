import React from 'react'
import './header.css'
import { IoPersonOutline } from "react-icons/io5";


import logo from '../../assets/logo.svg'
import main from '../../assets/main.png'

function header() {
    return (

        <div className="upperpart">

            <header>
                <img src={logo} className='logo' />

                <ul className='headerul'>
                    <li><a href="#">Multi-day tours</a></li>
                    <li><a href="#">Day trips</a></li>
                    <li><a href="#">Visa-free shore tours</a></li>
                    <li><a href="#">Visa informations</a></li>
                </ul>

                <div className="btnsdv">
                    <button><IoPersonOutline size={20} /></button>
                    <button><IoPersonOutline size={20} /></button>
                    <button><IoPersonOutline size={20} /></button>
                </div>

                <button className='chcktbtn'>Checkout</button>

            </header>

            {/* <img src={main} className='main'/> */}

        </div>
    )
}

export default header