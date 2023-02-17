
import {useParams } from 'react-router-dom';
import { SubPages } from '../../enums/Page';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { formatDate } from '../../utils/formatDate';
import BackLink from '../BackLink';
import OrderDetailsTable from '../OrderDetailsTable';
import OrderProduct from '../OrderProduct';

const OrderDetail = () => {
    const { index } = useParams();

    const { data } = useTypedSelector((state) => state.ordersReducer);

    const detailOrder = data.find((_, i) => i == index);

    return (
        (detailOrder?
            <>
                <BackLink href={SubPages.Orders.path} />

                <article className="order-details">
                    <h2 className="title profile-page__title">{`${SubPages.OrderDetail.title} ${formatDate(detailOrder?.date)}-${+index + 1}`}</h2>

                    <OrderDetailsTable {...detailOrder} />

                    <div className="order-details-goods">
                        <div className="order-details-goods__title">Товары:</div>
                        <ul className="order-details-goods__list">
                            {Object.keys(detailOrder.items).map((product) => (
                                <li key={detailOrder.items[product].items[0].id}>
                                    <OrderProduct {...detailOrder.items[product].items[0]} totalCount={detailOrder.items[product].items.length} />
                                </li>
                            ))}
                        </ul>
                    </div>
                </article>
            </>
            : <p>Loading...</p>
        )
    );
}

export default OrderDetail;