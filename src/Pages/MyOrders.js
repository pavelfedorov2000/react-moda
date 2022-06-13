import React from 'react';
import { useSelector } from 'react-redux';
import { OrderTableItem } from '../Components';
import emptyIcon from '../assets/images/icons/empty-catalog.svg';
import { useRouteMatch } from 'react-router-dom/cjs/react-router-dom.min';

function MyOrders({ setTitle, to }) {

  let { path, url } = useRouteMatch();

  //const { totalPrice } = useSelector(({ cart }) => cart);
  const { data } = useSelector(({ order }) => order);

  return (
    <>
      {data.length == 0 ?
        <div className="empty-page">
          <img className="empty-page__img" src={emptyIcon} alt="иконка"
            width="100" height="100" />
          <div className="empty-page__text">Список заказов пуст</div>
        </div> :
        <div className="profile-page__orders order-table">
          {data.map((order, index) => (
            <OrderTableItem to={to} url={url} key={order.id} index={index} setTitle={setTitle} totalPrice={order.totalPrice} items={order.items} {...order} />
          ))}
        </div>
      }
    </>
  );
}

export default MyOrders;