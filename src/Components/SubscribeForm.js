import React from 'react';
import submitArrow from '../assets/images/icons/submit-arr.svg';

function SubscribeForm({ actionText, placeholder }) {
  return (
    <form action="#" className="subscribe-form">
      <div className="form-row subscribe-form__wrap">
        <input className="form-row__input" type="email" name="email" placeholder={placeholder} />
        <button className="form-row__btn" type="submit" aria-label={actionText} style={{ backgroundImage: `url(${submitArrow})` }}></button>
      </div>
      <label className="form-agree">
        <input className="check-box" name="user_agree" type="checkbox" />
        <span className="check-style"></span>
        <span className="check-text">
          Я принимаю <a href="#">Пользовательское соглашение</a> о конфиденциальности
        </span>
      </label>
    </form>
  );
}

export default SubscribeForm;