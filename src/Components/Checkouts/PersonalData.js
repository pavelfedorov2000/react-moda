import React, { useState } from 'react';

function PersonalData({ personalData, orderData }) {
    const personalDataInputs = {
        name: "Имя",
        surname: "Фамилия",
        phone: "Ваш телефон",
        email: "Ваш e-mail",
        city: "Город, населенный пункт"
    };

    const [data, setData] = useState(personalData);
    const [inputValue, setInputValue] = useState('');
    function handleInputChange(e) {
        const target = e.target;
        const name = target.getAttribute('name');
        const val = target.value;
        setInputValue(val);
        const dataCopy = { ...data };
        if (val !== '') {
            dataCopy[name] = val;
            setData({
                ...dataCopy,
            });
        }
        setInputValue(val);
        //console.log(data);
        //console.log(inputValue);
    }
    orderData.personal = data;
    console.log(orderData);

    return (
        <fieldset>
            <legend className="checkout-form__item-title">Персональные данные</legend>
            <div className="personal-data-form__inputs">
                {Object.keys(personalDataInputs).map(input => (
                    <input onChange={handleInputChange} className="input personal-data-form__input" name={input} placeholder={`${personalDataInputs[input]}*`} />
                ))}
            </div>
        </fieldset>
    );
}

export default PersonalData;