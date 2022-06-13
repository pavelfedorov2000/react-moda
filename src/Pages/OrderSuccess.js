import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { OrderSuccessTable, OrderProduct } from '../Components';

function OrderSuccess() {
  const crumbs = ['Главная', 'Женщинам', 'Верхняя одежда', 'Пальто', 'Пальто LORIATA Wander Yellow', 'Ваша корзина', 'Спасибо за заказ'];
  function generateOrderSuccessCrumbs(crumb, i) {
    if (i == 0) {
      return <Link to="/">{crumb}</Link>
    } else if (i == crumbs.length - 2) {
      return <Link to="/cart">{crumb}</Link>
    } else if (i == crumbs.length - 1) {
      return <span>{crumb}</span>
    } else {
      return <Link to="/catalog">{crumbs[i]}</Link>
    }
  }

  //const { totalPrice } = useSelector(({ cart }) => cart);
  const { data } = useSelector(({ order }) => order);
  const currentOrder = data[data.length - 1];

  return (
    <main className="page">
      <div className="container">
        <nav className="breadcrumbs" aria-label="breadcrumbs">
          <ol className="breadcrumbs__list">
            {crumbs.map((crumb, i) => (
              <li className="breadcrumbs__item">
                {generateOrderSuccessCrumbs(crumb, i)}
              </li>
            ))}
          </ol>
        </nav>

        <h1 className="title page__title">{`${crumbs[crumbs.length - 1]}!`}</h1>

        <div className="page__subtitle">
          Наш менеджер свяжется с вами в ближайшее время
        </div>

        <div className="order-success-table">
          <OrderSuccessTable totalPrice={currentOrder.totalPrice} {...currentOrder} className="order-success-table__head" />
          <div className="order-success-table__body">
            <div className="product-title order-success-table__title">Товары:</div>
            <div className="order-success-table__products">
              {Object.keys(currentOrder.items).map((product, i) => (
                <OrderProduct key={`product_${i + 1}`} {...currentOrder.items[product].items[0]} totalCount={currentOrder.items[product].items.length} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default OrderSuccess;