import classNames from 'classnames';
import React from 'react';

function DropBasketProduct({ id, articul, name, brand, size, price, imageUrl, color, discount, onRemoveItem, onPlusItem, onMinusItem, totalCount, totalPrice, setBasketProduct }) {

  const handleRemoveCartItem = () => {
    setBasketProduct(false);
    onRemoveItem(id);
  }
  const handleMinusCartItem = () => {
    onMinusItem(id);
  }
  const handlePlusCartItem = () => {
    onPlusItem(id);
  }

  //let activeProduct = products.filter(product => product.id == id)[0];

  return (
    <div className="basket-product drop-basket__product">
      <a href="#" className="basket-product__img"><img src={imageUrl} alt="фото" /></a>
      <a href="#" className="product-title basket-product__title">{name} {brand}</a>
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
        <div className="basket-product__counter counter">
          <button onClick={handleMinusCartItem} className="minus-btn counter__btn" type="button">
            <svg viewBox="0 0 10 2" fill="none" xmlns="http://www.w3.org/2000/svg">
              <line y1="1" x2="10" y2="1" stroke="#9B9B9B" strokeWidth="2" />
            </svg>
          </button>
          <input className="counter__input" type="number" value={totalCount} readonly />
          <button onClick={handlePlusCartItem} className="plus-btn counter__btn" type="button">
            <svg viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
              <line y1="5" x2="10" y2="5" stroke="#9B9B9B" strokeWidth="2" />
              <line x1="5" y1="10" x2="5" stroke="#9B9B9B" strokeWidth="2" />
            </svg>
          </button>
        </div>
        <div className="basket-product__prices-wrap drop-basket__product-prices">
          {discount != undefined &&
            <div className="price old-price basket-product__old-price">{`${Math.floor(totalPrice * 100 / (100 - discount))} ₽`}</div>
          }
          <div className={classNames('price', {
            'new-price': discount != undefined
          })}>{`${totalPrice} ₽`}</div>
        </div>
      </div>
    </div>
  );
}

export default DropBasketProduct;