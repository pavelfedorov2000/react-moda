import classNames from 'classnames';
import { useState } from 'react';
import { FILTERS_TITLE } from '../constants/filters';
import { Filter, FILTERS } from '../enums/Filter';
import { useActions } from '../hooks/useActions';
import { useTypedSelector } from '../hooks/useTypedSelector';
import CatalogFilter from './CatalogFilter';

const CatalogFilters = () => {
    const { isVisible } = useTypedSelector((state) => state.filtersReducer);
    const { resetFilters, closeFilters, setSortColors, setSortSizes, setSortBrands, setSortStyles, setSortPrices, resetSortBrands, resetSortColors, resetSortPrices, resetSortSizes, resetSortStyles } = useActions();

    const [activeFilter, setActiveFilter] = useState(FILTERS_TITLE);

    return (
        <form action="#" className={classNames('catalog-filters', {
            'active': isVisible
        })}>
            <div className="catalog-filters__header">
                {activeFilter !== FILTERS_TITLE &&
                    <button className="catalog-filters__back-btn" type="button" aria-label="Назад">
                        <svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd"
                                d="M12.8572 14.1072L8.57146 9.28578L12.8572 4.46436L11.4286 2.85721L5.71432 9.28578L11.4286 15.7144L12.8572 14.1072Z" />
                        </svg>
                    </button>
                }

                <div className="catalog-filters__title">{activeFilter}</div>

                <button onClick={closeFilters} className="catalog-filters__close" type="button" aria-label="Закрыть фильтры">
                    <svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <line x1="2.64645" y1="16.6464" x2="16.7886" y2="2.50431" stroke="black" />
                        <line x1="3.35355" y1="2.64645" x2="17.4957" y2="16.7886" stroke="black" />
                    </svg>
                </button>
            </div>

            <div className="catalog-filters__row">
                <CatalogFilter name={Filter.Sort} {...FILTERS.sort} />
                <CatalogFilter name={Filter.Brand} {...FILTERS.brand} onSelect={setSortBrands} onReset={resetSortBrands} />
                <CatalogFilter name={Filter.Color} {...FILTERS.color} onSelect={setSortColors} onReset={resetSortColors} />
                <CatalogFilter name={Filter.Size} {...FILTERS.size} onSelect={setSortSizes} onReset={resetSortSizes} />
                <CatalogFilter name={Filter.Price} {...FILTERS.price} onSelect={setSortPrices} onReset={resetSortPrices} />
                <CatalogFilter name={Filter.Style} {...FILTERS.style} onSelect={setSortStyles} onReset={resetSortStyles} />
            </div>

            <button onClick={resetFilters} className="catalog-filters__reset-btn" type="reset">
                <span>Очистить все</span>
                <svg className="icon" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd"
                        clipRule="evenodd"
                        d="M11.9929 3L8 6.99286L4.00714 3L3 4.00714L6.99286 8L3 11.9929L4.00714 13L8 9.00714L11.9929 13L13 11.9929L9.00714 8L13 4.00714L11.9929 3Z" />
                </svg>
            </button>
        </form>
    );
}

export default CatalogFilters;