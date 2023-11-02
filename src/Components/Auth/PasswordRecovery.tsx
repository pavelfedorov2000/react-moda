import { useState } from 'react';
import { InputType } from '../../enums/InputType';
import Button from '../../ui/Button';
import { ButtonType } from '../../enums/ButtonType';

const PasswordRecovery = () => {
    const [email, setEmail] = useState('');
    const onChangeEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(event.target.value);
    }

    const [success, setSuccess] = useState(false);
    const handleSubmit = (event: React.SyntheticEvent<HTMLFormElement>) => {
        event.preventDefault();
        
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
            <Button className="aside-popup__form-btn" text="Отправить" type={ButtonType.Submit} isDisabled={email === ''} />

            {success &&
                <p className="form-success aside-popup__form-success">
                    Письмо оптравлено. Для восстановления пароля перейдите по ссылке в письме
                </p>
            }
        </form>
    );
}

export default PasswordRecovery;