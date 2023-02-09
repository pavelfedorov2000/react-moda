import React, { useCallback, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BasketTable, BasketTotal, Checkout, Crumbs } from '../Components';
import Sticky from "wil-react-sticky";
import { clearCart } from '../redux/actions/cart';
import { CheckoutContext } from '../context';

const payment = {
    "Оплата при получении": "Наличными или банковской картой при получении",
    "Картой онлайн": "Перейти к оплате через сервис"
};

const deliveryOptions = ['Курьер', 'Доставка в пункты выдачи заказов и постаматы'];

function Cart({ title }) {
    const dispatch = useDispatch();
    const { totalPrice, totalDiscount, totalCount, items } = useSelector(({ cart }) => cart); // вытаскиваем общую цену, скидку и кол-во, а также товары из стора сразу через деструктуризацию

    const [selectedDelivery, setSelectedDelivery] = useState(null);
    const [selectedPayment, setSelectedPayment] = useState(null);

    let personalData = {
        name: "Имя",
        surname: "Фамилия",
        phone: "Ваш телефон",
        email: "Ваш e-mail",
        city: "Город, населенный пункт"
    };

    // Объект который пойдет в store через action
    let orderData = {
        date: new Date().toLocaleString().split(',')[0],
        delivery: deliveryOptions[selectedDelivery] || deliveryOptions[0],
        payment: Object.keys(payment)[selectedPayment] || Object.keys(payment)[0],
        items: items,
        totalPrice,
        personalData
    };

    // Очистка корзины после подтверждения заказа
    const handleClearCart = () => {
        dispatch(clearCart());
    }

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

                <h1 className="title page__title">{title}</h1>

                <form action="#">
                    <div className="basket-page__body">
                        <BasketTable totalPrice={totalPrice} totalCount={totalCount} items={items} dispatch={dispatch} />

                        <Sticky containerSelectorFocus=".basket-page__body" offsetTop={20} stickyEnableRange={[1025, Infinity]}>
                            <BasketTotal totalPrice={totalPrice} totalDiscount={totalDiscount} handleOrderSubmit={handleOrderSubmit} orderData={orderData} personalData={personalData} onClearCart={handleClearCart} />
                        </Sticky>

                        <CheckoutContext.Provider value={{
                            selectedDelivery,
                            setSelectedDelivery,
                            selectedPayment,
                            setSelectedPayment
                        }}>
                            <Checkout orderData={orderData} personalData={orderData.personalData} payment={payment} deliveryOptions={deliveryOptions} />
                        </CheckoutContext.Provider>
                    </div>
                </form>
            </div>
        </main>
    );
}

export default Cart;