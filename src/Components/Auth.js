import classNames from 'classnames';
import React from 'react';

function Auth({ visibleAsideAuth, onCloseAsideAuth, socials }) {
    return (
        <div id="auth-popup" className={classNames('aside-popup auth-popup', {
            'active': visibleAsideAuth
        })}>
            <button onClick={onCloseAsideAuth} className="aside-popup__close" type="button">
                <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M23.1871 7L16 14.1871L8.81286 7L7 8.81286L14.1871 16L7 23.1871L8.81286 25L16 17.8129L23.1871 25L25 23.1871L17.8129 16L25 8.81286L23.1871 7Z"
                        fill="#505661" />
                </svg>
            </button>
            <h3 className="aside-popup__title">Авторизация</h3>
            <div className="aside-popup__text">
                Войдите или зарегистрируйтесь, чтобы делать покупки, отслеживать заказы и пользоваться персональными
                скидками и
                баллами.
            </div>
            <div className="tabs aside-popup__tabs">
                <a href="#auth" className="tab aside-popup__tab tab--active">Вход</a>
                <a href="#register" className="tab aside-popup__tab">Регистрация</a>
            </div>
            <div id="auth" className="tabs-content aside-popup__content tabs-content--active">
                <div className="aside-popup__body">
                    <div id="phone-enter">
                        <form action="#" className="aside-popup__form">
                            <div className="aside-popup__form-inputs">
                                <input className="input aside-popup__form-input" name="phone" type="tel"
                                    placeholder="Введите номер телефона" />
                            </div>
                            <button className="btn aside-popup__form-btn" type="submit" disabled>Войти</button>
                        </form>
                        <button data-enter="login-enter" className="aside-popup__link-btn" type="button">
                            Войти с помощью e-mail и пароля
                        </button>
                    </div>
                    <div id="login-enter">
                        <form action="#" className="aside-popup__form">
                            <div className="aside-popup__form-inputs">
                                <input className="input aside-popup__form-input" name="login_email" type="email"
                                    placeholder="Введите e-mail" />
                                <div className="input-wrap">
                                    <input className="input aside-popup__form-input" type="password" name="password"
                                        placeholder="Введите пароль" />
                                    <button className="pass-btn show" type="button"></button>
                                </div>
                            </div>
                            <div className="aside-popup__form-wrap">
                                <label className="form-agree">
                                    <input className="check-box" type="checkbox" />
                                    <span className="check-style"></span>
                                    <span className="check-text">
                                        Запомнить меня
                                    </span>
                                </label>
                                <button className="remind-password" type="button">
                                    Напомнить пароль
                                </button>
                            </div>
                            <button className="btn aside-popup__form-btn" type="submit" disabled>Войти</button>
                        </form>
                        <button data-enter="phone-enter" className="aside-popup__link-btn" type="button">
                            Войти с помощью номера телефона
                        </button>
                    </div>
                </div>
                <div className="aside-popup__social">
                    <div className="aside-popup__social-title ">
                        Или войдите через
                    </div>
                    <ul className="social">
                        {socials.filter(soc => !soc.footer).map(soc => (
                            <li key={soc.name} className="social__item">
                                <a className="social__link" href={soc.link} target="_blank" rel="nofollow">
                                    <soc.svg />
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            <div id="register" className="tabs-content aside-popup__content">
                <form action="#" className="aside-popup__form">
                    <div className="aside-popup__form-inputs">
                        <input className="input aside-popup__form-input" name="name" placeholder="Имя*" />
                        <input className="input aside-popup__form-input" name="surname" placeholder="Фамилия*" />
                        <input className="input aside-popup__form-input" name="phone" type="tel" placeholder="Ваш телефон*" />
                        <input className="input aside-popup__form-input" name="email" type="email" placeholder="Ваш e-mail*" />
                        <div className="input-wrap">
                            <input className="input aside-popup__form-input" type="password" id="password" name="password"
                                placeholder="Придумайте пароль*" />
                            <button className="pass-btn show" type="button"></button>
                        </div>
                        <div className="input-wrap">
                            <input className="input aside-popup__form-input" type="password" id="repeat_password"
                                name="repeat_password" placeholder="Повторите пароль*" />
                            <button className="pass-btn show" type="button"></button>
                        </div>
                    </div>
                    <label className="form-agree aside-popup__form-wrap">
                        <input className="check-box" type="checkbox" />
                        <span className="check-style"></span>
                        <span className="check-text">
                            Подтверждаю согласие с <a href="#">Политикой конфиденциальности</a> и <a href="#">Правилами
                                работы
                                интернет-магазина</a>, а
                            также даю согласие на
                            <a href="#">обработку персональных данных</a>
                        </span>
                    </label>
                    <button className="btn aside-popup__form-btn" type="submit">Зарегистрироваться</button>
                </form>
            </div>
        </div>

    );
}

export default Auth;