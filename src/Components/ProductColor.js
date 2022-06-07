import React, { useState } from 'react';

function ProductColor({ hex, index }) {

  const [checkedColor, setCheckedColor] = useState(false);
  const onCheckColor = () => {
    setCheckedColor(!checkedColor);
  }

  return (
    <label key={hex.split('#')[1]} className="product-color__item">
      <input onChange={onCheckColor} className="radio-box" type="radio" name="color" checked={index == 0 || checkedColor ? true : false} />
      <span className="radio-style" style={{ borderColor: `${hex}` }}>
        <span style={{ background: `${hex}` }}></span>
      </span>
    </label>
  );
}

export default ProductColor;