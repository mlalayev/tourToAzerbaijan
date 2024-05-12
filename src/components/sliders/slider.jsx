import React from 'react'
import { FaArrowRightLong } from "react-icons/fa6";
import './slider.css'

function slider(props) {
    return (
        <div>
            <img src={props.imgg} className='propsimg'/>

            <h1>{props.huno}</h1>
            <p>{props.p}</p>
            <button>{props.btn} <FaArrowRightLong /> </button>
        </div>
    )   
}

export default slider