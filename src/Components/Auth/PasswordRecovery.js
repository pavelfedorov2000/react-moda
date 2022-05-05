import React from 'react';

function PasswordRecovery({ onInputChange, disabledBtn, onPasswordRecoverySubmit, success }) {

  return (
    <form onSubmit={onPasswordRecoverySubmit} action="#" className="aside-popup__form">
      <div className="aside-popup__form-inputs">
        <input onInput={onInputChange} className="input aside-popup__form-input" name="password-recovery_email" type="email"
          placeholder="Введите e-mail" />
      </div>
      <button className="btn aside-popup__form-btn" type="submit" disabled={disabledBtn ? true : false}>Отправить</button>
      {success &&
        <p className="form-success aside-popup__form-success">
          Письмо оптравлено. Для восстановления пароля перейдите по ссылке в письме
        </p>
      }
    </form>
  );
}

export default PasswordRecovery;