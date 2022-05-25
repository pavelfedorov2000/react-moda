import React, { useState } from 'react';
import checkIcon from '../assets/images/icons/check.svg';

function SubscribeCheck({ item, onCheckSubscribeCheckbox, checkedSubscribeCheckbox, onClickChangeSubscribe, obj, name }) {
    console.log(checkedSubscribeCheckbox);

    const checkboxHandler = (e) => {

        onCheckSubscribeCheckbox();

        /* let newItems = {
            ...items,
        }
        console.log(e.target.getAttribute('name'));
        console.log(checkedSubscribeCheckbox);
        newItems[e.target.getAttribute('name')] = checkedSubscribeCheckbox;
        console.log(newItems);

        obj = {
            ...obj,
            items: newItems
        } */

        obj.items[e.target.getAttribute('name')] = !checkedSubscribeCheckbox;

        console.log(obj);

        //obj.items[item] = checkedSubscribeCheckbox;
        onClickChangeSubscribe(obj);
    }

    return (
        <label class="sale-popup__form-check">
            <input onChange={checkboxHandler} class="check-box" type="checkbox" name={name} checked={checkedSubscribeCheckbox ? true : false} />
            <span class="check-style">
                <span style={{ backgroundImage: `url(${checkIcon})` }}></span>
            </span>
            <span class="check-text">по {item}</span>
        </label>
    );
}

export default SubscribeCheck;