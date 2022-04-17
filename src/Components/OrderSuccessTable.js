import React from 'react';

function OrderSuccessTable() {
    return (
        <div className="order-success-table">
            <div className="order-success-table__head order-details-table">
                <div className="order-details-table__item">
                    <div className="order-details-table__item-title">Заказ:</div>
                    <p>№RU125487-985471</p>
                    <p>от <time datetime="2021-11-24">24 ноября 2021</time></p>
                </div>
                <div className="order-details-table__item">
                    <div className="order-details-table__item-title">Получатель:</div>
                    <p>Иванова Иванка</p>
                    <p>post@mail.ru</p>
                    <p>+7 (999) 999-99-99 </p>
                    <p>г.Санкт-Петербург</p>
                </div>
                <div className="order-details-table__item">
                    <div className="order-details-table__item-title">Доставка:</div>
                    <p>В пункт выдачи</p>
                </div>
                <div className="order-details-table__item">
                    <div className="order-details-table__item-title">Оплата:</div>
                    <p>Картой онлайн</p>
                </div>
                <div className="order-details-table__item">
                    <div>
                        <div className="order-details-table__item-title">
                            Итого:
                            <span>42 540 ₽</span>
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