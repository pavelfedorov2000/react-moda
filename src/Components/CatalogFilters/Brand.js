import React from 'react';
import Buttons from './buttons';

function Brand(props) {
    const brands = ['AllSaints', 'Allura', 'Arch', 'Arot', 'Allora', 'Bibi', 'B2B Black to Black'];
    return (
        <fieldset className="catalog-filters__item catalog-filters__item--brand">
            <legend className="catalog-filters__item-title">
                <span>Бренд</span>
                <span className="filter-output"></span>
            </legend>
            <div className="catalog-filters__item-drop catalog-drop-filter">
                <div className="catalog-drop-filter__inner">
                    <div className="catalog-drop-filter__body">
                        <div className="catalog-drop-filter__title">Найти бренд</div>
                        <input className="catalog-drop-filter__input" name="brand" placeholder="Введите название" />
                        <div className="catalog-drop-filter__items">
                            {brands.map((brand, i) => (
                                <label key={`brand-${i}`} className="catalog-drop-filter__item">
                                    <input className="check-box" type="checkbox" />
                                    <span className="check-style"></span>
                                    <span className="check-text">{brand}</span>
                                </label>
                            ))}
                        </div>
                    </div>
                </div>
                <Buttons />
            </div>
        </fieldset>
    );
}

export default Brand;