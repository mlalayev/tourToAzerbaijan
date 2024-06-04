import React from 'react';
import './alert.css';

const CustomAlert = ({ message, onClose }) => {
    return (
        <div className="custom-alert-overlay">
            <div className="custom-alert">
                <div className="custom-alert-message">{message}</div>
                <button className="custom-alert-button" onClick={onClose}>
                    OK
                </button>
            </div>
        </div>
    );
};

export default CustomAlert;