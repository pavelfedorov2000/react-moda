import React, { useState } from 'react';
import checkIcon from '../assets/images/icons/check.svg';

function SubscribeCheck({ id, title, items, item, onCheckSubscribeCheckbox, checkedSubscribeCheckbox, onClickChangeSubscribe }) {
  //console.log(item, checkedSubscribeCheckbox);

  let obj = {
    id,
    title,
    items
  }

  const checkboxHandler = () => {

    onCheckSubscribeCheckbox();

    let newItems = {
      ...items,
      [item]: !checkedSubscribeCheckbox
    }
    console.log(newItems);
    //newItems[item] = !checkedSubscribeCheckbox;
    //console.log(newItems);

    obj = {
      ...obj,
      items: newItems
    }

    console.log(obj);

    //obj.items[item] = checkedSubscribeCheckbox;
    onClickChangeSubscribe(obj);
  }

  return (
    <label class="sale-popup__form-check">
      <input onChange={checkboxHandler} class="check-box" type="checkbox" checked={checkedSubscribeCheckbox ? true : false} />
      <span class="check-style">
        <span style={{ backgroundImage: `url(${checkIcon})` }}></span>
      </span>
      <span class="check-text">по {item}</span>
    </label>
  );
}

export default SubscribeCheck;