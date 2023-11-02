import { useTypedSelector } from '../hooks/useTypedSelector';
import { Page } from '../interfaces/Route';
import EmptyBlock from '../components/Layout/EmptyBlock';
import OrderTableItem from '../components/OrderTableItem';

const MyOrders = ({ emptyBlock }: Page) => {
    const { data } = useTypedSelector((state) => state.ordersReducer);

    return (
        <>
            {data.length !== 0 ?
                <ul className="orders-list">
                    {data.map((order, index: number) => (
                        <li key={order.totalPrice.toString()}>
                            <OrderTableItem index={index} {...order} />
                        </li>
                    ))}
                </ul>
                :
                <EmptyBlock {...emptyBlock} />
            }
        </>
    );
}

export default MyOrders;