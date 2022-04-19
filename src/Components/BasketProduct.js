import React from 'react';

function BasketProduct(props) {
  return (
    <div className="basket-product drop-basket__product">
      <a href="#" className="basket-product__img">
        <img src="" alt="фото" />
      </a>
      <a href="#" className="product-title basket-product__title">
        Пальто LORIATA Wander Yellow
      </a>
      <dl className="product-list basket-product__list">
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
      </dl>
      <div className="drop-basket__product-wrap">
        <button className="basket-product__btn basket-product__btn--delete" type="button">
          <svg viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g opacity="0.8">
              <path
                d="M8.26018 0.916504L4.99935 4.17734L1.73852 0.916504L0.916016 1.739L4.17685 4.99984L0.916016 8.26067L1.73852 9.08317L4.99935 5.82234L8.26018 9.08317L9.08268 8.26067L5.82185 4.99984L9.08268 1.739L8.26018 0.916504Z"
                fill="#101112" />
            </g>
          </svg>
          Удалить
        </button>
        <div className="basket-product__counter counter">
          <button className="minus-btn counter__btn" type="button">
            <svg viewBox="0 0 10 2" fill="none" xmlns="http://www.w3.org/2000/svg">
              <line y1="1" x2="10" y2="1" stroke="#9B9B9B" strokeWidth="2" />
            </svg>
          </button>
          <input className="counter__input" type="number" value="1" readonly />
          <button className="plus-btn counter__btn" type="button">
            <svg viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
              <line y1="5" x2="10" y2="5" stroke="#9B9B9B" strokeWidth="2" />
              <line x1="5" y1="10" x2="5" stroke="#9B9B9B" strokeWidth="2" />
            </svg>
          </button>
        </div>
        <div className="basket-product__prices-wrap drop-basket__product-prices">
          <div className="price old-price basket-product__old-price">47 800 ₽</div>
          <div className="price new-price">38 240 ₽</div>
        </div>
      </div>
    </div>
  );
}

export default BasketProduct;