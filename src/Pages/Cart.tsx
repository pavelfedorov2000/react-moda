import { BasketTable, BasketTotal, Checkout, Crumbs, EmptyBlock } from '../Components';
import Sticky from "wil-react-sticky";
import { useTypedSelector } from '../hooks/useTypedSelector';
import { Page } from '../interfaces/Route';

const Cart = ({ title, emptyBlock }: Page) => {
    const { items } = useTypedSelector((state) => state.cartReducer);
    //const { totalPrice, totalDiscount, totalCount, items } = useTypedSelector((state) => state.cartReducer);

    //const [selectedDelivery, setSelectedDelivery] = useState(null);
    //const [selectedPayment, setSelectedPayment] = useState(null);

    // Объект который пойдет в store через action
    /* let orderData = {
        date: new Date().toLocaleString().split(',')[0],
        delivery: deliveryOptions[selectedDelivery] || deliveryOptions[0],
        payment: Object.keys(payment)[selectedPayment] || Object.keys(payment)[0],
        items: items,
        totalPrice,
        personalData
    }; */

    // Экшн на подтверждение заказа
    /* const handleOrderSubmit = useCallback((obj) => {
        dispatch({
            type: 'SET_ORDER_DATA',
            payload: obj
        });
    }, []); */

    return (
        <main className="page basket-page">
            <div className="container">
                <Crumbs title={title} />

                <div className="page__top">
                    <h1 className="title">{title}</h1>
                </div>

                <form action="#">
                    {Object.keys(items).length !== 0 ?
                        <div className="basket-page__body">
                            <BasketTable />
                                <Sticky containerSelectorFocus=".basket-page__body" offsetTop={20} stickyEnableRange={[1025, Infinity]}>
                                    <BasketTotal />
                                </Sticky>
                        </div>
                        : <EmptyBlock {...emptyBlock} />
                    }
                </form>
            </div>
        </main>
    );
}

export default Cart;