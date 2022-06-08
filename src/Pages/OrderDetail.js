import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { OrderProduct, OrderSuccessTable } from '../Components';

function OrderDetail() {

  //let { id } = useParams();

  const { totalPrice } = useSelector(({ cart }) => cart);
  const { data } = useSelector(({ order }) => order);

  //const activeOrder = data.items[Object.keys(data.items).filter(item => item == id)];
  //console.log(activeOrder);

  return (
    <>
      <OrderSuccessTable totalPrice={totalPrice} {...data} className="profile-page__order-table" />
      <div className="profile-page-goods">
        <div className="product-title profile-page-goods__title">Товары:</div>
        <div className="profile-page-goods__list">
          {Object.keys(data.items).map(product => (
            <OrderProduct {...data.items[product].items[0]} totalCount={data.items[product].items.length} />
          ))}
        </div>
      </div>
    </>
  );
}

export default OrderDetail;