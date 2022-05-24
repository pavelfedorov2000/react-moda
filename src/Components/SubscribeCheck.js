import React from 'react';
import checkIcon from '../assets/images/icons/check.svg';

function SubscribeCheck({ item }) {
  return (
    <label class="sale-popup__form-check">
      <input class="check-box" type="checkbox" checked readOnly />
      <span class="check-style">
        <span style={{ backgroundImage: `url(${checkIcon})` }}></span>
      </span>
      <span class="check-text">по {item}</span>
    </label>
  );
}

export default SubscribeCheck;