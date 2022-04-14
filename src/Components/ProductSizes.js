import React from 'react';

function ProductSizes({ sizes }) {
    return (
        <div className="product-sizes">
            <div className="product-card-form__title product-sizes__title">Размер:</div>
            <div className="product-sizes__row">
                {sizes.map(size => (
                    <label key={size} className="product-sizes__item">
                        <input className="radio-box" type="radio" name="size" />
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