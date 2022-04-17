import React, { useState } from 'react';

function Checkout(props) {
    const checkout = {
        "Персональные данные": {
            name: "Имя*",
            surname: "Фамилия*",
            phone: "Ваш телефон*",
            email: "Ваш e-mail*",
            city: "Город, населенный пункт*"
        },
        "Условия доставки": {
            radioName: 'delivery',
            items: {
                "Курьер": {
                    index: "Индекс",
                    street: "Улица",
                    home: "Дом, корпус",
                    flat: "Квартира/офис",
                },
                "Доставка в пункты выдачи заказов и постаматы": '',
            }
        },
        "Способ оплаты": {
            radioName: 'payment',
            items: {
                "Оплата при получении": "Наличными или банковской картой при получении",
                "Картой онлайн": "Перейти к оплате через сервис"
            }
        }
    };

    const [checked, setChecked] = useState(false);
    return (
        <section className="checkout">
            <h2 className="title checkout__title">Оформление заказа</h2>
            <form className="checkout__form checkout-form">
                {Object.keys(checkout).map((key, i) => (
                    <fieldset key={`checkout-fieldset_${i + 1}`} className="checkout-form__item personal-data-form">
                        <legend className="checkout-form__item-title">{key}</legend>
                        {i == 0 ?
                            <div className="personal-data-form__inputs">
                                {Object.keys(checkout[key]).map(input => (
                                    <div key={input} className="personal-data-form__input">
                                        <input className="input" name={input} placeholder={checkout[key][input]} />
                                    </div>
                                ))}
                            </div> :
                            <div className="checkout-form__radios">
                                {Object.keys(checkout[key].items).map((radio, j) => (
                                    <label key={checkout[key].radioName} className="checkout-form__item-radio checkout-radio checkout-radio--without-border">
                                        <input className="radio-box" type="radio" name={checkout[key].radioName} checked={j == 0 ? true : false} />
                                        <div className="checkout-radio__wrap">
                                            <span className="radio-style"></span>
                                            <div className="checkout-radio__content">
                                                {checkout[key].radioName === 'delivery' ?
                                                    <div>
                                                        <div className="checkout-radio__title">{radio}</div>
                                                        <dl className="checkout-radio__list">
                                                            <div>
                                                                <dt>Стоимость доставки:</dt>
                                                                <dd>0 руб</dd>
                                                            </div>
                                                            <div>
                                                                <dt>Доставка осуществляется в течении:</dt>
                                                                <dd>1 дня</dd>
                                                            </div>
                                                        </dl>
                                                    </div> :
                                                    <div className="checkout-radio__title">{radio}</div>
                                                }
                                                <div className="checkout-radio__hidden">
                                                    {checkout[key].radioName === 'delivery' ?
                                                        j == 0 ?
                                                            <div className="checkout-radio__inputs">
                                                                {Object.keys(checkout[key].items[radio]).map(name => (
                                                                    <div className="checkout-radio__input">
                                                                        <input className="input" name={name} placeholder={checkout[key].items[radio][name]} />
                                                                    </div>
                                                                ))}
                                                            </div> :
                                                            <a href="#" className="btn checkout-radio__btn">
                                                                Выберите пункт выдачи
                                                            </a>
                                                        :
                                                        <p>
                                                            {j == 1 ? checkout[key].items[radio] : <a href="#">{checkout[key].items[radio]}</a>}
                                                        </p>
                                                    }
                                                </div>
                                            </div>
                                        </div>
                                    </label>
                                ))}
                            </div>
                        }
                    </fieldset>
                ))}
                <textarea className="input checkout-form__comment" name="order_comment" placeholder="Комментарий к заказу" />
            </form>
        </section>
    );
}

export default Checkout;