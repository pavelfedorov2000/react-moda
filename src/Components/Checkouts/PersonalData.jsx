import { useState } from 'react';

const PersonalData = ({ personalData, orderData }) => {
    const [data, setData] = useState(personalData);
    const [inputValue, setInputValue] = useState('');
    function handleInputChange(e) {
        const target = e.target;
        const name = target.getAttribute('name');
        const val = target.value;
        setInputValue(val);
        const dataCopy = { ...data };
        if (val !== '') {
            dataCopy[name] = val || personalData[name];
            setData({
                ...dataCopy,
            });
        }
        setInputValue(val);
    }
    orderData.personal = data;

    return (
        <fieldset>
            <legend className="checkout-form__item-title">Персональные данные</legend>
            <div className="personal-data-form__inputs">
                {Object.keys(personalData).map(input => (
                    <input key={input} onChange={handleInputChange} className="input personal-data-form__input" name={input} placeholder={`${personalData[input]}*`} />
                ))}
            </div>
        </fieldset>
    );
}

export default PersonalData;