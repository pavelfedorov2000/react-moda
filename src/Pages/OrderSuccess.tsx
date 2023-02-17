import { Crumbs, OrderProduct } from '../Components';
import OrderDetailsTable from '../Components/OrderDetailsTable';
import { useTypedSelector } from '../hooks/useTypedSelector';
import { Page } from '../interfaces/Route';

const OrderSuccess = ({ title, subtitle }: Page) => {
    const { data } = useTypedSelector((state) => state.ordersReducer);
    const currentOrder = data[data.length - 1];

    return (
        <main className="page">
            <div className="container">
                <Crumbs title={title} />

                <div className="page__top">
                    <h1 className="title">{title}</h1>
                </div>

                <div className="page__subtitle">
                    {subtitle}
                </div>

                <article className="order-success-table">
                    <OrderDetailsTable {...currentOrder} />

                    <div className="order-success-table__body">
                        <div className="product-title order-success-table__title">Товары:</div>
                        <ul className="order-success-table__products">
                            {Object.keys(currentOrder.items).map((product) => (
                                <li key={currentOrder.items[product].items[0].id}>
                                    <OrderProduct {...currentOrder.items[product].items[0]} totalCount={currentOrder.items[product].items.length} />
                                </li>
                            ))}
                        </ul>
                    </div>
                </article>                
            </div>
        </main>
    );
}

export default OrderSuccess;