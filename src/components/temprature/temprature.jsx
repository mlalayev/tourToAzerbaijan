import React from 'react';
import './Temprature.css';
import { useTranslation } from 'react-i18next';

function Temperature({ temperature, wind, location, weather, icon }) {

    const { t } = useTranslation();


    return (
        <div>
            <div id="card">
                <svg fill="none" viewBox="0 0 342 175" height="175" width="342" xmlns="http://www.w3.org/2000/svg" className="background">
                    <defs>
                        <linearGradient id="paint0_linear_103_640" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stopColor="#43c7b1" />
                            <stop offset="100%" stopColor="#05203C" />
                        </linearGradient>
                    </defs>
                    <path fill="url(#paint0_linear_103_640)" d="M0 66.4396C0 31.6455 0 14.2484 11.326 5.24044C22.6519 -3.76754 39.6026 0.147978 73.5041 7.97901L307.903 62.1238C324.259 65.9018 332.436 67.7909 337.218 73.8031C342 79.8154 342 88.2086 342 104.995V131C342 151.742 342 162.113 335.556 168.556C329.113 175 318.742 175 298 175H44C23.2582 175 12.8873 175 6.44365 168.556C0 162.113 0 151.742 0 131V66.4396Z"></path>
                </svg>
                <div className="cloud">
                    <img src={icon} alt="Weather Icon" />
                </div>
                <p className="main-text">{temperature}°</p>
                <div className="info">
                    <div className="info-left">
                        <p className="text-gray">{t('temp.Wind')}: {wind} km/h</p>
                        <p className='text-loc'>{location}</p>
                    </div>
                    <p className="info-right">{weather}</p>
                </div>
            </div>
        </div>
    );
}

export default Temperature;
