import React from 'react';

function OrderSuccessTable({ totalPrice, date, personal, delivery, payment }) {
  const [name, surname, phone, email, city] = { personal };
  return (
    <div className="order-success-table">
      <div className="order-success-table__head order-details-table">
        <div className="order-details-table__item">
          <div className="order-details-table__item-title">Заказ:</div>
          <p>№RU125487-985471</p>
          <p>от <time datetime={date.split('.').reverse().join('-')}>{date}</time></p>
        </div>
        <div className="order-details-table__item">
          <div className="order-details-table__item-title">Получатель:</div>
          <p>{name} {surname}</p>
          <p>{email}</p>
          <p>{phone}</p>
          <p>{`г.${city}`}</p>
        </div>
        <div className="order-details-table__item">
          <div className="order-details-table__item-title">Доставка:</div>
          <p>{delivery}</p>
        </div>
        <div className="order-details-table__item">
          <div className="order-details-table__item-title">Оплата:</div>
          <p>{payment}</p>
        </div>
        <div className="order-details-table__item">
          <div>
            <div className="order-details-table__item-title">
              Итого:
              <span>{`${totalPrice} ₽`}</span>
            </div>
            <span className="order-status">Не оплачен</span>
          </div>
        </div>
        <div className="order-details-table__item">
          <a href="#" className="btn order-details-table__btn">Оплатить</a>
        </div>
      </div>
    </div>
  );
}

export default OrderSuccessTable;