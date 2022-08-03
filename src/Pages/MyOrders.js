import React from 'react';
import { useSelector } from 'react-redux';
import { OrderTableItem, PageNav, EmptyPage } from '../Components';
//import { useRouteMatch } from 'react-router-dom/cjs/react-router-dom.min';

function MyOrders({ title, empty }) {

    //let { url } = useRouteMatch();

    //const { totalPrice } = useSelector(({ cart }) => cart);
    const { data } = useSelector(({ order }) => order);

    return (
        <main className="page profile-page">
            <div className="container">

                <h1 className="title page__title">Профиль</h1>

                <div className="profile-page__inner">
                    <PageNav />
                    <div className="profile-page__body">
                        <h2 class="profile-page__title">{title}</h2>
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
                    </div>
                </div>
            </div>
        </main>
    );
}

export default MyOrders;