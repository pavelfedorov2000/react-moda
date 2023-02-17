import { Link } from 'react-router-dom';
import { FormRow } from '.';
import { BasketTotalText } from '../enums/BasketTotalText';
import { Pages } from '../enums/Page';
import { useActions } from '../hooks/useActions';
import { useTypedSelector } from '../hooks/useTypedSelector';

const loyaltyPercent = 3;

const BasketTotal = () => {
    const { totalPrice, totalDiscount, items } = useTypedSelector((state) => state.cartReducer);
    const { personalData, DELIVERY ,PAYMENT } = useTypedSelector((state) => state.orderReducer);
    const { clearCart, setOrderData } = useActions();
    
    const loyaltyDiscount = totalPrice * loyaltyPercent / 100;
    const overallSum = totalPrice - totalDiscount - loyaltyDiscount;

    const handleOrderSubmit = () => {
        setOrderData({
            date: new Date(Date.now()).toLocaleDateString().split(',')[0],
            totalPrice,
            personalData,
            delivery: DELIVERY,
            payment: PAYMENT,
            items,
        });
        clearCart();
    }

    const isSubmitButtonDisabled =
        Object.values(personalData).some((input) => input === '')
        || DELIVERY === ''
        || PAYMENT === ''
    ;

    return (
        <div className="basket-total">
            <div className="basket-total__auth">
                <button className="basket-total__auth-btn" type="button">Авторизуйтесь</button>чтобы воспользоваться скидкой по программе лояльности.
            </div>
            <form action="#" className="subscirbe-form">
                <FormRow actionText="Ввести промокод" placeholder="Введите промокод" />
            </form>
            <dl className="basket-total__list">
                <div className="basket-total__list-item">
                    <dt>{BasketTotalText.Sum}</dt>
                    <dd>{totalPrice ?? 0} ₽</dd>
                </div>
                <div className="basket-total__list-item">
                    <dt>{BasketTotalText.Discount}</dt>
                    <dd><span>-{totalPrice ? totalDiscount : 0} ₽</span></dd>
                </div>
                <div className="basket-total__list-item">
                    <dt>{BasketTotalText.Delivery}</dt>
                    <dd>0 ₽</dd>
                </div>
                {totalPrice && loyaltyPercent ?
                    <div className="basket-total__list-item">
                        <dt>{BasketTotalText.Loyalty} ({loyaltyPercent}%)</dt>
                        <dd><span>-{loyaltyDiscount} ₽</span></dd>
                    </div>
                    : null
                }
            </dl>
            <div className="basket-total__overall">
                <div className="basket-total__overall-title">{BasketTotalText.Total}</div>
                <div className="basket-total__overall-sum">{totalPrice ? overallSum : 0}₽</div>
            </div>
            <Link onClick={handleOrderSubmit} to={Pages.OrderSuccess.path} disabled={isSubmitButtonDisabled} className="button basket-total__btn">Отправить заказ</Link>
            <div className="basket-total__agreement">
                Нажимая на кнопку «Отправить заказ», вы принимаете условия <Link to={Pages.NotFound.path}>Публичной оферты.</Link>
            </div>
        </div>
    );
}

export default BasketTotal;