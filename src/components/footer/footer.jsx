import React from 'react'
import './footer.css'
import { LuArrowUpCircle } from "react-icons/lu";


function footer() {

    const scrollToTop = () => {
        window.scrollTo({
          top: 0,
          behavior: 'smooth',
        });
      };

    return (
        <footer>

            <div className="divgreenline">
                <div className="greencircle" onClick={scrollToTop} ><LuArrowUpCircle size={60} strokeWidth={1} color='black'/></div>
            </div>

            <div className="containerftr">
                <div className="travelservices">
                    <p>Travel sevices</p>
                    <div className="horizontall"></div>
                    <a href="#">Multi-day tours</a>
                    <a href="#">Multi-day tours</a>
                    <a href="#">Multi-day tours</a>
                    <a href="#">Multi-day tours</a>
                </div>

                <div className="companies">
                    <p>Companies</p>
                    <div className="horizontall"></div>
                    <a href="#">About Azerbaijan tours</a>
                    <a href="#">About Azerbaijan tours</a>
                    <a href="#">About Azerbaijan tours</a>
                </div>

                <div className="workwithus">
                    <p>Work with us</p>
                    <div className="horizontall"></div>
                    <a href="#">for travel agents</a>
                    <br />
                    <div className="officeinbaku">
                        <p>Office in Baku</p>
                        <div className="horizontall"></div>
                        <p>+994 50 274 01 81</p>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default footer