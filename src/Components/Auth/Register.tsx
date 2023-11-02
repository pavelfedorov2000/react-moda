import { useState } from 'react';
import checkIcon from '../../assets/images/icons/check.svg';
import { FIELDS } from '../../enums/Auth';
import { useActions } from '../../hooks/useActions';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { SubPages } from '../../enums/Page';
import { Link } from 'react-router-dom';
import Field from '../Field';
import classNames from 'classnames';
import { ClassName } from '../../enums/ClassName';

const Register = ({ isVisible }: { isVisible: boolean; }) => {
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
        setAgree((agree) => !agree);
    }

    const isDisabled = Object.values(profileState).some((value) => value === '') || PASSWORD !== REPEAT_PASSWORD || !agree;

    const handleSubmit = () => {
        document.body.classList.remove(ClassName.Lock);
        closeAuth();
    }

    return (
        <div className={classNames(ClassName.TabsContent, {
            [ClassName.Active]: isVisible
        })} role="tabpanel" id="auth-panel-register" aria-labelledby="register" tabIndex={isVisible ? 0 : -1}>
            <form action="#" className={`${ClassName.AsidePopup}__form`}>
                <div className={`${ClassName.AsidePopup}__form-inputs`}>
                    {FIELDS.map((field) => (
                        <Field key={field.name} onInput={handleChange} {...field} />
                    ))}
                </div>
                <label className="form-agree aside-popup__form-wrap">
                    <input onChange={toggleAgree} className="checkbox__input" type="checkbox" checked={agree} />
                    <span className="checkbox__style">
                        <span style={{ backgroundImage: `url(${checkIcon})` }}></span>
                    </span>
                    <span className="checkbox__text">
                        Подтверждаю согласие с <a href="#">Политикой конфиденциальности</a> и <a href="#">Правилами работы интернет-магазина</a>, а также даю согласие на
                        <a href="#">обработку персональных данных</a>
                    </span>
                </label>
                <Link onClick={handleSubmit} to={SubPages.Personal.path} className="button aside-popup__form-btn" type="submit" disabled={isDisabled}>
                    Зарегистрироваться
                </Link>
            </form>
        </div>
    );
}

export default Register;