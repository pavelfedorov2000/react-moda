import { useState } from 'react';
import checkIcon from '../../assets/images/icons/check.svg';
import { FIELDS } from '../../enums/Auth';
import { useActions } from '../../hooks/useActions';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { SubPages } from '../../enums/Page';
import { Link } from 'react-router-dom';
import Field from '../Field';

const Register = () => {
    const { closeAuth } = useActions();
    const profileState = useTypedSelector((state) => state.profileReducer);
    const { PASSWORD, REPEAT_PASSWORD } = profileState;
    
    const { setProfileData } = useActions();

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setProfileData({
            name: event.target.name,
            value: event.target.value
        });
    }

    const [agree, setAgree] = useState(false);
    const toggleAgree = () => {
        setAgree((prevState) => !prevState);
    }

    const isDisabled =
        Object.values(profileState).some((value) => value === '')
        || PASSWORD !== REPEAT_PASSWORD
        || !agree;
    
    /* const handleSubmit = (e: React.SyntheticEvent<HTMLFormElement>) => {
        e.preventDefault();
        closeAuth();
    } */

    return (
        <form action="#" className="aside-popup__form">
            <div className="aside-popup__form-inputs">
                {FIELDS.map((field) => (
                    <Field key={field.name} onInput={handleChange} {...field} />
                ))}
            </div>
            <label className="form-agree aside-popup__form-wrap">
                <input onChange={toggleAgree} className="check-box" type="checkbox" checked={agree} />
                <span className="check-style">
                    <span style={{ backgroundImage: `url(${checkIcon})` }}></span>
                </span>
                <span className="check-text">
                    Подтверждаю согласие с <a href="#">Политикой конфиденциальности</a> и <a href="#">Правилами работы интернет-магазина</a>, а также даю согласие на
                    <a href="#">обработку персональных данных</a>
                </span>
            </label>
            <Link onClick={closeAuth} to={SubPages.Personal.path} className="button aside-popup__form-btn" type="submit" disabled={isDisabled}>Зарегистрироваться</Link>
        </form>
    );
}

export default Register;