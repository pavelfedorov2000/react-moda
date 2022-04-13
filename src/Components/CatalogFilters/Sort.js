import React from 'react';
import checkIcon from '../../assets/images/icons/check.svg';

function Sort() {
    const sortFilters = ['По возрастанию цены', 'По убыванию цены', 'По популярности', 'По новинкам', 'По скидкам'];
    return (
        <fieldset className="catalog-filters__item catalog-filters__item--sort">
            <legend className="catalog-filters__item-title">
                <span>Сортировать</span>
            </legend>
            <div className="catalog-filters__item-drop catalog-drop-filter">
                <div className="catalog-drop-filter__inner">
                    {sortFilters.map((filter, i) => (
                        <label key={`filter-${i}`} className="catalog-drop-filter__item">
                            <input className="radio-box" type="radio" name="sort_filter" />
                            <span className="radio-style">
                                <span style={{ backgroundImage: `url(${checkIcon})` }}></span>
                            </span>
                            <span className="radio-text">{filter}</span>
                        </label>
                    ))}
                </div>
            </div>
        </fieldset>
    );
}

export default Sort;