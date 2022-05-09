import React from 'react';
import { Link } from 'react-router-dom';
import { FormRow } from '../Components';


function BasketTotal({ totalPrice, totalDiscount, handleOrderSubmit, orderData }) {

    const loyaltyPercent = 3; // Программа лояльности
    const loyaltyDiscount = totalPrice * loyaltyPercent / 100;
    const overallSum = totalPrice - totalDiscount - loyaltyDiscount; // Итого
    console.log(totalPrice, totalDiscount);

    return (
        <div className="basket-total">
            <div className="basket-total__auth">
                <button className="basket-total__auth-btn" type="button">Авторизуйтесь</button> чтобы воспользоваться скидкой по программе лояльности.
            </div>
            <form className="subscirbe-form">
                <FormRow actionText="Ввести промокод" placeholder="Введите промокод" />
            </form>
            <dl className="basket-total__list">
                <div className="basket-total__list-item">
                    <dt>Товаров на сумму</dt>
                    <dd>{`${totalPrice ? totalPrice : 0} ₽`}</dd>
                </div>
                <div className="basket-total__list-item">
                    <dt>Скидка</dt>
                    <dd><span>{`-${totalPrice ? totalDiscount : 0} ₽`}</span></dd>
                </div>
                <div className="basket-total__list-item">
                    <dt>Доставка</dt>
                    <dd>0 ₽</dd>
                </div>
                {(totalPrice && loyaltyPercent) ?
                    <div className="basket-total__list-item">
                        <dt>{`Программа лояльности (${loyaltyPercent}%)`}</dt>
                        <dd><span>{`-${loyaltyDiscount} ₽`}</span></dd>
                    </div> : null
                }
            </dl>
            <div className="basket-total__overall">
                <div className="basket-total__overall-title">Итого</div>
                <div className="basket-total__overall-sum">{`${totalPrice ? overallSum : 0} ₽`}</div>
            </div>


            <Link onClick={(e) => {
                e.preventDefault();
                handleOrderSubmit(orderData);
            }} to="/order-success" className="btn basket-total__btn">Отправить заказ</Link>
            <div className="basket-total__agreement">
                Нажимая на кнопку «Отправить заказ», вы принимаете условия <Link to="/not-found">Публичной оферты.</Link>
            </div>
        </div>
    );
}
//<button onClick={(e) => {
//e.preventDefault();
//handleOrderSubmit(orderData);
//            }} className = "btn basket-total__btn" type = "submit" > Отправить заказ</button >
//<Link onClick={handleOrderSubmit} to="/order-success" className="btn basket-total__btn">Отправить заказ</Link>
//<div className="basket-total__list-item">
//<dt>Промокод (10%)</dt>
//<dd><span>-5 210 ₽</span></dd>
//</div >

export default BasketTotal;