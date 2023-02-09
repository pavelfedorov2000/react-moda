import React from 'react';
import burger from '../../assets/images/icons/burger.svg';

const BurgerBtn = ({ onClick, isExpanded }) => {
    return (
        <button onClick={onClick} className="burger-btn" type="button" aria-label="Открыть меню" aria-expanded={isExpanded}>
            <img src={burger} alt="кнопка бургер" width="20" height="20" />
        </button>
    );
}

export default BurgerBtn;