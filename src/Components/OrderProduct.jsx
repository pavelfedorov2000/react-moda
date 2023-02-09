import React from 'react';

function OrderProduct({ articul, name, brand, size, imageUrl, color, totalCount }) {
    return (
        <div className="order-product">
            <div className="order-product__img">
                <img src={imageUrl} alt={`${name} ${brand}`} />
            </div>
            <div className="product-title order-product__title">{name} {brand}</div>
            <dl className="product-list order-product__list">
                <div>
                    <dt>Артикул:</dt>
                    <dd>{articul}</dd>
                </div>
                <div>
                    <dt>Цвет:</dt>
                    <dd>{color}</dd>
                </div>
                <div>
                    <dt>Размер:</dt>
                    <dd>{size}</dd>
                </div>
                <div>
                    <dt>Количество:</dt>
                    <dd>{totalCount}</dd>
                </div>
            </dl>
        </div>
    );
}

export default OrderProduct;