import React, { useState } from 'react';

function Payment() {

    const payment = {
        "Оплата при получении": "Наличными или банковской картой при получении",
        "Картой онлайн": "Перейти к оплате через сервис"
    }

    const [selectedPayment, setSelectedPayment] = useState(null);

    return (
        <fieldset className="checkout-form__item personal-data-form">
            <legend className="checkout-form__item-title">Способ оплаты</legend>
            <div className="checkout-form__radios">
                {Object.keys(payment).map((radio, i) => (
                    <label key={`${payment.radioName}-${i + 1}`} className="checkout-form__item-radio checkout-radio checkout-radio--without-border">
                        <input onChange={() => setSelectedPayment(i)} className="radio-box" type="radio" name="payment" checked={i == selectedPayment ? true : false} />
                        <div className="checkout-radio__wrap">
                            <span className="radio-style"></span>
                            <div className="checkout-radio__content">
                                <div className="checkout-radio__title">{radio}</div>
                                {i == selectedPayment &&
                                    <div className="checkout-radio__hidden">
                                        <p>
                                            {i == 0 ? payment[radio] : <a href="#">{payment[radio]}</a>}
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