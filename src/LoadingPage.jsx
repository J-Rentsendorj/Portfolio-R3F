import React from 'react';
import './style.css';

function LoadingPage({ handleEnter }) {
    return (
        <div id='loading-container'>
            <button className="glowing-btn" onClick={handleEnter}>
                <span className='glowing-txt'>E<span className='faulty-letter'>N</span>TER</span>
            </button>
        </div>
    );
}

export default LoadingPage;



