import React from 'react';
import PasswordInput from './PasswordInput';


function Register() {
  const passwordFields = ['Придумайте', 'Повторите'];

  return (
    <form action="#" className="aside-popup__form">
      <div className="aside-popup__form-inputs">
        <input className="input aside-popup__form-input" name="name" placeholder="Имя*" />
        <input className="input aside-popup__form-input" name="surname" placeholder="Фамилия*" />
        <input className="input aside-popup__form-input" name="phone" type="tel" placeholder="Ваш телефон*" />
        <input className="input aside-popup__form-input" name="email" type="email" placeholder="Ваш e-mail*" />
        {passwordFields.map((field, i) => (
          <PasswordInput key={`password-field_${i + 1}`} field={field} />
        ))}
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
  );
}

export default Register;