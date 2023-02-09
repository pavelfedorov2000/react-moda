import React, { useContext } from 'react';
import { AppContext } from '../context';

const ProductSizes = ({ sizes, checkedSize, onCheckSize }) => {
    const { sizesList } = useContext(AppContext);

    return (
        <div className="product-sizes">
            <div className="product-card-form__title product-sizes__title">Размер:</div>
            <div className="product-sizes__row">
                {sizesList.map(size => (
                    <label key={size.toString()} className="product-sizes__item">
                        <input onChange={() => onCheckSize(size)} className="radio-box" type="radio" name="size" checked={size === checkedSize && sizesList.includes(sizes[sizes.indexOf(size)]) ? true : false} disabled={!sizesList.includes(sizes[sizes.indexOf(size)]) ? true : false} />
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