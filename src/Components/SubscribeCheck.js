import React, { useState } from 'react';
import checkIcon from '../assets/images/icons/check.svg';

function SubscribeCheck({ item, onCheckSubscribeCheckbox, checkedSubscribeCheckbox, onClickChangeSubscribe, obj, name }) {
  //console.log(checkedSubscribeCheckbox);

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

    //console.log(obj);

    //obj.items[item] = checkedSubscribeCheckbox;
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