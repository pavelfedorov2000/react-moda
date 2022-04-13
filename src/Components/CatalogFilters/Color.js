import React from 'react';
import Buttons from './buttons';

function Color(props) {
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
    return (
        <fieldset className="catalog-filters__item catalog-filters__item--color">
            <legend className="catalog-filters__item-title">
                <span>Цвет</span>
                <span className="filter-output"></span>
            </legend>
            <div className="catalog-filters__item-drop catalog-drop-filter">
                <div className="catalog-drop-filter__inner">
                    <div className="catalog-drop-filter__body">
                        <div className="catalog-drop-filter__title">Выберите цвет</div>
                        <div className="catalog-drop-filter__items">
                            {colors.map((color, i) => (
                                <label className="catalog-drop-filter__item">
                                    <input className="check-box" type="checkbox" name="color" />
                                    <span className="check-style"></span>
                                    <span className="check-color" style={{ background: color.bg }}></span>
                                    <span className="check-text">белый</span>
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

export default Color;