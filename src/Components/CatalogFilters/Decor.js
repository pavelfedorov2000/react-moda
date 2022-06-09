import React, { useRef, useEffect, useState } from 'react';
import checkIcon from '../../assets/images/icons/check.svg';
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
    <fieldset ref={filterRef} className="catalog-filters__item catalog-filters__item--decor">
      <legend onClick={toggleFilter} className="catalog-filters__item-title">
        <span style={{ fontWeight: checkedFilters > 0 ? '600' : '400' }}>Узор</span>
        <span className="filter-output">{checkedFilters > 0 ? `(${checkedFilters})` : ''}</span>
        <svg onClick={toggleFilter} viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" clipRule="evenodd" d="M3.25 4L7 7.6L10.75 4L12 5.2L7 10L2 5.2L3.25 4Z" fill="#101112" />
        </svg>
      </legend>
      {visibleFilter &&
        <div className="catalog-filters__item-drop catalog-drop-filter">
          <div className="catalog-drop-filter__inner">
            <div className="catalog-drop-filter__body">
              <div className="catalog-drop-filter__title">Выберите узор</div>
              <div className="catalog-drop-filter__items">
                {decor.map(decor => (
                  <label key={decor} className="catalog-drop-filter__item">
                    <input onChange={onCheckChange} className="check-box" type="checkbox" />
                    <span className="check-style">
                      <span style={{ backgroundImage: `url(${checkIcon})` }}></span>
                    </span>
                    <span className="check-text">{decor}</span>
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