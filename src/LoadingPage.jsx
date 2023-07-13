import React from 'react';
import './style.css';

function LoadingPage({ handleEnter }) {
    return (
        <div id='loading-container'>
            <button className="glowing-btn" onClick={handleEnter}>
                <span className='glowing-txt'>VOLUME W<span className='faulty-letter'>A</span>RNING</span>
            </button>
        </div>
    );
}

export default LoadingPage;



