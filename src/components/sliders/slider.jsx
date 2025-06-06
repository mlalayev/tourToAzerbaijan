import React from 'react'
import { FaArrowRightLong } from "react-icons/fa6";

function slider(props) {
    return (
        <div className='props'>
            <img src={props.imgg} className='propsimg' />
            <div className="txtprtscndsc">
                <h1 className='propshuno'>{props.huno}</h1>
                <p className='propsp'>{props.p}</p>

                <button className="learn-more" id='learn-more'>
                    <span className="circle" aria-hidden="true">
                        <span className="icon arrow"></span>
                    </span>
                    <span className="button-text" id='button-text'>{props.btn}</span>
                </button>

            </div>
        </div>
    )
}

export default slider