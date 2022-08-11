import React, { useState } from 'react';
import './SiteButton.css';

const SiteButton = ({ children }) => {
    return (
        <button className="site-button">
            {children}
        </button>
    );
}
 
export default SiteButton;