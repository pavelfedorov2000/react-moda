import React, { useState } from 'react';
import checkIcon from '../assets/images/icons/check.svg';

function SubscribeOption({ option, item, i, checkedSubscribeSelect, onCheckSubscribeSelect, onClickChangeSubscribe, obj }) {
    console.log(checkedSubscribeSelect);

    const selectHandler = (e) => {

        onCheckSubscribeSelect();

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

        obj.items[e.target.getAttribute('name')] = !checkedSubscribeSelect;

        console.log(obj);

        //obj.items[item] = checkedSubscribeCheckbox;
        onClickChangeSubscribe(obj);
    }

    return (
        <label key={option} class="select__option" tabindex="0" data-value={option}>
            <input onChange={selectHandler} class="select__input" type="radio" name={item} checked={(i === 0 ? checkedSubscribeSelect : !checkedSubscribeSelect) ? true : false} />
            <span class="radio-style">
                <span style={{ backgroundImage: `url(${checkIcon})` }}></span>
            </span>
            <span class="select__option-text">{option}</span>
        </label>
    );
}

export default SubscribeOption;