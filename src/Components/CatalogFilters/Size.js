import React from 'react';
import Buttons from './buttons';

function Size() {
    const sizes = [42, 44, 46, 48, 50, 52];
    return (
        <fieldset className="catalog-filters__item catalog-filters__item--size">
            <legend className="catalog-filters__item-title">
                <span>Размер</span>
                <span className="filter-output"></span>
            </legend>
            <div className="catalog-filters__item-drop catalog-drop-filter">
                <div className="catalog-drop-filter__inner">
                    <div className="catalog-drop-filter__title">Ваш Российский размер</div>
                    <div className="catalog-drop-filter__items">
                        {sizes.map(size => (
                            <label key={`size-${size}`} className="catalog-drop-filter__item">
                                <input className="check-box" type="checkbox" />
                                <span className="check-style"></span>
                                <span className="check-text">{size}</span>
                            </label>
                        ))}
                    </div>
                </div>
                <Buttons />
            </div>
        </fieldset>

    );
}

export default Size;