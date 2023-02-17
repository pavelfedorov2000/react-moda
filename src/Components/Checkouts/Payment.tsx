import { CheckoutTitle } from "../../enums/CheckoutTitle";
import { PAYMENT_OPTIONS } from "../../enums/Payment";
import { useActions } from "../../hooks/useActions";
import { useTypedSelector } from "../../hooks/useTypedSelector";

const Payment = () => {
    const { PAYMENT } = useTypedSelector((state) => state.orderReducer);
    const { setPayment } = useActions();

    const handleSetPayment = (index: number) => {
        setPayment(PAYMENT_OPTIONS[index].title);
    }
    
    return (
        <fieldset>
            <legend className="checkout-form__item-title">{CheckoutTitle.Payment}</legend>
            <div className="checkout-form__radios">
                {PAYMENT_OPTIONS.map((option, index) => (
                    <label key={index} className="checkout-form__item-radio checkout-radio checkout-radio--without-border">
                        <input onChange={() => handleSetPayment(index)} className="radio-box" type="radio" name="payment" checked={option.title === PAYMENT ? true : false} />
                        <div className="checkout-radio__wrap">
                            <span className="radio-style"></span>
                            <div className="checkout-radio__content">
                                <div className="checkout-radio__title">{option.title}</div>
                                {option.title === PAYMENT &&
                                    <div className="checkout-radio__hidden">
                                        <p>
                                            {option.text}
                                        </p>
                                    </div>
                                }
                            </div>
                        </div>
                    </label>
                ))}
            </div>
        </fieldset>
    );
}

export default Payment;

//onChange={() => setSelectedPayment(i)}