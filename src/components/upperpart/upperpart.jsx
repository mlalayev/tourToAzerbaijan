import React from 'react';
import { useState } from 'react';
import './upperpart.css';
import main from '../../assets/main.png';
import HEADER from '../header/header.jsx'

function header() {

    return (

        <div className="upperpart">

            <div className="containerupr">

                <HEADER />

                <div className="txtprt">
                    <div className="mainpicprt">
                        <img src={main} className='main' />
                    </div>

                    <div className="txtprtrtra">
                        <h1 className='txtprtfrsth'>Azerbaijan <span className='yellow'>.</span></h1>
                        <h1 className='txtprtscndh'>The great adventure</h1>

                        <p className='txtprtp'>We offer you our handpicked tours and excursions for an incredible vacation in Azerbaijan</p>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default header