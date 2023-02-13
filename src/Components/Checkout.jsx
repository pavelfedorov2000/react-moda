import { PersonalData, Delivery, Payment } from './Checkouts';

const Checkout = ({ personalData, payment, deliveryOptions, orderData }) => {

    return (
        <section className="checkout">
            <h2 className="title checkout__title">Оформление заказа</h2>
            <form className="checkout__form checkout-form">
                <PersonalData personalData={personalData} orderData={orderData} />
                <Delivery deliveryOptions={deliveryOptions} />
                <Payment payment={payment} />

                <textarea className="input checkout-form__comment" name="order_comment" placeholder="Комментарий к заказу" />
            </form>
        </section>
    );
}

export default Checkout;