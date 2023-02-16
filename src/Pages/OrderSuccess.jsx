import { useSelector } from 'react-redux';
import { OrderSuccessTable, OrderProduct, Crumbs } from '../Components';

const OrderSuccess = ({ title }) => {
    const { data } = useSelector(({ order }) => order);
    const currentOrder = data[data.length - 1];

    return (
        <main className="page">
            <div className="container">
                <Crumbs title={title} />

                <h1 className="title page__title">{title}</h1>

                <div className="page__subtitle">
                    Наш менеджер свяжется с вами в ближайшее время
                </div>

                <div className="order-success-table">
                    <OrderSuccessTable totalPrice={currentOrder.totalPrice} {...currentOrder} className="order-success-table__head" />
                    <div className="order-success-table__body">
                        <div className="product-title order-success-table__title">Товары:</div>
                        <div className="order-success-table__products">
                            {Object.keys(currentOrder.items).map(product => (
                                <OrderProduct key={currentOrder.items[product].items[0].id} {...currentOrder.items[product].items[0]} totalCount={currentOrder.items[product].items.length} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default OrderSuccess;