import React from 'react';
import { useSelector } from 'react-redux';
import { OrderTableItem, EmptyPage } from '../../Components';

function MyOrders({ empty }) {
    const { data } = useSelector(({ order }) => order);

    return (
        <>
            {data.length === 0 ?
                <EmptyPage {...empty} />
                :
                <div className="profile-page__orders order-table">
                    {data.map((order, index) => (
                        <OrderTableItem key={order.id} index={index} totalPrice={order.totalPrice} items={order.items} {...order} />
                    ))}
                </div>
            }
        </>
    );
}

export default MyOrders;