import React, { useRef, useEffect, useState } from 'react';
import Buttons from './buttons';
import checkIcon from '../../assets/images/icons/check.svg';
import dropArr from '../../assets/images/icons/drop-arr-black.svg';

function Brand() {
  const brands = ['AllSaints', 'Allura', 'Arch', 'Arot', 'Allora', 'Bibi', 'B2B Black to Black'];
  const filterRef = useRef();
  const [visibleFilter, setVisibleFilter] = useState(false);

  const toggleFilter = (e) => {
    console.log(e.target);
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
    <fieldset ref={filterRef} className="catalog-filters__item catalog-filters__item--brand">
      <legend className="catalog-filters__item-title" style={{ backgroundImage: `url(${dropArr})` }} onClick={toggleFilter}>
        <span>Бренд</span>
        <span className="filter-output"></span>
      </legend>
      {visibleFilter &&
        <div className="catalog-filters__item-drop catalog-drop-filter">
          <div className="catalog-drop-filter__inner">
            <div className="catalog-drop-filter__body">
              <div className="catalog-drop-filter__title">Найти бренд</div>
              <input className="catalog-drop-filter__input" name="brand" placeholder="Введите название" />
              <div className="catalog-drop-filter__items">
                {brands.map((brand, i) => (
                  <label key={`brand-${i}`} className="catalog-drop-filter__item">
                    <input className="check-box" type="checkbox" />
                    <span class="check-style">
                      <span style={{ backgroundImage: `url(${checkIcon})` }}></span>
                    </span>
                    <span className="check-text">{brand}</span>
                  </label>
                ))}
              </div>
            </div>
          </div>
          <Buttons />
        </div>
      }
    </fieldset>
  );
}

export default Brand;