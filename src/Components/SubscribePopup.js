import React from 'react';

function SubscribePopup({ title }) {
  return (
    <div class="popup sale-popup">
      <div class="sale-popup__title">{title}</div>
      <form action="#" class="sale-popup__form">
        <div class="sale-popup__form-items">
          <div class="sale-popup__form-item">
            <label class="sale-popup__form-check">
              <input class="check-box" type="checkbox" checked />
              <span class="check-style"></span>
              <span class="check-text">по e-mail</span>
            </label>
            <div class="select">
              <div class="select__title">Да</div>
              <div class="select__content">
                <label class="select__option" tabindex="0" data-value="Да">
                  <input class="select__input" type="radio" name="email-mailing" checked />
                  <span class="radio-style"></span>
                  <span class="select__option-text">Да</span>
                </label>
                <label class="select__option" tabindex="0" data-value="Нет">
                  <input class="select__input" type="radio" name="email-mailing" />
                  <span class="radio-style"></span>
                  <span class="select__option-text">Нет</span>
                </label>
              </div>
            </div>
          </div>
          <div class="sale-popup__form-item">
            <label class="sale-popup__form-check">
              <input class="check-box" type="checkbox" checked />
              <span class="check-style"></span>
              <span class="check-text">по sms</span>
            </label>
            <div class="select">
              <div class="select__title">Да</div>
              <div class="select__content">
                <label class="select__option" tabindex="0" data-value="Да">
                  <input class="select__input" type="radio" name="sms-mailing" checked />
                  <span class="radio-style"></span>
                  <span class="select__option-text">Да</span>
                </label>
                <label class="select__option" tabindex="0" data-value="Нет">
                  <input class="select__input" type="radio" name="sms-mailing" />
                  <span class="radio-style"></span>
                  <span class="select__option-text">Нет</span>
                </label>
              </div>
            </div>
          </div>
        </div>
        <button class="btn sale-popup__form-btn" type="submit">Подписаться</button>
      </form>
    </div>
  );
}

export default SubscribePopup;