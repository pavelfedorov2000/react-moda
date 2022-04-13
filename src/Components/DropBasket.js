import classNames from 'classnames';
import React from 'react';
import basketProduct from '../assets/images/content/basket-product-01.jpg';

function DropBasket({ visibleAsideBasket, onCloseAsideBasket }) {
    return (
        <div id="drop-basket" className={classNames('aside-popup drop-basket aside-popup--basket', {
            'active': visibleAsideBasket
        })}>
            <button onClick={onCloseAsideBasket} className="aside-popup__close" type="button">
                <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M23.1871 7L16 14.1871L8.81286 7L7 8.81286L14.1871 16L7 23.1871L8.81286 25L16 17.8129L23.1871 25L25 23.1871L17.8129 16L25 8.81286L23.1871 7Z"
                        fill="#505661" />
                </svg>
            </button>
            <div className="drop-basket__body">
                <div className="drop-basket__inner">
                    <h3 className="aside-popup__title">Ваша корзина</h3>
                    <div className="drop-basket__products">
                        <div className="basket-product drop-basket__product">
                            <a href="#" className="basket-product__img">
                                <img src={basketProduct} alt="фото" />
                            </a>
                            <a href="#" className="product-title basket-product__title">Пальто LORIATA Wander Yellow</a>
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
                                    <div className="old-price basket-product__old-price">47 800 ₽</div>
                                    <div className="new-price">38 240 ₽</div>
                                </div>
                            </div>
                        </div>
                        <div className="basket-product drop-basket__product">
                            <a href="#" className="basket-product__img">
                                <img src={basketProduct} alt="фото" />
                            </a>
                            <a href="#" className="product-title basket-product__title">Пальто LORIATA Wander Yellow</a>
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
                                <div className="drop-basket__product-prices">
                                    <div className="basket-product__price drop-basket__product-price">
                                        4 300
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="drop-basket__total">
                        <div className="drop-basket__total-title">Товаров на сумму</div>
                        <div className="drop-basket__total-sum">42 540 ₽</div>
                    </div>
                    <div className="drop-basket__empty">
                        Вы еще не добавили товары в корзину
                    </div>
                </div>
                <a href="#" className="drop-basket__btn btn">
                    Оформить заказ
                    <svg viewBox="0 0 56 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M55.7071 8.70711C56.0976 8.31658 56.0976 7.68342 55.7071 7.29289L49.3431 0.928932C48.9526 0.538408 48.3195 0.538408 47.9289 0.928932C47.5384 1.31946 47.5384 1.95262 47.9289 2.34315L53.5858 8L47.9289 13.6569C47.5384 14.0474 47.5384 14.6805 47.9289 15.0711C48.3195 15.4616 48.9526 15.4616 49.3431 15.0711L55.7071 8.70711ZM0 9H55V7H0V9Z"
                            fill="white" />
                    </svg>
                </a>
            </div>
        </div>
    );
}

export default DropBasket;