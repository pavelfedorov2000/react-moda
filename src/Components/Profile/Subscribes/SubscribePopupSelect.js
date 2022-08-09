import React, { useState } from 'react';
import classNames from 'classnames';
import SubscribeOption from './SubscribeOption';

function SubscribePopupSelect({ checkedSubscribeSelect, onCheckSubscribeSelect }) {

    const [activeSelect, setActiveSelect] = useState(false);
    const onToggleSelect = () => {
        setActiveSelect(!activeSelect);
    }

    const options = ['Да', 'Нет'];

    return (
        <div className="select">
            <div onClick={onToggleSelect} className={classNames('select__title', {
                'active': activeSelect
            })}>
                <span>{checkedSubscribeSelect ? options[0] : options[1]}</span>
                <svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3.128 6L9.2 11.979L10 12.6338L10.8 11.9791L16.872 6L18 7.11218L10 15L2 7.11218L3.128 6Z" fill="#505661" />
                </svg>
            </div>

            {activeSelect &&
                <div className="select__content">
                    {options.map((option, i) => (
                        <SubscribeOption key={option} checkedSubscribeSelect={checkedSubscribeSelect} onCheckSubscribeSelect={onCheckSubscribeSelect} option={option} i={i} />
                    ))}
                </div>
            }
        </div>
    );
}

export default SubscribePopupSelect;