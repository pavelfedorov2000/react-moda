import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { FormRow } from '../Components';

function BasketTotal({ totalPrice, totalDiscount, handleOrderSubmit, orderData, onClearCart }) {
    const { data } = useSelector(({ order }) => order);
    const currentOrder = data[data.length - 1];
    //const personalData = currentOrder.personal || false;
    let valid = false;
    //valid = Object.keys(currentOrder.personal).some(item => item === undefined);

    const loyaltyPercent = 3; // Программа лояльности
    const loyaltyDiscount = totalPrice * loyaltyPercent / 100;
    const overallSum = totalPrice - totalDiscount - loyaltyDiscount; // Итого

    const onSubmitOrder = () => {
        handleOrderSubmit(orderData);
        onClearCart();
    }

    return (
        <div className="basket-total">
            <div className="basket-total__auth">
                <button className="basket-total__auth-btn" type="button">Авторизуйтесь</button> чтобы воспользоваться скидкой по программе лояльности.
            </div>
            <form action="#" className="subscirbe-form">
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

            <Link onClick={onSubmitOrder} to="/order-success" className="btn basket-total__btn">Отправить заказ</Link>
            <div className="basket-total__agreement">
                Нажимая на кнопку «Отправить заказ», вы принимаете условия <Link to="/not-found">Публичной оферты.</Link>
            </div>
        </div>
    );
}

export default BasketTotal;