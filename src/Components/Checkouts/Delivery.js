import React from 'react';

const deliveryInputs = {
    index: "Индекс",
    street: "Улица",
    home: "Дом, корпус",
    flat: "Квартира/офис",
};

function Delivery({ selectedDelivery, setSelectedDelivery, deliveryOptions }) {
    return (
        <fieldset>
            <legend className="checkout-form__item-title">Условия доставки</legend>
            <div className="checkout-form__radios">
                {deliveryOptions.map((option, i) => (
                    <label key={option} className="checkout-form__item-radio checkout-radio checkout-radio--without-border">
                        <input onChange={() => setSelectedDelivery(i)} className="radio-box" type="radio" name="delivery" checked={i == selectedDelivery ? true : false} />
                        <div className="checkout-radio__wrap">
                            <span className="radio-style"></span>
                            <div className="checkout-radio__content">
                                <div className="checkout-radio__title">{option}</div>
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
                                {i == 0 ?
                                    i == selectedDelivery &&
                                    <div className="checkout-radio__hidden">
                                        <div className="checkout-radio__inputs">
                                            {Object.keys(deliveryInputs).map(input => (
                                                <div key={input} className="checkout-radio__input">
                                                    <input className="input" name={input} placeholder={deliveryInputs[input]} required />
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                    : null
                                }
                            </div>
                        </div>
                    </label>
                ))}
            </div>
        </fieldset>
    );
}

export default Delivery;