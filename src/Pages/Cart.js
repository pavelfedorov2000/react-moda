import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BasketTable, BasketTotal, Checkout } from '../Components';
import { Link } from 'react-router-dom';
import Sticky from "wil-react-sticky";
//import { clearCart, removeCartItem, minusPizza, plusPizza } from '../redux/actions/cart';
//import cartEmptyImage from '../assets/img/empty-cart.png';


function Cart() {
  const crumbs = ['Главная', 'Женщинам', 'Одежда', 'Верхняя одежда', 'Пальто', 'Пальто LORIATA Wander Yellow', 'Ваша корзина'];

  function generateCrumbs(crumbs, crumb, i) {
    switch (i) {
      case 0: {
        return <li className="breadcrumbs__item"><Link to="/">{crumb}</Link></li>
      }
      case (crumbs.length - 1): {
        return <li className="breadcrumbs__item"><span>{crumb}</span></li>
      }
      default: return <li className="breadcrumbs__item"><a href="#">{crumb}</a></li>
    }
  }

  const dispatch = useDispatch();
  const { totalPrice, totalDiscount, totalCount, items } = useSelector(({ cart }) => cart);
  console.log(items);
  console.log(totalPrice);
  console.log(totalCount);

  const [selectedDelivery, setSelectedDelivery] = useState(null);
  const [selectedPayment, setSelectedPayment] = useState(null);

  let personalData = {};

  const payment = {
    "Оплата при получении": "Наличными или банковской картой при получении",
    "Картой онлайн": "Перейти к оплате через сервис"
  }

  const deliveryOptions = ['Курьер', 'Доставка в пункты выдачи заказов и постаматы'];

  let orderData = {
    date: new Date().toLocaleString().split(',')[0],
    personal: personalData,
    delivery: deliveryOptions[selectedDelivery],
    payment: Object.keys(payment)[selectedPayment]
  };

  console.log(orderData);

  const handleOrderSubmit = orderData => {
    dispatch({
      type: 'SET_ORDER_DATA',
      payload: orderData
    });
  }

  //const dispatch = useDispatch();

  //const { totalPrice, totalCount, items } = useSelector(({ cart }) => cart);


  return (
    <main className="page basket-page">
      <div className="container">
        <nav className="breadcrumbs" aria-label="breadcrumbs">
          <ol className="breadcrumbs__list">
            {crumbs.map((crumb, i) => generateCrumbs(crumbs, crumb, i))}
          </ol>
        </nav>

        <h1 className="title page__title">{crumbs[crumbs.length - 1]}</h1>

        <form action="#">
          <div className="basket-page__body">
            <BasketTable totalPrice={totalPrice} totalCount={totalCount} items={items} dispatch={dispatch} />
            <Sticky containerSelectorFocus=".basket-page__body" offsetTop={20} stickyEnableRange={[1025, Infinity]}>
              <BasketTotal totalPrice={totalPrice} totalDiscount={totalDiscount} handleOrderSubmit={handleOrderSubmit} />
            </Sticky>
            <Checkout orderData={orderData} personalData={personalData} payment={payment} deliveryOptions={deliveryOptions} selectedDelivery={selectedDelivery} setSelectedDelivery={setSelectedDelivery} selectedPayment={selectedPayment} setSelectedPayment={setSelectedPayment} />
          </div>
        </form>
      </div>
    </main>
  );
}

export default Cart;