import React from 'react';

function Material(props) {
    const material = {
        "Основной материал": ['Акрил', 'Ангора', 'Бисер', 'Вискоза', 'Искусственная замша', 'Искусственная кожа'],
        "Утеплитель": ['Акрил', 'Искусственный мех', 'Искусственный пух', 'Микрофибра', 'Полиамид', 'Полимер']
    }
    return (
        <fieldset className="catalog-filters__item catalog-filters__item--material">
            <legend className="catalog-filters__item-title">
                <span>Материал</span>
                <span className="filter-output"></span>
            </legend>
            <div className="catalog-filters__item-drop catalog-drop-filter">
                <div className="catalog-drop-filter__inner">
                    <div className="catalog-drop-filter__body">
                        <div className="catalog-drop-filter__cols">
                            {Object.keys(material).map((key, i) => (
                                <fieldset key={`col-${i}`} className="catalog-drop-filter__col">
                                    <legend className="catalog-drop-filter__title">{key}</legend>
                                    {material[key].map((material, j) => (
                                        <label key={`material-${j}`} className="catalog-drop-filter__item">
                                            <input className="check-box" type="checkbox" />
                                            <span className="check-style"></span>
                                            <span className="check-text">{material}</span>
                                        </label>
                                    ))}
                                </fieldset>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="catalog-drop-filter__buttons">
                    <button className="btn catalog-drop-filter__btn btn--border" type="reset">
                        Очистить все
                        <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M11.9929 3L8 6.99286L4.00714 3L3 4.00714L6.99286 8L3 11.9929L4.00714 13L8 9.00714L11.9929 13L13 11.9929L9.00714 8L13 4.00714L11.9929 3Z"
                                fill="#479458" />
                        </svg>
                    </button>
                    <button className="btn catalog-drop-filter__btn" type="submit">Применить</button>
                </div>
            </div>
        </fieldset>
    );
}

export default Material;