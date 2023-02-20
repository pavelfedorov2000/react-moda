import classNames from 'classnames';
import { useState } from 'react';
import { AuthOptions, AuthTabs } from '../enums/Auth';
import { useActions } from '../hooks/useActions';
import { useTypedSelector } from '../hooks/useTypedSelector';
import AsidePopupClose from './AsidePopupClose';
import { Enter, Register } from './Auth/index';
import PasswordRecovery from './Auth/PasswordRecovery';
import Social from './Social';

const Auth = () => {
    const { isAuthVisible, isPasswordRecoveryVisible } = useTypedSelector((state) => state.asidePopupReducer);
    const { closeAuth, closePasswordRecovery } = useActions();

    const [auth, setAuth] = useState(AuthTabs[1]);
    const toggleAuth = () => {
        setAuth(AuthTabs.filter((tab) => tab.name !== auth.name)[0]);
    }

    const isEnterOption = auth.name === AuthTabs[0].name;

    return (
        <div id="auth-popup" className={classNames('aside-popup auth-popup', {
            'active': isAuthVisible
        })}>
            <AsidePopupClose onClick={closeAuth} ariaLabel="Закрыть окно авторизации" />

            <div className="aside-popup__title">
                {isPasswordRecoveryVisible ? AuthOptions.PasswordRecovery.title : AuthOptions.Enter.title}
            </div>

            {isPasswordRecoveryVisible &&
                <button onClick={closePasswordRecovery} className="aside-popup__back-btn" type="button">
                    <svg className="icon icon--size_xs" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M14 3.128L8.02103 9.2L7.36622 10L8.02091 10.8L14 16.872L12.8878 18L5 10L12.8878 2L14 3.128Z" />
                    </svg>
                    <span>Назад</span>
                </button>
            }

            <div className="aside-popup__text">
                {isPasswordRecoveryVisible ?
                    AuthOptions.PasswordRecovery.text
                    :
                    AuthOptions.Enter.text
                }
            </div>

            {!isPasswordRecoveryVisible &&
                <div className="tabs aside-popup__tabs">
                    {AuthTabs.map((tab) => (
                        <button key={tab.name.toString()} onClick={toggleAuth} className={classNames('tab aside-popup__tab', {
                            'active': tab.name === auth.name
                        })} type="button">{tab.title}</button>
                    ))}
                </div>
            }

            <div className="aside-popup__content">
                {
                    isPasswordRecoveryVisible ?
                        <PasswordRecovery />
                        :
                        <>
                            {isEnterOption ?
                                <Enter />
                                :
                                <Register />
                            }
                            {isEnterOption &&
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