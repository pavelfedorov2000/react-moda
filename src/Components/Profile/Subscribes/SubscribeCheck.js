import React from 'react';
import checkIcon from '../../../assets/images/icons/check.svg';

function SubscribeCheck({ item, onCheckSubscribeCheckbox, checkedSubscribeCheckbox, onClickChangeSubscribe, obj, name }) {

    const checkboxHandler = (e) => {

        onCheckSubscribeCheckbox();

        obj.items[e.target.getAttribute('name')] = !checkedSubscribeCheckbox;

        onClickChangeSubscribe(obj);
    }

    return (
        <label className="sale-popup__form-check">
            <input onChange={checkboxHandler} className="check-box" type="checkbox" name={name} checked={checkedSubscribeCheckbox ? true : false} />
            <span className="check-style">
                <span style={{ backgroundImage: `url(${checkIcon})` }}></span>
            </span>
            <span className="check-text">по {item}</span>
        </label>
    );
}

export default SubscribeCheck;