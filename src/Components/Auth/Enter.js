import React from 'react';
import Button from '../Button';
import PasswordInput from './PasswordInput';

function Enter({ enterOption, onEnterOption, onOpenPasswordRecovery }) {
    return (
        <div className="aside-popup__body">
            <form action="#" className="aside-popup__form">
                <div className="aside-popup__form-inputs">
                    {enterOption == 'email' ?
                        <input className="input aside-popup__form-input" name="phone" type="tel"
                            placeholder="Введите номер телефона" /> :
                        <>
                            <input className="input aside-popup__form-input" name="login_email" type="email"
                                placeholder="Введите e-mail" />
                            <PasswordInput />
                        </>
                    }
                    {enterOption == 'email' ?
                        <div className="aside-popup__form-wrap">
                            <label className="form-agree">
                                <input className="check-box" type="checkbox" />
                                <span className="check-style"></span>
                                <span className="check-text">
                                    Запомнить меня
                                </span>
                            </label>
                            <button onClick={onOpenPasswordRecovery} className="remind-password" type="button">
                                Напомнить пароль
                            </button>
                        </div> : null
                    }
                </div>
                <Button className="aside-popup__form-btn" text="Войти" type="submit" disabled />
            </form>
            <button onClick={onEnterOption} className="aside-popup__link-btn" type="button">
                {`Войти с помощью ${enterOption == 'email' ? 'e-mail и пароля' : 'номера телефона'}`}
            </button>
        </div>
    );
}

export default Enter;