import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { RiArrowDownSLine } from 'react-icons/ri';
import { FaArrowRightLong } from 'react-icons/fa6';
import momuna from '../../assets/mominakhatun.png';
import HEADER from '../../components/header/header.jsx';
import cityData from '../../../cities.json';
import '../destinations.css'

function Khizy() {
  const navigate = useNavigate(); // Import useNavigate hook from react-router-dom
  const dropdownRefUp = useRef(null);
  const [cityLi, setCityLi] = useState('Choose City');
  const [isRotatedUp, setIsRotatedUp] = useState(false);
  const [destinations, setDestinations] = useState([]); // State to store destinations data

  const handleCityChangeLi = (cityName) => {
    setCityLi(cityName);
    setIsRotatedUp(false);
  };

  const handleClickOutside = (ref, setFunction) => (event) => {
    if (ref.current && !ref.current.contains(event.target)) {
      setFunction(false);
    }
  };

  const handleClickUp = () => {
    setIsRotatedUp(!isRotatedUp);
  };

  useEffect(() => {
    const fetchDestinations = async () => {
      try {
        const response = await fetch('../../../destinations.json'); // Assuming destinations.json is in the correct path
        const data = await response.json();
        setDestinations(data); // Set destinations state with fetched data
      } catch (error) {
        console.error('Error fetching the tours data:', error);
      }
    };

    fetchDestinations();
  }, []);

  return (
    <>
      <div className="upper-part">
        <HEADER />
        <div className="container-upr">
          <div className="text-part">
            <div className="text-part-ra">
              <h1 className='text-part-firsth'>Where do you want to go<span className='yellow'>?</span></h1>
              <p className='text-partp'>Here you can book a tour to Baku, Gabala, Sheki, and other amazing cities and regions of Azerbaijan.</p>
            </div>
            <div className="main-pic-parttwo">
              <img src={momuna} className='main-momuna' alt="Momuna" />
            </div>
          </div>
        </div>
      </div>

      <section className="section-first">
        <div className="container-first">
          <div className="city-choose">
            <div className="left-button">
              <div ref={dropdownRefUp} onClick={handleClickUp} className={`lftlftbtndrpdwnn  ${isRotatedUp ? 'lftlftbtndrpdwnactive' : ''}`}>
                {cityLi} <RiArrowDownSLine strokeWidth={2} style={{ transform: isRotatedUp ? 'rotate(180deg)' : 'none' }} />
                <ul className={`lftlftbtndrpdwnul ${isRotatedUp ? 'lftlftbtndrpdwnulactive' : ''}`}>
                  {cityData.cities.map((city, index) => (
                    <li key={index} onClick={() => handleCityChangeLi(city.cityLi)}>
                      {city.cityLi}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="checkoutpart">
              <span>Find Tours ! <FaArrowRightLong /></span>
            </div>
          </div>
        </div>
      </section>


    </>
  );
}

export default Khizy;
