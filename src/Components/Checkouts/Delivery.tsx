import { CheckoutTitle } from "../../enums/CheckoutTitle";
import { DELIVERY_OPTIONS } from "../../enums/Delivery";
import { useActions } from "../../hooks/useActions";
import { useTypedSelector } from "../../hooks/useTypedSelector";

const Delivery = () => {
    const { DELIVERY } = useTypedSelector((state) => state.orderReducer);
    const { setDelivery } = useActions();

    const handleSetDelivery = (index: number) => {
        setDelivery(DELIVERY_OPTIONS[index].title);
    }

    return (
        <fieldset>
            <legend className="checkout-form__item-title">{CheckoutTitle.Delivery}</legend>
            <div className="checkout-form__radios">
                {DELIVERY_OPTIONS.map((option, index) => (
                    <label key={index} className="checkout-form__item-radio checkout-radio checkout-radio--without-border">
                        <input onChange={() => handleSetDelivery(index)} className="radio-box" type="radio" name="delivery" checked={option.title === DELIVERY ? true : false} />
                        <div className="checkout-radio__wrap">
                            <span className="radio-style"></span>
                            <div className="checkout-radio__content">
                                <div className="checkout-radio__title">{option.title}</div>
                                <dl className="checkout-radio__list">
                                    <div>
                                        <dt>Стоимость доставки:</dt>
                                        <dd>0 руб</dd>
                                    </div>
                                    <div>
                                        <dt>Доставка осуществляется в течение:</dt>
                                        <dd>1 дня</dd>
                                    </div>
                                </dl>
                            </div>
                        </div>
                    </label>
                ))}
            </div>
        </fieldset>
    );
}

export default Delivery;

//onChange={() => setSelectedDelivery(i)}