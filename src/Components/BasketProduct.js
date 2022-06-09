import classNames from 'classnames';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function BasketProduct({ id, articul, name, brand, size, sizes, price, imageUrl, color, discount, isFavorite, onRemoveItem, onPlusItem, onMinusItem, totalCount, totalPrice, totalDiscount, onClickRemoveFavorite, onClickAddFavorite }) {

  const handleRemoveCartItem = () => {
    onRemoveItem(id);
  }
  const handleMinusCartItem = () => {
    onMinusItem(id);
  }
  const handlePlusCartItem = () => {
    onPlusItem(id);
  }

  const [favorite, setFavorite] = useState(false);

  let obj;
  const onAddFavoriteProduct = () => {
    setFavorite(true);
    obj = {
      id,
      name,
      brand,
      imageUrl,
      price,
      color,
      sizes,
      discount,
      isFavorite: true
    };
    onClickAddFavorite(obj);
  }

  const onRemoveFavoriteProduct = () => {
    setFavorite(false);
    onClickRemoveFavorite(id);
  }

  return (
    <div className="basket-table__item basket-product">
      <Link to={`/product-card/${id}`} className="basket-product__img">
        <img src={imageUrl} alt="фото" />
      </Link>
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
      <div className="basket-product__buttons">
        <button onClick={handleRemoveCartItem} className="basket-product__btn basket-product__btn--delete" type="button">
          <svg viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g opacity="0.8">
              <path
                d="M8.26018 0.916504L4.99935 4.17734L1.73852 0.916504L0.916016 1.739L4.17685 4.99984L0.916016 8.26067L1.73852 9.08317L4.99935 5.82234L8.26018 9.08317L9.08268 8.26067L5.82185 4.99984L9.08268 1.739L8.26018 0.916504Z"
                fill="#101112" />
            </g>
          </svg>
          <span>Удалить</span>
        </button>
        {favorite || isFavorite ?
          <button onClick={onRemoveFavoriteProduct} className="basket-product__btn basket-product__btn--favorite" type="button">
            <svg viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M4.8107 8.4963L4.81072 8.49625L4.80354 8.49379C4.08775 8.24832 3.12853 7.67452 2.35329 6.82545C1.58257 5.98132 1.02051 4.89635 1.02051 3.62091C1.02051 2.43666 1.97787 1.47925 3.14967 1.47925C3.72137 1.47925 4.25163 1.70161 4.64462 2.09796L4.99967 2.45605L5.35473 2.09796C5.74773 1.70161 6.27797 1.47925 6.84968 1.47925C8.02096 1.47925 8.97884 2.44032 8.97884 3.62091C8.97884 4.89855 8.41668 5.98347 7.64615 6.8269C6.87106 7.67533 5.91188 8.24823 5.19581 8.49379L5.1958 8.49373L5.18865 8.4963C5.15481 8.50849 5.09099 8.52092 4.99967 8.52092C4.90836 8.52092 4.84454 8.50849 4.8107 8.4963Z"
                stroke="#479458" />
            </svg>
            <span style={{ color: '#479458' }}>В избранном</span>
          </button>
          :
          <button onClick={onAddFavoriteProduct} className="basket-product__btn basket-product__btn--favorite" type="button">
            <svg viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M4.8107 8.4963L4.81072 8.49625L4.80354 8.49379C4.08775 8.24832 3.12853 7.67452 2.35329 6.82545C1.58257 5.98132 1.02051 4.89635 1.02051 3.62091C1.02051 2.43666 1.97787 1.47925 3.14967 1.47925C3.72137 1.47925 4.25163 1.70161 4.64462 2.09796L4.99967 2.45605L5.35473 2.09796C5.74773 1.70161 6.27797 1.47925 6.84968 1.47925C8.02096 1.47925 8.97884 2.44032 8.97884 3.62091C8.97884 4.89855 8.41668 5.98347 7.64615 6.8269C6.87106 7.67533 5.91188 8.24823 5.19581 8.49379L5.1958 8.49373L5.18865 8.4963C5.15481 8.50849 5.09099 8.52092 4.99967 8.52092C4.90836 8.52092 4.84454 8.50849 4.8107 8.4963Z"
                stroke="#101112" />
            </svg>
            <span>В избранное</span>
          </button>
        }
      </div>
      <div className="basket-product__counter counter">
        <button onClick={handleMinusCartItem} className="minus-btn counter__btn" type="button">
          <svg viewBox="0 0 10 2" fill="none" xmlns="http://www.w3.org/2000/svg">
            <line y1="1" x2="10" y2="1" stroke="#9B9B9B" stroke-width="2" />
          </svg>
        </button>
        <input className="counter__input" type="number" value={totalCount} readonly />
        <button onClick={handlePlusCartItem} className="plus-btn counter__btn" type="button">
          <svg viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
            <line y1="5" x2="10" y2="5" stroke="#9B9B9B" stroke-width="2" />
            <line x1="5" y1="10" x2="5" stroke="#9B9B9B" stroke-width="2" />
          </svg>
        </button>
      </div>
      <div className="basket-product__prices">
        <div className="basket-product__prices-wrap">
          {discount != undefined &&
            <div className="price old-price basket-product__old-price">{`${Math.floor(totalPrice * 100 / (100 - discount))} ₽`}</div>
          }
          <div className={classNames('price', {
            'new-price': discount != undefined
          })}>{`${totalPrice} ₽`}</div>
        </div>
        {discount != undefined &&
          <div className="basket-product__discount">
            <div className="basket-product__discount-percent">{`Сумма скидки ${discount}%`}</div>
            <div className="basket-product__discount-sum">{`(${totalDiscount} ₽)`}</div>
          </div>
        }
      </div>
    </div>
  );
}

export default BasketProduct;