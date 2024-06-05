import React from 'react'
import { FaArrowRightLong } from "react-icons/fa6";

function slider(props) {
    return (
        <div className='props'>
            <img src={props.imgg} className='propsimg' />
            <div className="txtprtscndsc">
                <h1 className='propshuno'>{props.huno}</h1>
                <p className='propsp'>{props.p}</p>
                {/* <button className='propsbtn'>{props.btn} <FaArrowRightLong /> </button> */}
            
                <button className="cta">
                                    <span>{props.btn}</span>
                                    <svg width="15px" height="10px" viewBox="0 0 13 10">
                                        <path d="M1,5 L11,5"></path>
                                        <polyline points="8 1 12 5 8 9"></polyline>
                                    </svg>
                                </button>

            </div>
        </div>
    )
}

export default slider