import React, { useRef, useEffect, useState } from 'react';
import checkIcon from '../../assets/images/icons/check.svg';

function Style({ onCheckChange, onSelectSortStyles, onResetSortStyles, checkedStyles, setCheckedStyles }) {

    const styles = ['деловой', 'вечерний', 'повседневный', 'спортивный'];
    const filterRef = useRef();

    const [visibleFilter, setVisibleFilter] = useState(false);

    const toggleFilter = () => {
        setVisibleFilter(!visibleFilter);
    }

    const handleResetSortStyles = () => {
        setCheckedStyles([]);
        onResetSortStyles();
    }

    const handleOutsideClick = (event) => {
        const path = event.path || (event.composedPath && event.composedPath());
        if (!path.includes(filterRef.current)) {
            setVisibleFilter(false);
        }
    }

    useEffect(() => {
        document.body.addEventListener('click', handleOutsideClick);
    }, []);

    return (
        <fieldset ref={filterRef} className="catalog-filters__item catalog-filters__item--style">
            <legend onClick={toggleFilter} className="catalog-filters__item-title" style={{ fontWeight: `${checkedStyles.length > 0 ? '600' : '400'}` }}>
                <span>Стиль</span>
                {checkedStyles.length > 0 &&
                    <span className="filter-output">{`(${checkedStyles.length})`}</span>
                }
                <svg onClick={toggleFilter} viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M3.25 4L7 7.6L10.75 4L12 5.2L7 10L2 5.2L3.25 4Z" fill="#101112" />
                </svg>
            </legend>

            {visibleFilter &&
                <div className="catalog-filters__item-drop catalog-drop-filter">
                    <div className="catalog-drop-filter__inner">
                        <div className="catalog-drop-filter__title">Выберите стиль</div>
                        <div className="catalog-drop-filter__items">
                            {styles.map((style, i) => (
                                <label key={style} className="catalog-drop-filter__item">
                                    <input onChange={() => onCheckChange(styles, i, checkedStyles, setCheckedStyles)} className="check-box" type="checkbox" checked={checkedStyles.includes(style) ? true : false} />
                                    <span class="check-style">
                                        <span style={{ backgroundImage: `url(${checkIcon})` }}></span>
                                    </span>
                                    <span className="check-text">{style}</span>
                                </label>
                            ))}
                        </div>
                    </div>
                    <div className="catalog-drop-filter__buttons">
                        <button onClick={handleResetSortStyles} className="btn catalog-drop-filter__btn btn--border" type="reset">
                            <span>Очистить все</span>
                            <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M11.9929 3L8 6.99286L4.00714 3L3 4.00714L6.99286 8L3 11.9929L4.00714 13L8 9.00714L11.9929 13L13 11.9929L9.00714 8L13 4.00714L11.9929 3Z"
                                    fill="#479458" />
                            </svg>
                        </button>
                        <button onClick={() => onSelectSortStyles(checkedStyles)} className="btn catalog-drop-filter__btn" type="button">Применить</button>
                    </div>
                </div>
            }
        </fieldset>
    );
}

export default Style;