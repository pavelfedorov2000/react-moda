import React, { useRef, useEffect, useState } from 'react';
import checkIcon from '../../assets/images/icons/check.svg';
import dropArr from '../../assets/images/icons/drop-arr-black.svg';

function Sort({ sortFilters, onClickSort, activeSortBy }) {

    console.log(activeSortBy);

    const filterRef = useRef();

    const [visibleFilter, setVisibleFilter] = useState(false);

    const [radio, setRadio] = useState(false);

    const toggleRadio = () => {
        setRadio(!radio);
    }

    const toggleFilter = () => {
        setVisibleFilter(!visibleFilter);
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
        <fieldset ref={filterRef} className="catalog-filters__item catalog-filters__item--sort">
            <legend className="catalog-filters__item-title" style={{ backgroundImage: `url(${dropArr})` }} onClick={toggleFilter}>
                <span>Сортировать</span>
            </legend>
            {visibleFilter &&
                <div className="catalog-filters__item-drop catalog-drop-filter">
                    <div className="catalog-drop-filter__inner">
                        {sortFilters && sortFilters.map((filter, i) => (
                            <label onClick={() => onClickSort(filter)} key={filter.type} className="catalog-drop-filter__item">
                                <input onChange={toggleRadio} className="radio-box" type="radio" name="sort_filter" checked={activeSortBy.type === filter.type && activeSortBy.order === filter.order ? true : false} />
                                <span className="radio-style">
                                    <span style={{ backgroundImage: `url(${checkIcon})` }}></span>
                                </span>
                                <span className="radio-text">{`По ${filter.name}`}</span>
                            </label>
                        ))}
                    </div>
                </div>
            }
        </fieldset>
    );
}

export default Sort;