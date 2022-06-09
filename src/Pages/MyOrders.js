import React from 'react';
import { useSelector } from 'react-redux';
import { OrderTableItem } from '../Components';
import emptyIcon from '../assets/images/icons/empty-catalog.svg';

function MyOrders({ setTitle }) {

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
            <OrderTableItem key={order.id} index={index} setTitle={setTitle} totalPrice={order.totalPrice} items={order.items} {...order} />
          ))}
        </div>
      }
    </>
  );
}

//<Switch>
// <Route path="/profile/orders/order-detail" component={OrderDetail} />
//</Switch>

export default MyOrders;