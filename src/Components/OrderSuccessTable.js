import classNames from 'classnames';
import React from 'react';
import { Link } from 'react-router-dom';

function OrderSuccessTable({ totalPrice, date, personal, delivery, payment, className }) {
  //console.log(personal);
  const { name, surname, phone, email, city } = personal;
  return (
    <div className={classNames('order-details-table', className)}>
      <div className="order-details-table__item">
        <div className="order-details-table__item-title">Заказ:</div>
        <p>{`№RU${date.split('.').join('')}`}</p>
        <p>от <time dateTime={date.split('.').reverse().join('-')}>{date}</time></p>
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
        <div className="order-details-table__item-wrap">
          <div className="order-details-table__item-title">
            Итого:
            <span>{`${totalPrice} ₽`}</span>
          </div>
          <span className="order-status">Не оплачен</span>
        </div>
        {className === 'profile-page__order-table' &&
          <Link to="/not-found" className="btn order-details-table__btn">Оплатить</Link>
        }
      </div>
      {className === 'order-success-table__head' &&
        <div className="order-details-table__item">
          <Link to="/not-found" className="btn order-details-table__btn">Оплатить</Link>
        </div>
      }
    </div>
  );
}

export default OrderSuccessTable;