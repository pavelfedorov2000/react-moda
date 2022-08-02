import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BasketTable, BasketTotal, Checkout, Crumbs } from '../Components';
//import { Link } from 'react-router-dom';
import Sticky from "wil-react-sticky";
import { clearCart } from '../redux/actions/cart';


function Cart({ title }) {

    const dispatch = useDispatch();
    const { totalPrice, totalDiscount, totalCount, items } = useSelector(({ cart }) => cart); // вытаскиваем общую цену, скидку и кол-во, а также товары из стора сразу через деструктуризацию

    const [selectedDelivery, setSelectedDelivery] = useState(null);
    const [selectedPayment, setSelectedPayment] = useState(null);

    let personalData;

    const payment = {
        "Оплата при получении": "Наличными или банковской картой при получении",
        "Картой онлайн": "Перейти к оплате через сервис"
    }

    const deliveryOptions = ['Курьер', 'Доставка в пункты выдачи заказов и постаматы'];

    // Объект который пойдет в store через action
    let orderData = {
        date: new Date().toLocaleString().split(',')[0],
        delivery: deliveryOptions[selectedDelivery],
        payment: Object.keys(payment)[selectedPayment],
        items: items,
        totalPrice
    };

    //console.log(orderData);

    // Очистка корзины после подтверждения заказа
    const handleClearCart = () => {
        dispatch(clearCart());
    }

    // Экшн на подтверждение заказа
    const handleOrderSubmit = obj => {
        dispatch({
            type: 'SET_ORDER_DATA',
            payload: obj
        });
    }

    return (
        <main className="page basket-page">
            <div className="container">
                <Crumbs title={title} />

                <h1 className="title page__title">{title}</h1>

                <form action="#">
                    <div className="basket-page__body">
                        <BasketTable totalPrice={totalPrice} totalCount={totalCount} items={items} dispatch={dispatch} />
                        <Sticky containerSelectorFocus=".basket-page__body" offsetTop={20} stickyEnableRange={[1025, Infinity]}>
                            <BasketTotal totalPrice={totalPrice} totalDiscount={totalDiscount} handleOrderSubmit={handleOrderSubmit} orderData={orderData} personalData={personalData} onClearCart={handleClearCart} />
                        </Sticky>
                        <Checkout orderData={orderData} personalData={personalData} payment={payment} deliveryOptions={deliveryOptions} selectedDelivery={selectedDelivery} setSelectedDelivery={setSelectedDelivery} selectedPayment={selectedPayment} setSelectedPayment={setSelectedPayment} />
                    </div>
                </form>
            </div>
        </main>
    );
}

export default Cart;