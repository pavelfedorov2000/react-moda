import React from 'react';
import filterIcon from '../assets/images/icons/filter.svg';

function FiltersBtn({ onClick, isExpanded }) {
    return (
        <button onClick={onClick} className="filters-btn" aria-expanded={isExpanded ? true : false} type="button" style={{ backgroundImage: `url(${filterIcon})` }}>
            Фильтры
        </button>
    );
}

export default FiltersBtn;