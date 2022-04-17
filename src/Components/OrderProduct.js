import React from 'react';
import basketProductUrl from '../assets/images/content/basket-product-01.jpg';

function OrderProduct() {
    return (
        <div className="order-product">
            <div className="order-product__img">
                <img src={basketProductUrl} alt="фото" />
            </div>
            <h6 className="product-title order-product__title">Пальто LORIATA Wander Yellow</h6>
            <dl className="product-list order-product__list">
                <div>
                    <dt>Артикул:</dt>
                    <dd>MP002XW08J2L</dd>
                </div>
                <div>
                    <dt>Цвет:</dt>
                    <dd>бежевый</dd>
                </div>
                <div>
                    <dt>Размер:</dt>
                    <dd>42</dd>
                </div>
                <div>
                    <dt>Количество:</dt>
                    <dd>1</dd>
                </div>
            </dl>
        </div>
    );
}

export default OrderProduct;