import classNames from 'classnames';
import React, { useState } from 'react';
import { Sort, Size, Color, Brand, Price, Style } from './CatalogFilters/index';

function CatalogFilters({ onClickSort, activeSortBy, sortFilters, sortPrices, onChangePrices, onResetPrices, onSelectSortColors, onSelectSortSizes, onSelectSortBrands, onSelectSortStyles, sortColors, sortSizes, sortBrands, sortStyles, visibleFilters, onCloseFilters, onResetSortColors, onResetSortBrands, onResetSortStyles, onResetSortSizes, onResetFilters }) {

    const onCheckChange = (arr, index, filters, setFilters) => {
        let checkText = arr[index];
        let copy;
        if (!filters.includes(checkText)) {
            copy = [...filters];
            copy.push(checkText);
        } else {
            copy = [...filters];
            copy.splice(copy.indexOf(checkText), 1);
        }
        setFilters(copy);
    }

    const [activeFilter, setActiveFilter] = useState('Фильтры');
    /* const onCloseFilter = () => {
      setActiveFilter('Фильтры');
    } */

    const [checkedColors, setCheckedColors] = useState(sortColors);
    const [checkedSizes, setCheckedSizes] = useState(sortSizes);
    const [checkedBrands, setCheckedBrands] = useState(sortBrands);
    const [checkedStyles, setCheckedStyles] = useState(sortStyles);
    const [fromPrice, setFromPrice] = useState(null);
    const [toPrice, setToPrice] = useState(null);

    const handleResetFilters = () => {
        onResetFilters();
        setCheckedColors([]);
        setCheckedSizes([]);
        setCheckedBrands([]);
        setCheckedStyles([]);
        setFromPrice('');
        setToPrice('');
    }

    return (
        <form action="#" className={classNames('catalog-filters', {
            'active': visibleFilters
        })}>
            <div className="catalog-filters__header">
                {activeFilter !== 'Фильтры' &&
                    <button className="catalog-filters__back-btn" type="button" aria-label="Назад">
                        <svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd"
                                d="M12.8572 14.1072L8.57146 9.28578L12.8572 4.46436L11.4286 2.85721L5.71432 9.28578L11.4286 15.7144L12.8572 14.1072Z"
                                fill="#505661" />
                        </svg>
                    </button>
                }
                <div className="catalog-filters__title">{activeFilter}</div>
                <button onClick={onCloseFilters} className="catalog-filters__close" type="button" aria-label="Закрыть фильтры">
                    <svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <line x1="2.64645" y1="16.6464" x2="16.7886" y2="2.50431" stroke="black" />
                        <line x1="3.35355" y1="2.64645" x2="17.4957" y2="16.7886" stroke="black" />
                    </svg>
                </button>
            </div>
            <div className="catalog-filters__row">
                <Sort sortFilters={sortFilters} activeSortBy={activeSortBy} onClickSort={onClickSort} />
                <Color onCheckChange={onCheckChange} onSelectSortColors={onSelectSortColors} onResetSortColors={onResetSortColors} checkedColors={checkedColors} setCheckedColors={setCheckedColors} />
                <Size onCheckChange={onCheckChange} onSelectSortSizes={onSelectSortSizes} onResetSortSizes={onResetSortSizes} checkedSizes={checkedSizes} setCheckedSizes={setCheckedSizes} />
                <Price sortPrices={sortPrices} onChangePrices={onChangePrices} onResetPrices={onResetPrices} fromPrice={fromPrice} toPrice={toPrice} setFromPrice={setFromPrice} setToPrice={setToPrice} />
                <Brand onCheckChange={onCheckChange} onSelectSortBrands={onSelectSortBrands} onResetSortBrands={onResetSortBrands} checkedBrands={checkedBrands} setCheckedBrands={setCheckedBrands} />
                <Style onCheckChange={onCheckChange} onSelectSortStyles={onSelectSortStyles} onResetSortStyles={onResetSortStyles} checkedStyles={checkedStyles} setCheckedStyles={setCheckedStyles} />
            </div>
            <button onClick={handleResetFilters} className="catalog-filters__reset-btn" type="reset">
                <span>Очистить все</span>
                <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M11.9929 3L8 6.99286L4.00714 3L3 4.00714L6.99286 8L3 11.9929L4.00714 13L8 9.00714L11.9929 13L13 11.9929L9.00714 8L13 4.00714L11.9929 3Z"
                        fill="#9B9B9B" />
                </svg>
            </button>
        </form>
    );
}
//
//<Material />
//<Decor checked={checked} checkedFilters={checkedFilters} setCheckedFilters={setCheckedFilters} onCheckChange={onCheckChange} />

export default CatalogFilters;