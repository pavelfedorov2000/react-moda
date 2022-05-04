import React from 'react';

function ProductSizes({ availableSizes, sizes, checkedSize, onCheckSize }) {

  return (
    <div className="product-sizes">
      <div className="product-card-form__title product-sizes__title">Размер:</div>
      <div className="product-sizes__row">
        {availableSizes.map(size => (
          <label key={size} className="product-sizes__item">
            <input onChange={() => onCheckSize(size)} className="radio-box" type="radio" name="size" checked={size == checkedSize && availableSizes.includes(sizes[sizes.indexOf(size)]) ? true : false} disabled={!availableSizes.includes(sizes[sizes.indexOf(size)]) ? true : false} />
            <span className="radio-text">{size}</span>
          </label>
        ))}
      </div>
      <a data-fancybox href="#product-sizes-popup" className="popup-link">
        Таблица размеров
      </a>
    </div>
  );
}

export default ProductSizes;