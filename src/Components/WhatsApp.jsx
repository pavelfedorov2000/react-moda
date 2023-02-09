import classNames from 'classnames';
import React from 'react';
import whatsapp from '../assets/images/icons/whatsup.svg';

const WhatsApp = ({ className }) => {
    return (
        <a href="https://wa.me/" className={classNames('whatsapp', className && className)} target="_blank" rel="nofollow">
            <img className="icon" src={whatsapp} alt={whatsapp} width="16" height="16" />
            <span className="whatsapp__text">WhatsApp</span>
        </a>
    );
}

export default WhatsApp;