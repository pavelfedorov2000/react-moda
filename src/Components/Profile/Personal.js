import React from 'react';
import Button from '../Button';

function Personal() {
    return (
        <form className="profile-personal profile-page__form">
            <input className="input" name="name" value="Иванка" />
            <input className="input" name="surname" value="Иванова" />
            <input className="input" name="phone" type="tel" value="+7 (999) 999-99-99 " />
            <input className="input" name="email" type="email" value="post@mail.ru" />
            <div className="profile-personal__row-field profile-personal__gender">
                <div className="profile-personal__field-title">Пол</div>
                <div className="profile-personal__gender-radios">
                    <label className="profile-personal__gender-radio">
                        <input className="radio-box" type="radio" name="gender" checked />
                        <span className="radio-style">
                            <span className="radio-text">Женский</span>
                        </span>
                    </label>
                    <label className="profile-personal__gender-radio">
                        <input className="radio-box" type="radio" name="gender" />
                        <span className="radio-style">
                            <span className="radio-text">Мужской</span>
                        </span>
                    </label>
                </div>
            </div>
            <div className="profile-personal__row-field profile-personal__password">
                <div className="profile-personal__field-title">Пароль</div>
                <a data-fancybox href="#password-change" className="input profile-personal__change-password-btn">Изменить</a>
            </div>
            <Button className="profile-personal__btn" title="Сохранить изменения" type="submit" />
        </form>
    );
}

export default Personal;