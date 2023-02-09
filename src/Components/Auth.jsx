import classNames from 'classnames';
import React, { useState } from 'react';
import { Enter, Register } from './Auth/index';
import PasswordRecovery from './Auth/PasswordRecovery';
import Social from './Social';

const authTabs = ['enter', 'register'];
const enterOptions = ['phone', 'email'];

function Auth({ visibleAsideAuth, onCloseAsideAuth }) {
    const [auth, setAuth] = useState(authTabs[0]);
    const onAuthChange = () => {
        setAuth(authTabs.filter(tab => tab !== auth)[0]);
    }

    const [enterOption, setEnterOption] = useState(enterOptions[0]);
    const onEnterOption = () => {
        setEnterOption(enterOptions.filter(option => option !== enterOption)[0]);
    }

    const [passwordRecovery, setPasswordRecovery] = useState(false);
    const onOpenPasswordRecovery = () => {
        setPasswordRecovery(true);
    }
    const onClosePasswordRecovery = () => {
        setPasswordRecovery(false);
        setSuccess(false);
    }

    const [disabledBtn, setDisabledBtn] = useState(true);
    const onInputChange = (e) => {
        setDisabledBtn(e.target.value.length > 0 ? false : true);
    }

    const [success, setSuccess] = useState(false);
    const onPasswordRecoverySubmit = (e) => {
        e.preventDefault();
        setSuccess(true);
    }

    return (
        <div id="auth-popup" className={classNames('aside-popup auth-popup', {
            'active': visibleAsideAuth
        })}>
            <button onClick={onCloseAsideAuth} className="aside-popup__close" type="button" aria-label="Закрыть окно авторизации">
                <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M23.1871 7L16 14.1871L8.81286 7L7 8.81286L14.1871 16L7 23.1871L8.81286 25L16 17.8129L23.1871 25L25 23.1871L17.8129 16L25 8.81286L23.1871 7Z"
                        fill="#505661" />
                </svg>
            </button>

            <div className="aside-popup__title">
                {passwordRecovery ? 'Восстановление пароля' : 'Авторизация'}
            </div>

            {passwordRecovery &&
                <button onClick={onClosePasswordRecovery} className="aside-popup__back-btn" type="button">
                    <svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M14 3.128L8.02103 9.2L7.36622 10L8.02091 10.8L14 16.872L12.8878 18L5 10L12.8878 2L14 3.128Z" />
                    </svg>
                    <span>Назад</span>
                </button>
            }

            <div className="aside-popup__text">
                {passwordRecovery ?
                    'Пожалуйста, введите ваш адрес электронной почты, на который мы отправим ссылку для восстановления пароля'
                    :
                    'Войдите или зарегистрируйтесь, чтобы делать покупки, отслеживать заказы и пользоваться персональными скидками и баллами.'
                }
            </div>

            {!passwordRecovery &&
                <div className="tabs aside-popup__tabs">
                    {authTabs.map(tab => (
                        <button key={tab} onClick={onAuthChange} className={classNames('tab aside-popup__tab', {
                            'tab--active': tab === auth
                        })} type="button">{tab === 'enter' ? 'Вход' : 'Регистрация'}</button>
                    ))}
                </div>
            }

            <div className="aside-popup__content">
                {
                    passwordRecovery ?
                        <PasswordRecovery onInputChange={onInputChange} disabledBtn={disabledBtn} success={success} onPasswordRecoverySubmit={onPasswordRecoverySubmit} />
                        :
                        <>
                            {auth === authTabs[0] ?
                                <Enter enterOption={enterOption} onEnterOption={onEnterOption} onOpenPasswordRecovery={onOpenPasswordRecovery} />
                                :
                                <Register />
                            }
                            {auth === authTabs[0] &&
                                <div className="aside-popup__social">
                                    <div className="aside-popup__social-title ">
                                        Или войдите через
                                    </div>
                                    <Social filterParam="footer" />
                                </div>
                            }
                        </>
                }
            </div>
        </div>

    );
}

export default Auth;