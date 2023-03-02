import { useTypedSelector } from '../hooks/useTypedSelector';
import { OrderProduct, OrderDetailsTable } from '../Components';

const OrderSuccessTable = () => {
    const { data } = useTypedSelector((state) => state.ordersReducer);
    const currentOrder = data[data.length - 1];

    return (
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
    );
};

export default OrderSuccessTable;