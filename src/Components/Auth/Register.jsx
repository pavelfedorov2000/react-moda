import { useState } from 'react';
import { Link } from 'react-router-dom';
import PasswordInput from './PasswordInput';
import checkIcon from '../../assets/images/icons/check.svg';

const passwordFields = ['Придумайте', 'Повторите'];
const inputs = [{
    name: 'name',
    placeholder: 'Имя',
    value: ''
}, {
    name: 'surname',
    placeholder: 'Фамилия',
    value: ''
}, {
    name: 'phone',
    placeholder: 'Ваш телефон',
    value: ''
}, {
    name: 'email',
    placeholder: 'Ваш e-mail',
    value: ''
}];

const Register = () => {
    const [agree, setAgree] = useState(false);
    const onAgreeCheck = () => {
        setAgree((prevState) => !prevState);
    }

    const [disabled, setDisabled] = useState(true);
    const newInputs = [];
    let targetObj;
    const onInputChange = (e) => {
        const inputValue = [];
        targetObj = inputs.find(obj => obj.name === e.target.getAttribute('name'));
        if (e.target.value !== '') {
            inputValue.push(e.target.value);
            targetObj = {
                ...targetObj,
                value: inputValue.join('')
            }
        } else {
            inputValue.splice(inputValue.indexOf(e.target.value), 1);
        }
    }
    newInputs.push(targetObj);

    return (
        <form action="#" className="aside-popup__form">
            <div className="aside-popup__form-inputs">
                {inputs.map((input) => (
                    <input key={input.name} onChange={onInputChange} className="input aside-popup__form-input" name={input.name} placeholder={`${input.placeholder}*`} />
                ))}
                {passwordFields.map((field, index) => (
                    <PasswordInput key={index} field={field} />
                ))}
            </div>
            <label className="form-agree aside-popup__form-wrap">
                <input onChange={onAgreeCheck} className="check-box" type="checkbox" checked={agree} />
                <span className="check-style">
                    <span style={{ backgroundImage: `url(${checkIcon})` }}></span>
                </span>
                <span className="check-text">
                    Подтверждаю согласие с <Link to="/politics">Политикой конфиденциальности</Link> и <Link to="/">Правилами работы интернет-магазина</Link>, а также даю согласие на
                    <Link to="/personal-data">обработку персональных данных</Link>
                </span>
            </label>
            <button className="button aside-popup__form-btn" type="submit" disabled={disabled}>Зарегистрироваться</button>
        </form>
    );
}

export default Register;