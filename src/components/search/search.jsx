import './search.css'
import React, { useState } from 'react';
import { TbReplace } from "react-icons/tb";
import airports from '../../../airports.json';
import skyscanner from '../../assets/poweredbyskyscanner.png'
import { MdOutlineFlight } from "react-icons/md";
import { MdOutlineHotel } from "react-icons/md";
import { TbPlaneDeparture } from "react-icons/tb";
import { TbPlaneArrival } from "react-icons/tb";
import { useTranslation } from 'react-i18next';

const SearchForm = () => {

    const { t } = useTranslation();

    const minValue = 0;
    const maxValue = 10;
    const [to, setTo] = useState('');
    const [from, setFrom] = useState('');
    const [hotel, setHotel] = useState('');
    const [adultCount, setAdultCount] = useState(1);
    const [childCount, setChildCount] = useState(0);
    const [activeTab, setActiveTab] = useState('flights');
    const [toSuggestions, setToSuggestions] = useState([]);
    const [fromSuggestions, setFromSuggestions] = useState([]);
    const [hotelSuggestions, setHotelSuggestions] = useState([]);
    const [selectedToCode, setSelectedToCode] = useState('GYD');
    const [selectedFromCode, setSelectedFromCode] = useState('');


    const swapInputs = () => {
        const temp = from;
        setFrom(to);
        setTo(temp);
        setSelectedFromCode(selectedToCode);
        setSelectedToCode(selectedFromCode);
    };

    const handleIncrement = (type) => {
        if (type === 'adult' && adultCount < maxValue) {
            setAdultCount(adultCount + 1);
        } else if (type === 'child' && childCount < maxValue) {
            setChildCount(childCount + 1);
        }
    };

    const handleDecrement = (type) => {
        if (type === 'adult' && adultCount > minValue) {
            setAdultCount(adultCount - 1);
        } else if (type === 'child' && childCount > minValue) {
            setChildCount(childCount - 1);
        }
    };


    const handleFromChange = (e) => {
        const value = e.target.value;
        setFrom(value);
        if (value.length > 1) {
            setFromSuggestions(
                airports.filter((airport) =>
                    airport.name.toLowerCase().includes(value.toLowerCase()) ||
                    airport.code.toLowerCase().includes(value.toLowerCase()) ||
                    airport.country.toLowerCase().includes(value.toLowerCase()) ||
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
                    airport.country.toLowerCase().includes(value.toLowerCase()) ||
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
                    airport.country.toLowerCase().includes(value.toLowerCase()) ||
                    airport.city.toLowerCase().includes(value.toLowerCase())
                )
            );
        } else {
            setToSuggestions([]);
        }
    };

    const selectFromSuggestion = (suggestion) => {
        setFrom(`${suggestion.name} - ${suggestion.city} - ${suggestion.country}`);
        setSelectedFromCode(suggestion.code); // Update selected airport code
        setFromSuggestions([]);
    };

    const selectHotelSuggestion = (suggestion) => {
        setHotel(`${suggestion.name} - ${suggestion.code} - ${suggestion.city} - ${suggestion.country}`);
        setHotelSuggestions([]);
    };

    const selectToSuggestion = (suggestion) => {
        setTo(`${suggestion.name} - ${suggestion.city} - ${suggestion.country}`);
        setSelectedToCode(suggestion.code); // Update selected airport code
        setToSuggestions([]);
    };

    const handleEnterPress = (e) => {
        if (e.key === 'Enter' && fromSuggestions.length > 0) {
            setFrom(`${fromSuggestions[0].name} - ${fromSuggestions[0].city}, ${fromSuggestions[0].country}`);
            setSelectedFromCode(fromSuggestions[0].code); // Update selected airport code
            setFromSuggestions([]);
        } else if (e.key === 'Enter' && toSuggestions.length > 0) {
            setTo(`${toSuggestions[0].name} - ${toSuggestions[0].city}, ${toSuggestions[0].country}`);
            setSelectedToCode(toSuggestions[0].code); // Update selected airport code
            setToSuggestions([]);
        } else if (e.key === 'Enter' && hotelSuggestions.length > 0) {
            setHotel(`${hotelSuggestions[0].name} - ${hotelSuggestions[0].city}, ${hotelSuggestions[0].country}`);
            setHotelSuggestions([]);
        }
    };
    

    const handleTabChange = (tab) => {
        setActiveTab(tab);
    };

    const handleClick = (e) => {
        if (!from || !to) {
            e.preventDefault();
            alert("Please select both 'from' and 'to' locations.");
        } else {
            window.open("https://www.skyscanner.com/", "_blank");
        }
    };

    return (
        <div className='search-container'>
            <div className="tab-container">
                <div className="btnhldr">
                    <button className={`tab ${activeTab === 'flights' ? 'active' : ''}`} onClick={() => handleTabChange('flights')}><MdOutlineFlight />{t('search.flightsTab')}</button>
                    <button className={`tab ${activeTab === 'hotels' ? 'active' : ''}`} onClick={() => handleTabChange('hotels')}><MdOutlineHotel /> {t('search.hotelsTab')}</button>
                </div>
                <img src={skyscanner} className='skyscanner' />
            </div>

            {activeTab === 'flights' ? (
                <>
                    <div className="form-group-one">
                        <div className="coontainer">
                            <form>
                                <label>
                                    <input type="radio" name="radio" />
                                    <span>{t('search.oneway')}</span>
                                </label>
                                <label>
                                    <input type="radio" name="radio" />
                                    <span>{t('search.twoway')}</span>
                                </label>
                                <label>
                                    <input type="radio" name="radio" />
                                    <span>{t('search.multicity')}</span>
                                </label>
                            </form>
                        </div>
                    </div>

                    <div className="form-group-two">
                        <div className="inputholder">
                            <div className="autocomplete">
                                <div className="mydiv">
                                    <input
                                        placeholder="From"
                                        className="input-style inputuno"
                                        type="text"
                                        value={from}
                                        onChange={handleFromChange}
                                        onKeyDown={handleEnterPress}
                                    />
                                    {fromSuggestions.length > 0 && (
                                        <ul className="suggestions">
                                            {fromSuggestions.map((suggestion, index) => (
                                                <li key={index} onClick={() => selectFromSuggestion(suggestion)}>
                                                    <TbPlaneDeparture />
                                                    {suggestion.name} - {suggestion.code} - {suggestion.city}, {suggestion.country}
                                                </li>
                                            ))}
                                        </ul>
                                    )}
                                    <p className='selectedfromcode'>{selectedFromCode}</p>
                                </div>
                                <div className="iconholder" onClick={swapInputs}>
                                    <TbReplace color='black' size={25} />
                                </div>

                                <div className="mydiv">
                                    <input
                                        placeholder="Heydar Aliyev International Airport - Baku, Azerbaijan"
                                        className="input-style"
                                        type="text"
                                        value={to}
                                        onChange={handleToChange}
                                        onKeyDown={handleEnterPress}
                                    />
                                    {toSuggestions.length > 0 && (
                                        <ul className="suggestions">
                                            {toSuggestions.map((suggestion, index) => (
                                                <li key={index} onClick={() => selectToSuggestion(suggestion)}>
                                                    <TbPlaneArrival />
                                                    {suggestion.name} - {suggestion.code} - {suggestion.city}, {suggestion.country}
                                                </li>
                                            ))}
                                        </ul>
                                    )}
                                    <p className='selectedtocode'>{selectedToCode}</p>
                                </div>
                            </div>

                            <div className="flex">
                                <input
                                    placeholder="Enter text here"
                                    className="input-style inputtres"
                                    type="date"
                                />

                                <input
                                    placeholder="Enter text here"
                                    className="input-style inputcuatro"
                                    type="date"
                                />
                            </div>
                        </div>

                        <div className="form-group-three">

                            <div className="ccontainer">
                                <div className="input-row">
                                    <div className="title">
                                        <h2 className="label">{t('search.adults')}</h2>
                                    </div>
                                    <div className="input">
                                        <button
                                            className="minus"
                                            aria-label="Decrease by one"
                                            onClick={() => handleDecrement('adult')}
                                            disabled={adultCount === minValue}
                                        >
                                            <svg width="16" height="2" viewBox="0 0 16 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <line y1="1" x2="16" y2="1" stroke="#0064FE" strokeWidth="2" className="icon" />
                                            </svg>
                                        </button>
                                        <div className={`number ${adultCount === minValue ? 'dim' : ''}`}>
                                            {adultCount}
                                        </div>
                                        <button
                                            className="plus"
                                            aria-label="Increase by one"
                                            onClick={() => handleIncrement('adult')}
                                            disabled={adultCount >= maxValue}
                                        >
                                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className="icon">
                                                <line x1="8" y1="0" x2="8" y2="16" stroke="#0064FE" strokeWidth="2" />
                                                <line y1="8" x2="16" y2="8" stroke="#0064FE" strokeWidth="2" />
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                                <div className="input-row">
                                    <div className="title">
                                        <h2 className="label">{t('search.children')}</h2>
                                    </div>
                                    <div className="input">
                                        <button
                                            className="minus"
                                            aria-label="Decrease by one"
                                            onClick={() => handleDecrement('child')}
                                            disabled={childCount === minValue}
                                        >
                                            <svg width="16" height="2" viewBox="0 0 16 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <line y1="1" x2="16" y2="1" stroke="#0064FE" strokeWidth="2" className="icon" />
                                            </svg>
                                        </button>
                                        <div className={`number ${childCount === minValue ? 'dim' : ''}`}>
                                            {childCount}
                                        </div>
                                        <button
                                            className="plus"
                                            aria-label="Increase by one"
                                            onClick={() => handleIncrement('child')}
                                            disabled={childCount >= maxValue}
                                        >
                                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className="icon">
                                                <line x1="8" y1="0" x2="8" y2="16" stroke="#0064FE" strokeWidth="2" />
                                                <line y1="8" x2="16" y2="8" stroke="#0064FE" strokeWidth="2" />
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                            </div>

                            <div className="aradio-inputs">
                                <label className="aradio">
                                    <input type="radio" name="radio" />
                                    <span className="nname">{t('search.economy')}</span>
                                </label>
                                <label className="aradio">
                                    <input type="radio" name="radio" />
                                    <span className="nname">{t('search.buisness')}</span>
                                </label>

                                <label className="aradio">
                                    <input type="radio" name="radio" />
                                    <span className="nname">{t('search.firstclass')}</span>
                                </label>
                            </div>

                        </div>

                        <button className='procedbtn' type="button" onClick={handleClick}>{t('search.searchFlight')}</button>
                    </div>
                </>
            ) : (
                <>
                    <div className="search-hotels-container">
                        <div className="autocompletehotel">
                            <div className="form-group-hotels">
                                <input
                                    placeholder="To"
                                    type="text"
                                    className="scndinput"
                                    value={hotel}
                                    onChange={handleHotelChange}
                                    onKeyDown={handleEnterPress}
                                />
                                {hotelSuggestions.length > 0 && (
                                    <ul className="suggestions">
                                        {hotelSuggestions.map((suggestion, index) => (
                                            <li key={index} onClick={() => selectHotelSuggestion(suggestion)}>
                                                {suggestion.name} - {suggestion.code} - {suggestion.city} - {suggestion.country}
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </div>
                        </div>
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

                        <div className="form-group-four">
                            <div className="ccontainer">
                                <div className="input-row">
                                    <div className="title">
                                        <h2 className="label">Adults</h2>
                                    </div>
                                    <div className="input">
                                        <button
                                            className="minus"
                                            aria-label="Decrease by one"
                                            onClick={() => handleDecrement('adult')}
                                            disabled={adultCount === minValue}
                                        >
                                            <svg width="16" height="2" viewBox="0 0 16 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <line y1="1" x2="16" y2="1" stroke="#0064FE" strokeWidth="2" className="icon" />
                                            </svg>
                                        </button>
                                        <div className={`number ${adultCount === minValue ? 'dim' : ''}`}>
                                            {adultCount}
                                        </div>
                                        <button
                                            className="plus"
                                            aria-label="Increase by one"
                                            onClick={() => handleIncrement('adult')}
                                            disabled={adultCount >= maxValue}
                                        >
                                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className="icon">
                                                <line x1="8" y1="0" x2="8" y2="16" stroke="#0064FE" strokeWidth="2" />
                                                <line y1="8" x2="16" y2="8" stroke="#0064FE" strokeWidth="2" />
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                                <div className="input-row">
                                    <div className="title">
                                        <h2 className="label">Children</h2>
                                    </div>
                                    <div className="input">
                                        <button
                                            className="minus"
                                            aria-label="Decrease by one"
                                            onClick={() => handleDecrement('child')}
                                            disabled={childCount === minValue}
                                        >
                                            <svg width="16" height="2" viewBox="0 0 16 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <line y1="1" x2="16" y2="1" stroke="#0064FE" strokeWidth="2" className="icon" />
                                            </svg>
                                        </button>
                                        <div className={`number ${childCount === minValue ? 'dim' : ''}`}>
                                            {childCount}
                                        </div>
                                        <button
                                            className="plus"
                                            aria-label="Increase by one"
                                            onClick={() => handleIncrement('child')}
                                            disabled={childCount >= maxValue}
                                        >
                                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className="icon">
                                                <line x1="8" y1="0" x2="8" y2="16" stroke="#0064FE" strokeWidth="2" />
                                                <line y1="8" x2="16" y2="8" stroke="#0064FE" strokeWidth="2" />
                                            </svg>
                                        </button>
                                    </div>
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
