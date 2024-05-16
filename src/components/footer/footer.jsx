import React from 'react'
import './footer.css'

function footer() {
  return (
    <footer>
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
            </div>

            <div className="officeinbaku">
                <p>Office in Baku</p>
                <div className="horizontall"></div>
                <p>+994 50 274 01 81</p>
            </div>

            <div className="officeinbaku">
                <p>Office in Baku</p>
                <div className="horizontall"></div>
                <p>+994 50 274 01 81</p>
            </div>
        </div>
    </footer>
  )
}

export default footer