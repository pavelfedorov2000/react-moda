import classNames from 'classnames';
import React from 'react';
import { Link } from 'react-router-dom';

function OrderSuccessTable({ totalPrice, date, personal, delivery, payment, className }) {

    const { name, surname, phone, email, city } = personal;

    // Захардкоженая логика отрезания слова "Оплата", если выбран пункт "Оплата при получении" (чтобы не было дубляжа с заголовком) - чисто для практики
    const payArr = payment.split(' ');
    const payWord = payArr[0];
    payArr.splice(0, 1);
    const payStr = payArr.map((el, i) => i == 0 ? el.split('').map((letter, j) => j == 0 ? letter.toUpperCase() : letter).join('') : el).join(' ');

    const deliveryArr = delivery.split(' ');
    const deliveryWord = deliveryArr[0];
    const deliverySpliced = deliveryArr.splice(1, 3);
    const deliveryStr = deliverySpliced.map((el, i) => i == 0 ? el.split('').map((letter, j) => j == 0 ? letter.toUpperCase() : letter).join('') : el).join(' ');

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
                <p>{deliveryWord === 'Доставка' ? deliveryStr : delivery}</p>
            </div>

            <div className="order-details-table__item">
                <div className="order-details-table__item-title">Оплата:</div>
                <p>{payWord === 'Оплата' ? payStr : payment}</p>
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
                    <Link to="/pay" className="btn order-details-table__btn">Оплатить</Link>
                }
            </div>

            {className === 'order-success-table__head' &&
                <div className="order-details-table__item">
                    <Link to="/orders" className="btn order-details-table__btn">Оплатить</Link>
                </div>
            }
        </div>
    );
}

export default OrderSuccessTable;