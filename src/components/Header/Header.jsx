import React, { useState, useEffect } from 'react';
import SiteButton from './../UI/SiteButton/SiteButton';
import bannerImage from './../../images/header-banner.jpg';
import userAvatar from './../../images/user.jpg';
import emailIcon from './../../images/icons/email.svg';
import phoneIcon from './../../images/icons/phone.svg';
import './Header.css';

const Header = () => {
    const userData = { // jsx рендерится на основании каких-то данных (здесь имитируем это)
        name: 'Ricardo Cooper',
        avatar: userAvatar
    };

    return (
        <header className="header">
            <div className="header__banner">
                <img 
                    className="header__banner-image" 
                    src={bannerImage} 
                    alt="banner image" 
                />
            </div>

            <div className="header__user-panel">
                <div className="header__user-info">
                    <div className="header__avatar">
                        <img src={userData.avatar} alt="user avatar" />
                    </div>

                    <div className="header__user-name">
                        {userData.name}
                    </div>
                </div>

                <div className="header__controls">
                    <div className="header__button">
                        <SiteButton>
                            <div className="header__button-inner header__button-inner--email">
                                <img src={emailIcon} alt="email icon" />
                                <span className="header__button-text">Message</span>
                            </div>
                        </SiteButton>
                    </div>

                    <div className="header__button">
                        <SiteButton>
                            <div className="header__button-inner header__button-inner--phone">
                                <img src={phoneIcon} alt="phone icon" />
                                <span className="header__button-text">Call</span>
                            </div>
                        </SiteButton>
                    </div>
                </div>
            </div>

        </header>
    );
}
 
export default Header;