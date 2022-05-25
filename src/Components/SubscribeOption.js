import React, { useState } from 'react';
import checkIcon from '../assets/images/icons/check.svg';

function SubscribeOption({ option, item, i, checkedSubscribeSelect, onCheckSubscribeSelect }) {

  return (
    <label key={option} class="select__option" tabindex="0" data-value={option}>
      <input onChange={onCheckSubscribeSelect} class="select__input" type="radio" name={item} checked={(i === 0 ? checkedSubscribeSelect : !checkedSubscribeSelect) ? true : false} />
      <span class="radio-style">
        <span style={{ backgroundImage: `url(${checkIcon})` }}></span>
      </span>
      <span class="select__option-text">{option}</span>
    </label>
  );
}

export default SubscribeOption;