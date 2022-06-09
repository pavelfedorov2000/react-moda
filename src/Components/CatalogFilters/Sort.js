import React, { useRef, useEffect, useState } from 'react';
import checkIcon from '../../assets/images/icons/check.svg';

function Sort({ sortFilters, onClickSort, activeSortBy }) {

    const filterRef = useRef();

    const [visibleFilter, setVisibleFilter] = useState(false);

    const activeSort = sortFilters.filter(item => item.type == activeSortBy.type)[0].name;
    const [activeSortText, setActiveSortText] = useState(activeSort);

    const [radio, setRadio] = useState(false);

    const toggleRadio = (filter) => {
        onClickSort(filter);
        //setActiveSortText(e.nextElementSibling.nextElementSibling.textContent);
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
            <legend className="catalog-filters__item-title" onClick={toggleFilter}>
                <span>{`По ${activeSortText}`}</span>
                <svg onClick={toggleFilter} viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M3.25 4L7 7.6L10.75 4L12 5.2L7 10L2 5.2L3.25 4Z" fill="#101112" />
                </svg>
            </legend>
            {visibleFilter &&
                <div className="catalog-filters__item-drop catalog-drop-filter">
                    <div className="catalog-drop-filter__inner">
                        {sortFilters && sortFilters.map(filter => (
                            <label key={filter.type} className="catalog-drop-filter__item">
                                <input onChange={() => toggleRadio(filter)} className="radio-box" type="radio" name="sort_filter" checked={activeSortBy.type === filter.type && activeSortBy.order === filter.order ? true : false} />
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