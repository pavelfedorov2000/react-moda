import { PersonalData, Delivery, Payment } from '../components/Checkouts';

const mainClass = 'checkout';

const Checkout = () => {
    return (
        <section className={mainClass}>
            <h2 className="title checkout__title">Оформление заказа</h2>
            <form className={`${mainClass}__form checkout-form`}>
                <PersonalData />
                <Delivery />
                <Payment />
                <textarea className="input checkout-form__comment" name="comment" placeholder="Комментарий к заказу" />
            </form>
        </section>
    );
}

export default Checkout;