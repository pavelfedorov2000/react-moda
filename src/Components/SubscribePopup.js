import React, { useState } from 'react';
import SubscribePopupSelect from './SubscribePopupSelect';
import checkIcon from '../assets/images/icons/check.svg';


function SubscribePopup({ title }) {

    const saleItems = ['e-mail', 'sms'];
    const options = ['Да', 'Нет'];

    return (
        <div class="popup sale-popup">
            <div class="sale-popup__title">{title}</div>
            <form action="#" class="sale-popup__form">
                <div class="sale-popup__form-items">
                    {saleItems.map((item, i) => (
                        <div key={item} class="sale-popup__form-item">
                            <label class="sale-popup__form-check">
                                <input class="check-box" type="checkbox" checked />
                                <span class="check-style">
                                    <span style={{ backgroundImage: `url(${checkIcon})` }}></span>
                                </span>
                                <span class="check-text">по {item}</span>
                            </label>
                            <SubscribePopupSelect options={options} item={item} />
                        </div>
                    ))}
                </div>
                <button class="btn sale-popup__form-btn" type="submit">Подписаться</button>
            </form>
        </div>
    );
}

export default SubscribePopup;