import React, { useRef, useEffect, useState } from 'react';
import checkIcon from '../../assets/images/icons/check.svg';

function Brand({ onCheckChange, onSelectSortBrands, sortBrands }) {

  const [checkedBrands, setCheckedBrands] = useState(sortBrands);
  //console.log(checkedBrands);

  const brands = ['AllSaints', 'Allura', 'Arch', 'Arot', 'Allora', 'Bibi', 'B2B Black to Black'];
  const filterRef = useRef();
  const [visibleFilter, setVisibleFilter] = useState(false);

  const toggleFilter = (e) => {
    //console.log(e.target);
    setVisibleFilter(!visibleFilter);
  }

  const onOpenFilter = (e) => {
    setVisibleFilter(true);
    //setActiveFilter(e.target.parentElementSibling.children[0].textContent);
  }

  /* const handleCloseFilter = () => {
    onCloseFilter();
    setVisibleFilter(false);
  } */

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
      <legend className="catalog-filters__item-title" style={{ fontWeight: `${checkedBrands.length > 0 ? '600' : '400'}` }}>
        <span>Бренд</span>
        {checkedBrands.length > 0 &&
          <span className="filter-output">{`(${checkedBrands.length})`}</span>
        }
        <svg onClick={toggleFilter} viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M3.25 4L7 7.6L10.75 4L12 5.2L7 10L2 5.2L3.25 4Z" fill="#101112" />
        </svg>
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
                    <input onChange={() => onCheckChange(brands, i, checkedBrands, setCheckedBrands)} className="check-box" type="checkbox" checked={checkedBrands.includes(brand) ? true : false} />
                    <span class="check-style">
                      <span style={{ backgroundImage: `url(${checkIcon})` }}></span>
                    </span>
                    <span className="check-text">{brand}</span>
                  </label>
                ))}
              </div>
            </div>
          </div>
          <div className="catalog-drop-filter__buttons">
            <button className="btn catalog-drop-filter__btn btn--border" type="reset">
              <span>Очистить все</span>
              <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M11.9929 3L8 6.99286L4.00714 3L3 4.00714L6.99286 8L3 11.9929L4.00714 13L8 9.00714L11.9929 13L13 11.9929L9.00714 8L13 4.00714L11.9929 3Z"
                  fill="#479458" />
              </svg>
            </button>
            <button onClick={() => onSelectSortBrands(checkedBrands)} className="btn catalog-drop-filter__btn" type="button">Применить</button>
          </div>
        </div>
      }
    </fieldset>
  );
}

export default Brand;