import React from 'react';
import Buttons from './buttons';

function Style(props) {
    const styles = ['деловой', 'вечерний', 'повседневный', 'спортивный'];
    return (
        <fieldset className="catalog-filters__item catalog-filters__item--style">
            <legend className="catalog-filters__item-title">
                <span>Стиль</span>
                <span className="filter-output"></span>
            </legend>
            <div className="catalog-filters__item-drop catalog-drop-filter">
                <div className="catalog-drop-filter__inner">
                    <div className="catalog-drop-filter__title">Выберите стиль</div>
                    <div className="catalog-drop-filter__items">
                        {styles.map((style, i) => (
                            <label key={`style-${i}`} className="catalog-drop-filter__item">
                                <input className="check-box" type="checkbox" />
                                <span className="check-style"></span>
                                <span className="check-text">{style}</span>
                            </label>
                        ))}
                    </div>
                </div>
                <Buttons />
            </div>
        </fieldset>
    );
}

export default Style;