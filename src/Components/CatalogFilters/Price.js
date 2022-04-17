import React, { useRef, useEffect, useState } from 'react';
import dropArr from '../../assets/images/icons/drop-arr-black.svg';

function Price({ onChangePrices, onResetPrices, sortPrices }) {
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

    const [fromPrice, setFromPrice] = useState(null);
    const onChangeFromPrice = (e) => {
        setFromPrice(e.target.value);
        console.log(fromPrice);
    }
    const [toPrice, setToPrice] = useState(null);
    const onChangeToPrice = (e) => {
        setToPrice(e.target.value);
        console.log(toPrice);
    }

    const resetPrices = () => {
        setFromPrice(null);
        setToPrice(null);
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
        <fieldset ref={filterRef} class="catalog-filters__item">
            <legend onClick={toggleFilter} class="catalog-filters__item-title" style={{ backgroundImage: `url(${dropArr})` }}>
                <span>Цена:</span>
                <span class="filter-output"></span>
                <span class="filter-output"></span>
            </legend>
            {visibleFilter &&
                <div class="catalog-filters__item-drop catalog-drop-filter">
                    <div class="catalog-drop-filter__inner catalog-drop-filter__price-range price-range">
                        <div class="price-range__item">
                            <span>От</span>
                            <input onChange={onChangeFromPrice} class="price-range__input" name="price_from" type="number" min={sortPrices[0]} placeholder={sortPrices[0]} value={fromPrice} />
                        </div>
                        <div class="price-range__item">
                            <span>До</span>
                            <input onChange={onChangeToPrice} class="price-range__input" name="price_to" type="number" max={sortPrices[1]} placeholder="100 000" value={toPrice} />
                        </div>
                    </div>
                    <div class="catalog-drop-filter__buttons">
                        <button onClick={handleResetPrices} class="btn catalog-drop-filter__btn btn--border" type="reset">
                            Очистить все
                            <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M11.9929 3L8 6.99286L4.00714 3L3 4.00714L6.99286 8L3 11.9929L4.00714 13L8 9.00714L11.9929 13L13 11.9929L9.00714 8L13 4.00714L11.9929 3Z"
                                    fill="#479458" />
                            </svg>
                        </button>
                        <button onClick={onSubmitPrices} class="btn catalog-drop-filter__btn">Применить</button>
                    </div>
                </div>
            }
        </fieldset>
    );
}

export default Price;