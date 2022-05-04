import React, { useState } from 'react';
import TogglePassword from './TogglePassword';

function PasswordInput({ field }) {

  // Password toggle
  const [visiblePassword, setVisiblePassword] = useState(false);
  const onChangePasswordVisibility = () => {
    setVisiblePassword(!visiblePassword);
  }

  return (
    <div className="input-wrap">
      <input className="input aside-popup__form-input" type={visiblePassword ? 'text' : 'password'} name="password"
        placeholder={`${field ? field : 'Введите'} пароль*`} />
      <TogglePassword visiblePassword={visiblePassword} onChangePasswordVisibility={onChangePasswordVisibility} />
    </div>
  );
}

export default PasswordInput;