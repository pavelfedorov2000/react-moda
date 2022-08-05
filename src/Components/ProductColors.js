import React from 'react';
import ProductColor from './ProductColor';

function ProductColors() {

    const productColors = React.useMemo(() => [{
        name: 'золотой',
        hex: '#FFB156',
        gradient: 'linear-gradient(135deg, #FFB156 0%, rgba(255, 177, 86, 0) 100%);',
    }, {
        name: 'голубой',
        hex: '#8BCDFF',
        gradient: 'linear-gradient(143.84deg, #8BCDFF 18.75%, rgba(139, 205, 255, 0) 90.76%);',
    }, {
        name: 'зеленый',
        hex: '#3DB800',
        gradient: 'linear-gradient(145.49deg, #3DB800 6.37%, rgba(61, 184, 0, 0) 93.63%);',
    }, {
        name: 'бордовый',
        hex: '#90011B',
        gradient: 'linear-gradient(140.19deg, #90011B 22.16%, rgba(144, 1, 27, 0) 91.48%);'
    }], []);

    return (
        <div className="product-color product-card-form__color">
            <div className="product-color__row">
                <div className="product-card-form__title product-color__title">Цвет:</div>
                <div className="product-color__items">
                    {productColors.map((color, i) => (
                        <ProductColor key={color.hex} {...color} index={i} />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default ProductColors;