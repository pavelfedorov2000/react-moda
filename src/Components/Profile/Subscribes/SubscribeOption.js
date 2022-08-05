import React from 'react';
import checkIcon from '../../../assets/images/icons/check.svg';

function SubscribeOption({ option, item, i, checkedSubscribeSelect, onCheckSubscribeSelect, onClickChangeSubscribe, obj }) {

    const selectHandler = (e) => {

        onCheckSubscribeSelect();

        obj.items[e.target.getAttribute('name')] = !checkedSubscribeSelect;

        onClickChangeSubscribe(obj);
    }

    return (
        <label key={option} className="select__option" tabindex="0" data-value={option}>
            <input onChange={selectHandler} className="select__input" type="radio" name={item} checked={(i === 0 ? checkedSubscribeSelect : !checkedSubscribeSelect) ? true : false} />
            <span className="radio-style">
                <span style={{ backgroundImage: `url(${checkIcon})` }}></span>
            </span>
            <span className="select__option-text">{option}</span>
        </label>
    );
}

export default SubscribeOption;