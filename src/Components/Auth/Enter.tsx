import classNames from 'classnames';
import { useState } from 'react';
import { EnterOption, FIELDS } from '../../enums/Auth';
import { InputType } from '../../enums/InputType';
import { useActions } from '../../hooks/useActions';
import Button from '../Button';
import Social from '../Social';
//import PasswordInput from './PasswordInput';

interface Props {
    isVisible: boolean;
}

const Enter = ({ isVisible }: Props) => {
    const { openPasswordRecovery } = useActions();

    const enterOptions = Object.keys(EnterOption);

    const [enterOption, setEnterOption] = useState(enterOptions[0]);
    const onEnterOption = () => {
        setEnterOption(enterOptions.filter((option) => option !== enterOption)[0]);
    }

    return (
        <div className={classNames('tabs-content', {
            'active': isVisible
        })} role="tabpanel" id="auth-panel-enter" aria-labelledby="enter" tabIndex={isVisible ? 0 : -1}>
            <div className="aside-popup__body">
                <form action="#" className="aside-popup__form">
                    <div className="aside-popup__form-inputs">
                        {enterOption === EnterOption.Email ?
                            <input className="input aside-popup__form-input" name="phone" type={InputType.Phone}
                                placeholder="Введите номер телефона" /> :
                            <>
                                <input className="input aside-popup__form-input" name="login_email" type={InputType.Email}
                                    placeholder="Введите e-mail" />

                            </>
                        }
                        {enterOption === EnterOption.Email ?
                            <div className="aside-popup__form-wrap">
                                <label className="form-agree">
                                    <input className="check-box" type="checkbox" />
                                    <span className="check-style"></span>
                                    <span className="check-text">
                                        Запомнить меня
                                    </span>
                                </label>
                                <button onClick={openPasswordRecovery} className="remind-password" type="button">
                                    Напомнить пароль
                                </button>
                            </div>
                            : null
                        }
                    </div>
                    <Button className="aside-popup__form-btn" text="Войти" type="submit" />
                </form>
                <button onClick={onEnterOption} className="aside-popup__link-btn" type="button">
                    {`Войти с помощью ${enterOption === EnterOption.Email ? 'e-mail и пароля' : 'номера телефона'}`}
                </button>
            </div>
            <div className="aside-popup__social">
                <div className="aside-popup__social-title ">
                    Или войдите через
                </div>
                <Social filterParam="footer" />
            </div>
        </div>
    );
}

export default Enter;

//<PasswordInput {...FIELDS.filter((field) => field.type === InputType.Password)[0]} />