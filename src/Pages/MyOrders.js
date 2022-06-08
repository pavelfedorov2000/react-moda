import React from 'react';
import { useSelector } from 'react-redux';
import { OrderTableItem } from '../Components';
import emptyIcon from '../assets/images/icons/empty-catalog.svg';
import OrderDetail from './OrderDetail';
import { Switch } from 'react-router-dom';
import { Route } from 'react-router-dom';

function MyOrders({ setTitle }) {

  const { totalPrice } = useSelector(({ cart }) => cart);
  const { data } = useSelector(({ order }) => order);

  return (
    <>
      {Object.keys(data).length == 0 ?
        <div className="empty-page">
          <img className="empty-page__img" src={emptyIcon} alt="иконка"
            width="100" height="100" />
          <div className="empty-page__text">Список заказов пуст</div>
        </div> :
        <div className="profile-page__orders order-table">
          <OrderTableItem setTitle={setTitle} totalPrice={totalPrice} items={data.items} {...data} />
        </div>
      }
    </>
  );
}

//<Switch>
// <Route path="/profile/orders/order-detail" component={OrderDetail} />
//</Switch>

export default MyOrders;