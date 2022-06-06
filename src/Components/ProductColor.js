import React from 'react';

function ProductColor() {

    const productColors = [
        '135deg, #FFB156 0%, rgba(255, 177, 86, 0) 100%',
        '143.84deg, #8BCDFF 18.75%, rgba(139, 205, 255, 0) 90.76%',
        '145.49deg, #3DB800 6.37%, rgba(61, 184, 0, 0) 93.63%',
        '140.19deg, #90011B 22.16%, rgba(144, 1, 27, 0) 91.48%'
    ];

    return (
        <div className="product-color product-card-form__color">
            <div className="product-color__row">
                <div className="product-card-form__title product-color__title">Цвет:</div>
                <div className="product-color__items">
                    {productColors.map(color => (
                        <label className="product-color__item">
                            <input className="radio-box" type="radio" name="color" />
                            <span className="radio-style radio-style--checked" style="border-color: #FFB156;">
                                <span style={{ background: `linear-gradient(${color});` }}></span>
                            </span>
                        </label>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default ProductColor;