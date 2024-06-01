import React, { useState } from 'react';
import './search.css'
import airports from '../../../airports.json'; // Ensure this path is correct

const SearchForm = () => {
    const [from, setFrom] = useState('');
    const [to, setTo] = useState('');
    const [fromSuggestions, setFromSuggestions] = useState([]);
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
        setFrom(`${suggestion.name} - ${suggestion.code} - ${suggestion.city}, ${suggestion.country}`);
        setFromSuggestions([]);
    };

    const selectToSuggestion = (suggestion) => {
        setTo(`${suggestion.name} - ${suggestion.code} - ${suggestion.city}, ${suggestion.country}`);
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
            <div className="tab-container">
                <button className={`tab ${activeTab === 'flights' ? 'active' : ''}`} onClick={() => handleTabChange('flights')}>Flights</button>
                <button className={`tab ${activeTab === 'hotels' ? 'active' : ''}`} onClick={() => handleTabChange('hotels')}>Hotels</button>
            </div>

            {activeTab === 'flights' ? (
                <>
                    <div className="form-group-one">
                        <div>
                            <input type="radio" id="option1" name="options" value="option1" />
                            <label htmlFor="option1">Option 1</label>
                        </div>
                        <div>
                            <input type="radio" id="option2" name="options" value="option2" />
                            <label htmlFor="option2">Option 2</label>
                        </div>
                        <div>
                            <input type="radio" id="option3" name="options" value="option3" />
                            <label htmlFor="option3">Option 3</label>
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
                                            <li key={index} onClick={() => selectToSuggestion(suggestion)}>
                                                {suggestion.name} - {suggestion.code} - {suggestion.city}, {suggestion.country}
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </div>
                            <div className="autocomplete">
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
                            <input placeholder="Type Here" type="date" className="textInputthree" />
                            <input placeholder="Type Here" type="date" className="textInputfour" />
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
                    <div className="form-group">
                        <input type="text" placeholder="Destination" />
                        <input type="date" placeholder="Check-in" />
                        <input type="date" placeholder="Check-out" />
                    </div>
                    <div className="form-group-four">
                        <div>
                            <label>Adults</label>
                            <input type="number" min="1" defaultValue="1" />
                        </div>
                        <div>
                            <label>Children</label>
                            <input type="number" min="0" defaultValue="0" />
                        </div>
                    </div>
                    <button type="button" onClick={() => window.location.href = '/hotels'}>Search hotels</button>
                </>
            )}
        </div>
    );
}

export default SearchForm;
