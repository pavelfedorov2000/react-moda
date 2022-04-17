import React from 'react';

function Personal() {
    return (
        <form className="profile-personal profile-page__form">
            <input className="input" name="name" value="Иванка" />
            <input className="input" name="surname" value="Иванова" />
            <input className="input" name="phone" value="+7 (999) 999-99-99 " type="tel" />
            <input className="input" name="email" value="post@mail.ru" type="email" />
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
            <button className="btn profile-personal__btn" type="submit">
                Сохранить изменения
            </button>
        </form>
    );
}

export default Personal;