import React, { useContext } from 'react';
import checkIcon from '../../../assets/images/icons/check.svg';
import { SubscribeItemContext, SubscribesContext } from '../../../context';

function SubscribeCheck({ onCheckSubscribeCheckbox, checkedSubscribeCheckbox }) {
    const { obj, handleChangeSubscribe } = useContext(SubscribesContext);
    const { item } = useContext(SubscribeItemContext);

    const checkboxHandler = () => {
        onCheckSubscribeCheckbox();

        obj.items[item] = !checkedSubscribeCheckbox;

        handleChangeSubscribe(obj);
    }

    return (
        <label className="sale-popup__form-check">
            <input onChange={checkboxHandler} className="check-box" type="checkbox" name={item} checked={checkedSubscribeCheckbox ? true : false} />
            <span className="check-style">
                <span style={{ backgroundImage: `url(${checkIcon})` }}></span>
            </span>
            <span className="check-text">по {item}</span>
        </label>
    );
}

export default SubscribeCheck;