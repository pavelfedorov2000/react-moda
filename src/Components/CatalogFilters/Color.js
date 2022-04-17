import React, { useRef, useEffect, useState } from 'react';
import Buttons from './buttons';
import classnames from 'classnames';
import checkIcon from '../../assets/images/icons/check.svg';
import dropArr from '../../assets/images/icons/drop-arr-black.svg';

function Color() {
    const colors = [
        {
            name: 'бежевый',
            bg: '143.13deg, #F1DAC4 22.32%, rgba(255, 238, 222, 0) 89.29%',
        },
        {
            name: 'белый',
            bg: '#fff',
        },
        {
            name: 'бирюзовый',
            bg: '144.09deg, #43E3DC 10.69%, rgba(67, 227, 220, 0) 90.81%',
        },
        {
            name: 'бордовый',
            bg: '140.19deg, #90011B 22.16%, rgba(144, 1, 27, 0) 91.48%',
        },
        {
            name: 'голубой',
            bg: '143.84deg, #8BCDFF 18.75%, rgba(139, 205, 255, 0) 90.76%',
        },
        {
            name: 'желтый',
            bg: '143.47deg, #FFEC1C 15.62%, rgba(255, 236, 28, 0) 90.69%',
        },
        {
            name: 'зеленый',
            bg: '145.49deg, #3DB800 6.37%, rgba(61, 184, 0, 0) 93.63%',
        },
        {
            name: 'золотой',
            bg: '135deg, #FFB156 0%, rgba(255, 177, 86, 0) 100%',
        },
    ];

    const [visibleFilter, setVisibleFilter] = useState(false);

    const toggleFilter = () => {
        setVisibleFilter(!visibleFilter);
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
            <legend onClick={toggleFilter} className="catalog-filters__item-title" style={{ backgroundImage: `url(${dropArr})` }}>
                <span>Цвет</span>
                <span className="filter-output"></span>
            </legend>
            {visibleFilter &&
                <div className="catalog-filters__item-drop catalog-drop-filter">
                    <div className="catalog-drop-filter__inner">
                        <div className="catalog-drop-filter__body">
                            <div className="catalog-drop-filter__title">Выберите цвет</div>
                            <div className="catalog-drop-filter__items">
                                {colors.map((color, i) => (
                                    <label className="catalog-drop-filter__item">
                                        <input className="check-box" type="checkbox" name="color" />
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
                    <Buttons />
                </div>
            }
        </fieldset >
    );
}

export default Color;