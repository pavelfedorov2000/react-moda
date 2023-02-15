import { useCallback, useState } from 'react';
import { BasketTable, BasketTotal, Checkout, Crumbs } from '../Components';
import Sticky from "wil-react-sticky";
import { useTypedSelector } from '../hooks/useTypedSelector';

const Cart = ({ title }) => {
    const { totalPrice, totalDiscount, totalCount, items } = useTypedSelector((state) => state.cartReducer);

    const [selectedDelivery, setSelectedDelivery] = useState(null);
    const [selectedPayment, setSelectedPayment] = useState(null);

    // Объект который пойдет в store через action
    let orderData = {
        date: new Date().toLocaleString().split(',')[0],
        delivery: deliveryOptions[selectedDelivery] || deliveryOptions[0],
        payment: Object.keys(payment)[selectedPayment] || Object.keys(payment)[0],
        items: items,
        totalPrice,
        personalData
    };

    // Экшн на подтверждение заказа
    const handleOrderSubmit = useCallback((obj) => {
        dispatch({
            type: 'SET_ORDER_DATA',
            payload: obj
        });
    }, []);

    return (
        <main className="page basket-page">
            <div className="container">
                <Crumbs title={title} />

                <div className="page__top">
                    <h1 className="title">{title}</h1>
                </div>

                <form action="#">
                    <div className="basket-page__body">
                        <BasketTable totalPrice={totalPrice} totalCount={totalCount} items={items} />

                        <Sticky containerSelectorFocus=".basket-page__body" offsetTop={20} stickyEnableRange={[1025, Infinity]}>
                            <BasketTotal totalPrice={totalPrice} totalDiscount={totalDiscount} handleOrderSubmit={handleOrderSubmit} orderData={orderData} personalData={personalData} onClearCart={handleClearCart} />
                        </Sticky>

                        <Checkout orderData={orderData} personalData={orderData.personalData} />
                    </div>
                </form>
            </div>
        </main>
    );
}

export default Cart;