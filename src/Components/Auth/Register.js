import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PasswordInput from './PasswordInput';
import checkIcon from '../../assets/images/icons/check.svg';


function Register() {
    const passwordFields = ['Придумайте', 'Повторите'];
    const inputs = [
        {
            name: 'name',
            placeholder: 'Имя',
        },
        {
            name: 'surname',
            placeholder: 'Фамилия',
        },
        {
            name: 'phone',
            placeholder: 'Ваш телефон',
        },
        {
            name: 'email',
            placeholder: 'Ваш e-mail',
        },
    ];
    const [agree, setAgree] = useState(false);
    const onAgreeCheck = () => {
        setAgree(!agree);
        //console.log(agree);
    }

    const [disabled, setDisabled] = useState(true);
    const newInputs = [];
    let targetObj;
    const onInputChange = (e) => {
        const inputValue = [];
        targetObj = inputs.find(obj => obj.name === e.target.getAttribute('name'));
        if (e.target.value !== '') {
            //console.log(targetObj);
            //&& e.target.getAttribute('name') === inputs[i].name
            inputValue.push(e.target.value);
            //console.log(inputValue);
            targetObj = {
                ...targetObj,
                value: inputValue.join('')
            }
            //console.log(targetObj);
        } else {
            inputValue.splice(inputValue.indexOf(e.target.value), 1);
        }
        //console.log(inputValues);

        //inputValues[i].value = e.target.value;
        //console.log(inputValues);
        /* if (e.target.value !== '' && !agree) {
          console.log(disabled);
          setDisabled(false);
        } else {
          setDisabled(true);
        } */
    }
    newInputs.push(targetObj);
    //console.log(newInputs);

    return (
        <form action="#" className="aside-popup__form">
            <div className="aside-popup__form-inputs">
                {inputs.map(input => (
                    <input key={input.name} onChange={onInputChange} className="input aside-popup__form-input" name={input.name} placeholder={`${input.placeholder}*`} />
                ))}
                {passwordFields.map((field, i) => (
                    <PasswordInput key={`password-field_${i + 1}`} field={field} />
                ))}
            </div>
            <label className="form-agree aside-popup__form-wrap">
                <input onChange={onAgreeCheck} className="check-box" type="checkbox" checked={agree ? true : false} />
                <span className="check-style">
                    <span style={{ backgroundImage: `url(${checkIcon})` }}></span>
                </span>
                <span className="check-text">
                    Подтверждаю согласие с <Link to="/politics">Политикой конфиденциальности</Link> и <Link to="/">Правилами работы интернет-магазина</Link>, а также даю согласие на
                    <Link to="/personal-data">обработку персональных данных</Link>
                </span>
            </label>
            <button className="btn aside-popup__form-btn" type="submit" disabled={disabled ? true : false}>Зарегистрироваться</button>
        </form>
    );
}

export default Register;