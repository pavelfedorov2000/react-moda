import { useState } from 'react';
import TogglePassword from './TogglePassword';

const PasswordInput = ({ field }) => {
    const [visiblePassword, setVisiblePassword] = useState(false);
    const onChangePasswordVisibility = () => {
        setVisiblePassword((prevState) => !prevState);
    }

    return (
        <div className="input-wrap">
            <input className="input aside-popup__form-input" type={visiblePassword ? 'text' : 'password'} name="password"
                placeholder={`${field ?? 'Введите'} пароль*`} />
            <TogglePassword visiblePassword={visiblePassword} onClick={onChangePasswordVisibility} />
        </div>
    );
}

export default PasswordInput;