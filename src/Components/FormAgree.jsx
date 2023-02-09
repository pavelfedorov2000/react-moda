import React from 'react';
import checkIcon from '../assets/images/icons/check.svg';

function FormAgree() {
    return (
        <label className="form-agree">
            <input className="check-box" name="user_agree" type="checkbox" />
            <span className="check-style">
                <span style={{ backgroundImage: `url(${checkIcon})` }}></span>
            </span>
            <span className="check-text">
                Я принимаю <a href="#">Пользовательское соглашение</a> о конфиденциальности
            </span>
        </label>
    );
}

export default FormAgree;