import React, { useRef, useEffect, useState, useContext } from 'react';
import classnames from 'classnames';
import checkIcon from '../../assets/images/icons/check.svg';
import { CatalogFiltersContext } from '../../context';

const colors = [{
    id: 1,
    name: 'бежевый',
    bg: '143.13deg, #F1DAC4 22.32%, rgba(255, 238, 222, 0) 89.29%',
}, {
    id: 2,
    name: 'белый',
    bg: '#fff',
}, {
    id: 3,
    name: 'бирюзовый',
    bg: '144.09deg, #43E3DC 10.69%, rgba(67, 227, 220, 0) 90.81%',
}, {
    id: 4,
    name: 'бордовый',
    bg: '140.19deg, #90011B 22.16%, rgba(144, 1, 27, 0) 91.48%',
}, {
    id: 5,
    name: 'голубой',
    bg: '143.84deg, #8BCDFF 18.75%, rgba(139, 205, 255, 0) 90.76%',
}, {
    id: 6,
    name: 'желтый',
    bg: '143.47deg, #FFEC1C 15.62%, rgba(255, 236, 28, 0) 90.69%',
}, {
    id: 7,
    name: 'зеленый',
    bg: '145.49deg, #3DB800 6.37%, rgba(61, 184, 0, 0) 93.63%',
}, {
    id: 8,
    name: 'золотой',
    bg: '135deg, #FFB156 0%, rgba(255, 177, 86, 0) 100%',
}];

function Color({ onCheckChange, checkedColors, setCheckedColors }) {
    const { onSelectSortColors, onResetSortColors } = useContext(CatalogFiltersContext);

    const colorsArr = colors.map(color => color.name);

    const [visibleFilter, setVisibleFilter] = useState(false);

    const toggleFilter = () => {
        setVisibleFilter((prevState) => !prevState);
    }

    const handleResetSortColor = () => {
        setCheckedColors([]);
        onResetSortColors();
    }

    const filterRef = useRef();

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
        <fieldset ref={filterRef} className="catalog-filters__item catalog-filters__item--color">
            <legend onClick={toggleFilter} className="catalog-filters__item-title" style={{ fontWeight: `${checkedColors.length > 0 ? '600' : '400'}` }}>
                <span>Цвет</span>
                {checkedColors.length > 0 &&
                    <span className="filter-output">{`(${checkedColors.length})`}</span>
                }
                <svg onClick={toggleFilter} viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M3.25 4L7 7.6L10.75 4L12 5.2L7 10L2 5.2L3.25 4Z" fill="#101112" />
                </svg>
            </legend>

            {visibleFilter &&
                <div className="catalog-filters__item-drop catalog-drop-filter">
                    <div className="catalog-drop-filter__inner">
                        <div className="catalog-drop-filter__body">
                            <div className="catalog-drop-filter__title">Выберите цвет</div>
                            <div className="catalog-drop-filter__items">
                                {colors.map((color, i) => (
                                    <label key={color.id} className="catalog-drop-filter__item">
                                        <input onChange={() => onCheckChange(colorsArr, i, checkedColors, setCheckedColors)} className="check-box" type="checkbox" name="color" checked={checkedColors.includes(color.name) ? true : false} />
                                        <span className="check-style">
                                            <span style={{ backgroundImage: `url(${checkIcon})` }}></span>
                                        </span>
                                        <span style={{ background: `linear-gradient(${color.bg})` }} className={classnames('check-color', {
                                            'check-color--white': color.bg === '#fff'
                                        })}></span>
                                        <span className="check-text">{color.name}</span>
                                    </label>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="catalog-drop-filter__buttons">
                        <button onClick={handleResetSortColor} className="btn catalog-drop-filter__btn btn--border" type="reset">
                            <span>Очистить все</span>
                            <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M11.9929 3L8 6.99286L4.00714 3L3 4.00714L6.99286 8L3 11.9929L4.00714 13L8 9.00714L11.9929 13L13 11.9929L9.00714 8L13 4.00714L11.9929 3Z"
                                    fill="#479458" />
                            </svg>
                        </button>
                        <button onClick={() => onSelectSortColors(checkedColors)} className="btn catalog-drop-filter__btn" type="button">Применить</button>
                    </div>
                </div>
            }
        </fieldset>
    );
}

export default Color;