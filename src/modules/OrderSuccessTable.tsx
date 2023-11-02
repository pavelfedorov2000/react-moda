import { useTypedSelector } from '../hooks/useTypedSelector';
import { OrderProduct, OrderDetailsTable } from '../components';

const mainClass = 'order-success-table';

const OrderSuccessTable = () => {
    const { data } = useTypedSelector((state) => state.ordersReducer);
    const currentOrder = data[data.length - 1];

    return (
        <article className={mainClass}>
            <OrderDetailsTable {...currentOrder} />

            <div className={`${mainClass}__body`}>
                <div className={`${mainClass}__title product-title`}>Товары:</div>
                <ul className={`${mainClass}__products`}>
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