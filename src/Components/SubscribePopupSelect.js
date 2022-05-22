import React, { useState } from 'react';
import checkIcon from '../assets/images/icons/check.svg';
import classNames from 'classnames';

function SubscribePopupSelect({ options, item }) {

    const [activeSelect, setActiveSelect] = useState(false);
    const onToggleSelect = () => {
        setActiveSelect(!activeSelect);
    }

    const [checkedSubscribe, setCheckedSubscribe] = useState(false);
    const onCheckSubscribe = () => {
        setCheckedSubscribe(!checkedSubscribe);
    }

    return (
        <div class="select">
            <div onClick={onToggleSelect} className={classNames('select__title', {
                'active': activeSelect
            })}>
                <span>{options[0]}</span>
                <svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3.128 6L9.2 11.979L10 12.6338L10.8 11.9791L16.872 6L18 7.11218L10 15L2 7.11218L3.128 6Z" fill="#505661" />
                </svg>
            </div>
            {activeSelect &&
                <div class="select__content">
                    {options.map((option, i) => (
                        <label key={`select-option_${i}`} class="select__option" tabindex="0" data-value={option}>
                            <input onChange={onCheckSubscribe} class="select__input" type="radio" name={`${item}_mailing`} checked={checkedSubscribe ? true : false} />
                            <span class="radio-style">
                                <span style={{ backgroundImage: `url(${checkIcon})` }}></span>
                            </span>
                            <span class="select__option-text">{option}</span>
                        </label>
                    ))}
                </div>
            }
        </div>
    );
}

export default SubscribePopupSelect;