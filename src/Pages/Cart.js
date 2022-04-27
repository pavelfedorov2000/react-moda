import React from 'react';
//import { useDispatch, useSelector } from 'react-redux';
import { BasketTable, BasketTotal, Checkout } from '../Components';
//import { Link } from 'react-router-dom';
//import { clearCart, removeCartItem, minusPizza, plusPizza } from '../redux/actions/cart';
//import cartEmptyImage from '../assets/img/empty-cart.png';


function Cart({ generateCrumbs }) {
  const crumbs = ['Главная', 'Женщинам', 'Одежда', 'Верхняя одежда', 'Пальто', 'Пальто LORIATA Wander Yellow', 'Ваша корзина'];

  //const dispatch = useDispatch();

  //const { totalPrice, totalCount, items } = useSelector(({ cart }) => cart);


  return (
    <main className="page basket-page">
      <div className="container">
        <nav className="breadcrumbs" aria-label="breadcrumbs">
          <ol className="breadcrumbs__list">
            {crumbs.map((crumb, i) => () => generateCrumbs(crumbs, crumb, i))}
          </ol>
        </nav>

        <h1 className="title page__title">{crumbs[crumbs.length - 1]}</h1>

        <form action="#">
          <div className="basket-page__body">
            <BasketTable />
            <BasketTotal />
            <Checkout />
          </div>
        </form>
      </div>
    </main>
  );
}

export default Cart;