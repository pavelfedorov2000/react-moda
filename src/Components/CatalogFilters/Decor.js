import React, { useRef, useEffect, useState } from 'react';
import checkIcon from '../../assets/images/icons/check.svg';
import dropArr from '../../assets/images/icons/drop-arr-black.svg';
import Buttons from './buttons';

function Decor({ checkedFilters, onCheckChange, setCheckedFilters }) {
    const decor = ['геометрия', 'горох', 'животное', 'камуфляж', 'клетка', 'леопардовый'];
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

    //const [checkedFilter, setCheckedFilter] = useState(false);

    useEffect(() => {
        document.body.addEventListener('click', handleOutsideClick);
    }, []);
    return (
        <fieldset ref={filterRef} class="catalog-filters__item catalog-filters__item--decor">
            <legend onClick={toggleFilter} style={{ backgroundImage: `url(${dropArr})` }} className="catalog-filters__item-title">
                <span style={{ fontWeight: checkedFilters > 0 ? '600' : '400' }}>Узор</span>
                <span class="filter-output">{checkedFilters > 0 ? `(${checkedFilters})` : ''}</span>
            </legend>
            {visibleFilter &&
                <div class="catalog-filters__item-drop catalog-drop-filter">
                    <div class="catalog-drop-filter__inner">
                        <div class="catalog-drop-filter__body">
                            <div class="catalog-drop-filter__title">Выберите узор</div>
                            <div class="catalog-drop-filter__items">
                                {decor.map((decor, i) => (
                                    <label key={`decor-${i}`} class="catalog-drop-filter__item">
                                        <input onChange={onCheckChange} class="check-box" type="checkbox" />
                                        <span class="check-style">
                                            <span style={{ backgroundImage: `url(${checkIcon})` }}></span>
                                        </span>
                                        <span class="check-text">{decor}</span>
                                    </label>
                                ))}
                            </div>
                        </div>
                    </div>
                    <Buttons setCheckedFilters={setCheckedFilters} checkedFilters={checkedFilters} />
                </div>
            }
        </fieldset>
    );
}

export default Decor;