import { useSelector } from 'react-redux';
import EmptyBlock from '../Layout/EmptyBlock';
import OrderTableItem from '../OrderTableItem';

const MyOrders = ({ emptyBlock }) => {
    const { data } = useSelector(({ order }) => order);

    return (
        <>
            {data.length !== 0 ?
                <ul className="profile-page__orders order-table">
                    {data.map((order, index) => (
                        <li key={order.id}>
                            <OrderTableItem index={index} totalPrice={order.totalPrice} items={order.items} {...order} />
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