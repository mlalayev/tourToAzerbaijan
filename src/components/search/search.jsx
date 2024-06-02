import './search.css'
import React, { useState } from 'react';
import airports from '../../../airports.json'; // Ensure this path is correct
import skyscanner from '../../assets/poweredbyskyscanner.png'
const SearchForm = () => {
    const [from, setFrom] = useState('');
    const [hotel, setHotel] = useState('');
    const [to, setTo] = useState('Heydar Aliyev International Airport - GYD - Baku, Azerbaijan');
    const [fromSuggestions, setFromSuggestions] = useState([]);
    const [hotelSuggestions, setHotelSuggestions] = useState([]);
    const [toSuggestions, setToSuggestions] = useState([]);
    const [adults, setAdults] = useState(1);
    const [children, setChildren] = useState(0);
    const [activeTab, setActiveTab] = useState('flights');

    const handleFromChange = (e) => {
        const value = e.target.value;
        setFrom(value);
        if (value.length > 1) {
            setFromSuggestions(
                airports.filter((airport) =>
                    airport.name.toLowerCase().includes(value.toLowerCase()) ||
                    airport.code.toLowerCase().includes(value.toLowerCase()) ||
                    airport.city.toLowerCase().includes(value.toLowerCase())
                )
            );
        } else {
            setFromSuggestions([]);
        }
    };

    const handleHotelChange = (e) => {
        const value = e.target.value;
        setHotel(value);
        if (value.length > 1) {
            setHotelSuggestions(
                airports.filter((airport) =>
                    airport.name.toLowerCase().includes(value.toLowerCase()) ||
                    airport.code.toLowerCase().includes(value.toLowerCase()) ||
                    airport.city.toLowerCase().includes(value.toLowerCase())
                )
            );
        } else {
            setHotelSuggestions([]);
        }
    };

    const handleToChange = (e) => {
        const value = e.target.value;
        setTo(value);
        if (value.length > 1) {
            setToSuggestions(
                airports.filter((airport) =>
                    airport.name.toLowerCase().includes(value.toLowerCase()) ||
                    airport.code.toLowerCase().includes(value.toLowerCase()) ||
                    airport.city.toLowerCase().includes(value.toLowerCase())
                )
            );
        } else {
            setToSuggestions([]);
        }
    };

    const selectFromSuggestion = (suggestion) => {
        setFrom(`${suggestion.name} - ${suggestion.code} - ${suggestion.city} - ${suggestion.country}`);
        setFromSuggestions([]);
    };

    const selectHotelSuggestion = (suggestion) => {
        setFrom(`${suggestion.name} - ${suggestion.code} - ${suggestion.city} - ${suggestion.country}`);
        setHotelSuggestions([]);
    };

    const selectToSuggestion = (suggestion) => {
        setTo(`${suggestion.name} - ${suggestion.code} - ${suggestion.city} - ${suggestion.country}`);
        setToSuggestions([]);
    };

    const handleEnterPress = (e) => {
        if (e.key === 'Enter' && fromSuggestions.length > 0) {
            setFrom(`${fromSuggestions[0].name} - ${fromSuggestions[0].code} - ${fromSuggestions[0].city}, ${fromSuggestions[0].country}`);
            setFromSuggestions([]);
        } else if (e.key === 'Enter' && toSuggestions.length > 0) {
            setTo(`${toSuggestions[0].name} - ${toSuggestions[0].code} - ${toSuggestions[0].city}, ${toSuggestions[0].country}`);
            setToSuggestions([]);
        }
    };

    const handleAdultsChange = (delta) => {
        setAdults((prev) => Math.max(1, prev + delta));
    };

    const handleChildrenChange = (delta) => {
        setChildren((prev) => Math.max(0, prev + delta));
    };

    const handleTabChange = (tab) => {
        setActiveTab(tab);
    };

    return (
        <div className='search-container'>

            
<div className="box">
                        <div className="clip"></div>
                        <ul className="left">
                            <li></li>
                        </ul>
                        <ul className="right">
                            <li></li>
                        </ul>
                        <div className="ticket">
                            <span className="airline">Tour To Azerbaijan</span>
                            <span className="airline airlineslip">Hello, Baku!</span>
                            <span className="boarding">Boarding pass</span>
                            <div className="content">
                                <span className="jfk">IST</span>
                                <span className="plane">
                                    <svg clipRule="evenodd" fillRule="evenodd" height="60" width="60" imageRendering="optimizeQuality" shapeRendering="geometricPrecision" textRendering="geometricPrecision" viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg">
                                        <g stroke="#222">
                                            <line fill="none" strokeLinecap="round" strokeWidth="30" x1="300" x2="55" y1="390" y2="390" />
                                            <path d="M98 325c-9 10 10 16 25 6l311-156c24-17 35-25 42-50 2-15-46-11-78-7-15 1-34 10-42 16l-56 35 1-1-169-31c-14-3-24-5-37-1-10 5-18 10-27 18l122 72c4 3 5 7 1 9l-44 27-75-15c-10-2-18-4-28 0-8 4-14 9-20 15l74 63z" fill="#222" strokeLinejoin="round" strokeWidth="10" />
                                        </g>
                                    </svg>
                                </span>
                                <span className="sfo">GYD</span>
                                <span className="jfk jfkslip">IST</span>
                                <span className="plane planeslip">
                                    <svg clipRule="evenodd" fillRule="evenodd" height="50" width="50" imageRendering="optimizeQuality" shapeRendering="geometricPrecision" textRendering="geometricPrecision" viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg">
                                        <g stroke="#222">
                                            <line fill="none" strokeLinecap="round" strokeWidth="30" x1="300" x2="55" y1="390" y2="390" />
                                            <path d="M98 325c-9 10 10 16 25 6l311-156c24-17 35-25 42-50 2-15-46-11-78-7-15 1-34 10-42 16l-56 35 1-1-169-31c-14-3-24-5-37-1-10 5-18 10-27 18l122 72c4 3 5 7 1 9l-44 27-75-15c-10-2-18-4-28 0-8 4-14 9-20 15l74 63z" fill="#222" strokeLinejoin="round" strokeWidth="10" />
                                        </g>
                                    </svg>
                                </span>
                                <span className="sfo sfoslip">GYD</span>
                                <div className="sub-content">
                                    <span className="watermark">AZERBAIJ</span>
                                    <span className="name">PASSENGER NAME<br /><span>BLOGGS, Joe</span></span>
                                    <span className="flight">FLIGHT N&deg;<br /><span>X3-65C3</span></span>
                                    <span className="gate">GATE<br /><span>11B</span></span>
                                    <span className="seat">SEAT<br /><span>45A</span></span>
                                    <span className="boardingtime">BOARDING TIME<br /><span>8:25PM ON AUGUST 2024</span></span>
                                    <span className="flight flightslip">FLIGHT N&deg;<br /><span>X3-65C3</span></span>
                                    <span className="seat seatslip">SEAT<br /><span>45A</span></span>
                                    <span className="name nameslip">PASSENGER NAME<br /><span>BLOGGS, Joe</span></span>
                                </div>
                            </div>
                        </div>
                    </div>

            <img src={skyscanner} className='skyscanner' />

            <div className="tab-container">
                <button className={`tab ${activeTab === 'flights' ? 'active' : ''}`} onClick={() => handleTabChange('flights')}>Flights</button>
                <button className={`tab ${activeTab === 'hotels' ? 'active' : ''}`} onClick={() => handleTabChange('hotels')}>Hotels</button>
            </div>

            {activeTab === 'flights'? (
                <>
                    <div className="form-group-one">
                        <div>
                            <input type="radio" id="option1" name="options" value="option1" />
                            <label htmlFor="option1">One-way</label>
                        </div>
                        <div>
                            <input type="radio" id="option2" name="options" value="option2" />
                            <label htmlFor="option2">Two-way</label>
                        </div>
                        <div>
                            <input type="radio" id="option3" name="options" value="option3" />
                            <label htmlFor="option3">Multi-city</label>
                        </div>
                    </div>

                    <div className="form-group-two">
                        <div className="textInputWrapper">
                            <div className="autocomplete">
                                <input
                                    placeholder="From"
                                    type="text"
                                    className="textInputone"
                                    value={from}
                                    onChange={handleFromChange}
                                    onKeyDown={handleEnterPress}
                                />
                                {fromSuggestions.length > 0 && (
                                    <ul className="suggestions">
                                        {fromSuggestions.map((suggestion, index) => (
                                            <li key={index} onClick={() => selectFromSuggestion(suggestion)}>
                                                {suggestion.name} - {suggestion.code} - {suggestion.city}, {suggestion.country}
                                            </li>
                                        ))}
                                    </ul>
                                )}
                                <input
                                    placeholder="To"
                                    type="text"
                                    className="textInputtwo"
                                    value={to}
                                    onChange={handleToChange}
                                    onKeyDown={handleEnterPress}
                                />
                                {toSuggestions.length > 0 && (
                                    <ul className="suggestions">
                                        {toSuggestions.map((suggestion, index) => (
                                            <li key={index} onClick={() => selectToSuggestion(suggestion)}>
                                                {suggestion.name} - {suggestion.code} - {suggestion.city}, {suggestion.country}
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </div>

                            <div className="flexend">
                                <input placeholder="Type Here" type="date" className="textInputthree" />
                                <input placeholder="Type Here" type="date" className="textInputfour" />
                            </div>

                        </div>

                        <div className="form-group-three">

                            <div className="counter">
                                <label>Adults: </label>
                                <div className='flex'>
                                    <button className='indecbtn' type="button" onClick={() => handleAdultsChange(-1)}>-</button>
                                    <h1>{adults}</h1>
                                    <button className='indecbtn' type="button" onClick={() => handleAdultsChange(1)}>+</button>
                                </div>
                            </div>

                            <div className="counter">
                                <label>Children: </label>
                                <div className='flex'>
                                    <button className='indecbtn' type="button" onClick={() => handleChildrenChange(-1)}>-</button>
                                    <h1>{children}</h1>
                                    <button className='indecbtn' type="button" onClick={() => handleChildrenChange(1)}>+</button>
                                </div>
                            </div>

                            <div className="flex">
                                <label>Cabin class</label>
                                <select className="idun">
                                    <option>Economy</option>
                                    <option>Business</option>
                                    <option>First</option>
                                </select>
                            </div>

                        </div>

                        <button className='procedbtn' type="button" onClick={() => window.open("https://www.skyscanner.com/", "_blank")}>Search flights</button>
                    </div>
                </>
            ) : (
                <>
                    <div className="search-hotels-container">
                        <div className="form-group-hotels">
                            <input
                                placeholder="Hotel names..."
                                type="text"
                                className="textInputone scndinput"
                                onChange={handleHotelChange}
                                onKeyDown={handleEnterPress}
                            />

                            {toSuggestions.length > 0 && (
                                <ul className="suggestions">
                                    {toSuggestions.map((suggestion, index) => (
                                        <li key={index} onClick={() => selectHotelSuggestion(suggestion)}>
                                            {suggestion.name} - {suggestion.code} - {suggestion.city}, {suggestion.country}
                                        </li>
                                    ))}
                                </ul>
                            )}

                            <div className="flexx">
                                <input
                                    placeholder="From"
                                    type="date"
                                    className="textInputone scndinputdate"
                                    // value={from}
                                    // onChange={handleFromChange}
                                    onKeyDown={handleEnterPress}
                                />
                                <input
                                    placeholder="Till"
                                    type="date"
                                    className="textInputone scndinputdate"
                                    // value={from}
                                    // onChange={handleFromChange}
                                    onKeyDown={handleEnterPress}
                                />
                            </div>
                        </div>

                        <div className="form-group-four">
                            <div className="counter">
                                <label>Adults: </label>
                                <div className='flex'>
                                    <button className='indecbtn' type="button" onClick={() => handleAdultsChange(-1)}>-</button>
                                    <h1>{adults}</h1>
                                    <button className='indecbtn' type="button" onClick={() => handleAdultsChange(1)}>+</button>
                                </div>
                            </div>
                            <div className="counter">
                                <label>Children: </label>
                                <div className='flex'>
                                    <button className='indecbtn' type="button" onClick={() => handleChildrenChange(-1)}>-</button>
                                    <h1>{children}</h1>
                                    <button className='indecbtn' type="button" onClick={() => handleChildrenChange(1)}>+</button>
                                </div>
                            </div>
                        </div>
                        
                        <button className='procedbtn' type="button" onClick={() => window.open("https://www.skyscanner.com/", "_blank")}>Search hotels</button>
                    </div>
                </>
            )}
        </div>
    );
}

export default SearchForm;
