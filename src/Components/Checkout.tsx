import { PersonalData } from './Checkouts';
import Delivery from './Checkouts/Delivery';
import Payment from './Checkouts/Payment';

const Checkout = () => {
    return (
        <section className="checkout">
            <h2 className="title checkout__title">Оформление заказа</h2>
            <form className="checkout__form checkout-form">
                <PersonalData />
                <Delivery />
                <Payment />
                <textarea className="input checkout-form__comment" name="comment" placeholder="Комментарий к заказу" />
            </form>
        </section>
    );
}

export default Checkout;