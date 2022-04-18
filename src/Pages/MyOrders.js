import React from 'react';
import orderItemUrl from '../assets/images/content/order-product.jpg';

function MyOrders() {
  return (
    <div className="profile-page__orders order-table">
      <div className="order-item order-table__item">
        <header className="order-item__header">
          <div className="order-item__header-wrap">
            <div className="order-item__title">Заказ от <time datetime="2021-11-24">24 ноября
              2021</time>, №RU125487-985471</div>
            <div className="order-item__price">42 540 ₽</div>
          </div>
          <div className="order-item__header-buttons">
            <span className="btn order-item__status-label">Передан в доставку</span>
            <button className="order-item__follow-link">
              <span>Отследить посылку</span>
              <svg viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M3 10.295L6.79 6.5L7.20508 6L6.79008 5.5L3 1.705L3.705 1L8.705 6L3.705 11L3 10.295Z"
                  fill="#101112" />
              </svg>
            </button>
          </div>
        </header>
        <div className="order-item__body">
          <div className="order-item__content">
            <div className="order-item__delivery-date">
              Дата доставки: <time datetime="2021-11-25">25 ноября 2021</time>
            </div>
            <div className="order-item__delivery-place">
              Доставка: <span>в пункт выдачи</span>
            </div>
            <a href="#" className="order-item__order-details">Подробнее о заказе</a>
          </div>
          <div className="order-item__images">
            <img className="order-item__img" src={orderItemUrl} alt="фото" />
            <img className="order-item__img" src={orderItemUrl} alt="фото" />
          </div>
        </div>
      </div>
      <div className="order-item order-table__item">
        <header className="order-item__header">
          <div className="order-item__header-wrap">
            <div className="order-item__title">Заказ от <time datetime="2021-11-24">24 ноября
              2021</time>, №RU125487-985483</div>
            <div className="order-item__price">37 400 ₽</div>
          </div>
          <div className="order-item__header-buttons">
            <span className="btn order-item__status-label">Передан в доставку</span>
            <button className="order-item__follow-link">
              <span>Отследить посылку</span>
              <svg viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M3 10.295L6.79 6.5L7.20508 6L6.79008 5.5L3 1.705L3.705 1L8.705 6L3.705 11L3 10.295Z"
                  fill="#101112" />
              </svg>
            </button>
          </div>
        </header>
        <div className="order-item__body">
          <div className="order-item__content">
            <div className="order-item__delivery-date">
              Дата доставки: <time datetime="2021-11-22">22 ноября 2021</time>
            </div>
            <div className="order-item__delivery-place">
              Доставка: <span>в пункт выдачи</span>
            </div>
            <a href="#" className="order-item__order-details">Подробнее о заказе</a>
          </div>
          <div className="order-item__images">
            <img className="order-item__img" src={orderItemUrl} alt="фото" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyOrders;