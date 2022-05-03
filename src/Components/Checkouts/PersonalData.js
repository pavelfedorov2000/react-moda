import React from 'react';

function PersonalData() {
    const personalDataInputs = {
        name: "Имя*",
        surname: "Фамилия*",
        phone: "Ваш телефон*",
        email: "Ваш e-mail*",
        city: "Город, населенный пункт*"
    };
    return (
        <fieldset className="checkout-form__item personal-data-form">
            <legend className="checkout-form__item-title">Персональные данные</legend>
            <div className="personal-data-form__inputs">
                {Object.keys(personalDataInputs).map(input => (
                    <input className="input personal-data-form__input" name={input} placeholder={personalDataInputs[input]} required />
                ))}
            </div>
        </fieldset>
    );
}

export default PersonalData;