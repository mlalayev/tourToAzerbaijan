import React, { useState } from 'react';
import './search.css';

function SearchForm() {
    const [isFlight, setIsFlight] = useState(true);

    return (
        <div className="search-container">
            <div className="tab-header">
                <button
                    className={`tab ${isFlight ? 'active' : ''}`}
                    onClick={() => setIsFlight(true)}
                >
                    Flights
                </button>
                <button
                    className={`tab ${!isFlight ? 'active' : ''}`}
                    onClick={() => setIsFlight(false)}
                >
                    Hotels
                </button>
            </div>
            <form className="search-form">
                {isFlight ? (
                    <>
                        <div className="form-group-one">
                            <div>
                                <input type="radio" id="option1" name="options" value="option1" />
                                <label for="option1">Option 1</label>
                            </div>
                            <div>
                                <input type="radio" id="option1" name="options" value="option1" />
                                <label for="option1">Option 1</label>
                            </div>
                            <div>
                                <input type="radio" id="option1" name="options" value="option1" />
                                <label for="option1">Option 1</label>
                            </div>
                        </div>
                        <div className="form-group-two">
                            <input type="text" placeholder="From" />
                            <input type="text" placeholder="To" />
                            <input type="date" placeholder="Depart" />
                            <input type="date" placeholder="Return" />
                        </div>
                        <div className="form-group-three">
                            <label>Adults 16+ years</label>
                            <input type="number" min="1" defaultValue="1" />
                            <label>Children 0-15 years</label>
                            <input type="number" min="0" defaultValue="0" />
                            <label>Cabin class</label>
                            <select>
                                <option>Economy</option>
                                <option>Business</option>
                                <option>First</option>
                            </select>
                        </div>
                        <button type="button" onClick={() => window.location.href = '/flights'}>Search flights</button>
                    </>
                ) : (
                    <>
                        <div className="form-group">
                            <input type="text" placeholder="Destination" />
                            <input type="date" placeholder="Check-in" />
                            <input type="date" placeholder="Check-out" />
                        </div>
                        <div className="form-group">
                            <label>Adults</label>
                            <input type="number" min="1" defaultValue="1" />
                            <label>Children</label>
                            <input type="number" min="0" defaultValue="0" />
                        </div>
                        <button type="button" onClick={() => window.location.href = '/hotels'}>Search hotels</button>
                    </>
                )}
            </form>
        </div>
    );
}

export default SearchForm;
