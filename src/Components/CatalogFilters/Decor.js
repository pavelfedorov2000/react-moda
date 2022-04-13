import React from 'react';

function Decor(props) {
    const decor = ['геометрия', 'горох', 'животное', 'камуфляж', 'клетка', 'леопардовый'];
    return (
        <fieldset class="catalog-filters__item catalog-filters__item--decor">
            <legend class="catalog-filters__item-title">
                <span>Узор</span>
                <span class="filter-output"></span>
            </legend>
            <div class="catalog-filters__item-drop catalog-drop-filter">
                <div class="catalog-drop-filter__inner">
                    <div class="catalog-drop-filter__body">
                        <div class="catalog-drop-filter__title">Выберите узор</div>
                        <div class="catalog-drop-filter__items">
                            {decor.map((decor, i) => (
                                <label key={`decor-${i}`} class="catalog-drop-filter__item">
                                    <input class="check-box" type="checkbox" />
                                    <span class="check-style"></span>
                                    <span class="check-text">{decor}</span>
                                </label>
                            ))}
                        </div>
                    </div>
                </div>

            </div>
        </fieldset>
    );
}

export default Decor;