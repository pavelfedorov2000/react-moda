import React, { useRef, useEffect, useState } from 'react';

function Price({ onChangePrices, onResetPrices, sortPrices, fromPrice, toPrice, setFromPrice, setToPrice }) {
    const filterRef = useRef();

    const [visibleFilter, setVisibleFilter] = useState(false);

    const toggleFilter = () => {
        setVisibleFilter(!visibleFilter);
    }

    const handleOutsideClick = (event) => {
        const path = event.path || (event.composedPath && event.composedPath());
        if (!path.includes(filterRef.current)) {
            setVisibleFilter(false);
        }
    }

    const onChangeFromPrice = (e) => {
        setFromPrice(e.target.value);
    }
    const onChangeToPrice = (e) => {
        setToPrice(e.target.value);
    }

    const resetPrices = () => {
        setFromPrice('');
        setToPrice('');
    }

    const handleResetPrices = () => {
        resetPrices();
        onResetPrices();
    }

    const onSubmitPrices = (e) => {
        e.preventDefault();
        onChangePrices(fromPrice, toPrice)
    }

    useEffect(() => {
        document.body.addEventListener('click', handleOutsideClick);
    }, []);
    return (
        <fieldset ref={filterRef} className="catalog-filters__item">
            <legend onClick={toggleFilter} className="catalog-filters__item-title">
                <span>Цена:</span>
                <span className="filter-output"></span>
                <span className="filter-output"></span>
                <svg onClick={toggleFilter} viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M3.25 4L7 7.6L10.75 4L12 5.2L7 10L2 5.2L3.25 4Z" fill="#101112" />
                </svg>
            </legend>
            {visibleFilter &&
                <div className="catalog-filters__item-drop catalog-drop-filter">
                    <div className="catalog-drop-filter__inner catalog-drop-filter__price-range price-range">
                        <div className="price-range__item">
                            <span>От</span>
                            <input onChange={onChangeFromPrice} className="price-range__input" name="price_from" type="number" min={sortPrices[0]} placeholder={sortPrices[0]} value={fromPrice} />
                        </div>
                        <div className="price-range__item">
                            <span>До</span>
                            <input onChange={onChangeToPrice} className="price-range__input" name="price_to" type="number" max={sortPrices[1]} placeholder="100 000" value={toPrice} />
                        </div>
                    </div>
                    <div className="catalog-drop-filter__buttons">
                        <button onClick={handleResetPrices} className="btn catalog-drop-filter__btn btn--border" type="reset">
                            Очистить все
                            <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M11.9929 3L8 6.99286L4.00714 3L3 4.00714L6.99286 8L3 11.9929L4.00714 13L8 9.00714L11.9929 13L13 11.9929L9.00714 8L13 4.00714L11.9929 3Z"
                                    fill="#479458" />
                            </svg>
                        </button>
                        <button onClick={onSubmitPrices} className="btn catalog-drop-filter__btn">Применить</button>
                    </div>
                </div>
            }
        </fieldset>
    );
}

export default Price;