import React from 'react';
import { Link } from 'react-router-dom';
import SubscribeForm from './SubscribeForm';


function BasketTotal() {
  return (
    <div className="basket-total">
      <div className="basket-total__auth">
        <button className="basket-total__auth-btn" type="button">Авторизуйтесь</button> чтобы воспользоваться
        скидкой по
        программе
        лояльности.
      </div>
      <SubscribeForm actionText="Ввести промокод" placeholder="Введите промокод" />
      <dl className="basket-total__list">
        <div className="basket-total__list-item">
          <dt>Товаров на сумму</dt>
          <dd>52 100 ₽</dd>
        </div>
        <div className="basket-total__list-item">
          <dt>Скидка</dt>
          <dd><span>-9 560 ₽</span></dd>
        </div>
        <div className="basket-total__list-item">
          <dt>Доставка</dt>
          <dd>0 ₽</dd>
        </div>
        <div className="basket-total__list-item">
          <dt>Промокод (10%)</dt>
          <dd><span>-5 210 ₽</span></dd>
        </div>
        <div className="basket-total__list-item">
          <dt>Программа лояльности (3%)</dt>
          <dd><span>-1 563 ₽</span></dd>
        </div>
      </dl>
      <div className="basket-total__overall">
        <div className="basket-total__overall-title">Итого</div>
        <div className="basket-total__overall-sum">42 540 ₽</div>
      </div>
      <button className="btn basket-total__btn" type="submit">Отправить заказ</button>
      <div className="basket-total__agreement">
        Нажимая на кнопку «Отправить заказ», вы принимаете условия <Link to="/not-found">Публичной оферты.</Link>
      </div>
    </div>
  );
}

export default BasketTotal;