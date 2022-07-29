import React from 'react';
import { PersonalData, Delivery, Payment } from './Checkouts';

function Checkout({ selectedDelivery, setSelectedDelivery, selectedPayment, setSelectedPayment, personalData, payment, deliveryOptions, orderData }) {

    return (
        <section className="checkout">
            <h2 className="title checkout__title">Оформление заказа</h2>
            <form className="checkout__form checkout-form">
                <PersonalData personalData={personalData} orderData={orderData} />
                <Delivery deliveryOptions={deliveryOptions} selectedDelivery={selectedDelivery} setSelectedDelivery={setSelectedDelivery} />
                <Payment payment={payment} selectedPayment={selectedPayment} setSelectedPayment={setSelectedPayment} />
                <textarea className="input checkout-form__comment" name="order_comment" placeholder="Комментарий к заказу" />
            </form>
        </section>
    );
}

export default Checkout;