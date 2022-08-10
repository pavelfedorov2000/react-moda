import classNames from 'classnames';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AppContext } from '../context';
import Button from './Button';
import Counter from './Counter';

function DropBasketProduct({ id, articul, name, brand, size, imageUrl, color, discount, totalCount, totalPrice }) {
    const { onRemoveItem, onMinusItem, onPlusItem } = useContext(AppContext);

    const handleRemoveCartItem = () => {
        onRemoveItem(id);
    }

    const handleMinusCartItem = () => {
        onMinusItem(id);
    }

    const handlePlusCartItem = () => {
        onPlusItem(id);
    }

    return (
        <div className="basket-product drop-basket__product">
            <Link to={`/product-card/${id}`} className="basket-product__img"><img src={imageUrl} alt="фото" /></Link>

            <Link to={`/product-card/${id}`} className="product-title basket-product__title">{name} {brand}</Link>

            <dl className="product-list basket-product__list">
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
            </dl>

            <div className="drop-basket__product-wrap">
                <Button clickHandler={handleRemoveCartItem} className="basket-product__btn basket-product__btn--delete" transparent remove icon type="button" />

                <Counter className="basket-product__counter" totalCount={totalCount} handleMinusCartItem={handleMinusCartItem} handlePlusCartItem={handlePlusCartItem} />

                <div className="basket-product__prices-wrap drop-basket__product-prices">
                    {discount !== 0 &&
                        <div className="price old-price basket-product__old-price">{`${Math.floor(totalPrice * 100 / (100 - discount))} ₽`}</div>
                    }

                    <div className={classNames('price', {
                        'new-price': discount !== 0
                    })}>{`${totalPrice} ₽`}</div>
                </div>
            </div>
        </div>
    );
}

export default DropBasketProduct;