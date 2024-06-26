import React from 'react';
import './UpperPart.css';
import main from '../../Assets/main.png';
import HEADER from '../Header/Header.jsx'
import { useTranslation } from 'react-i18next';

function header() {

    const { t } = useTranslation();
    

    return (

        <div className="upperpart">
            <HEADER />
            <div className="containerupr">
                <div className="txtprt">
                    <div className="txtprtrtra">
                        <h1 className='txtprtfrsth'>{t('azerbaijan.title')} <span className='yellow'>.</span></h1>
                        <h1 className='txtprtscndh'>{t('azerbaijan.subtitle')}</h1>
                        <p className='txtprtp'>{t('azerbaijan.description')}</p>
                    </div>
                    <div className="mainpicprt">
                        <img src={main} className='main' alt="Main" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default header