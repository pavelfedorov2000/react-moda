import { useState } from 'react';
import { InputType } from '../../enums/InputType';

const PasswordRecovery = () => {
    const [email, setEmail] = useState('');
    const onChangeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
    }

    const [success, setSuccess] = useState(false);
    const handleSubmit = (e: React.SyntheticEvent<HTMLFormElement>) => {
        e.preventDefault();
        setSuccess(true);
        setTimeout(() => {
            setEmail('');
            setSuccess(false);
        }, 3000);
    }

    return (
        <form onSubmit={handleSubmit} action="#" className="aside-popup__form">
            <div className="aside-popup__form-inputs">
                <input onInput={onChangeEmail} className="input aside-popup__form-input" type={InputType.Email} placeholder="Введите e-mail" value={email} />
            </div>
            <button className="button aside-popup__form-btn" type="submit" disabled={email === ''}>Отправить</button>

            {success &&
                <p className="form-success aside-popup__form-success">
                    Письмо оптравлено. Для восстановления пароля перейдите по ссылке в письме
                </p>
            }
        </form>
    );
}

export default PasswordRecovery;