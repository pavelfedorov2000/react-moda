import React, { useRef, useEffect, useState } from 'react';
import Buttons from './buttons';
import checkIcon from '../../assets/images/icons/check.svg';
import dropArr from '../../assets/images/icons/drop-arr-black.svg';

function Style({ onCheckChange, onSelectSortStyles, sortStyles }) {


  const [checkedStyles, setCheckedStyles] = useState(sortStyles);
  //console.log(checkedStyles);

  const styles = ['деловой', 'вечерний', 'повседневный', 'спортивный'];
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

  useEffect(() => {
    document.body.addEventListener('click', handleOutsideClick);
  }, []);
  return (
    <fieldset ref={filterRef} className="catalog-filters__item catalog-filters__item--style">
      <legend onClick={toggleFilter} className="catalog-filters__item-title" style={{ backgroundImage: `url(${dropArr})`, fontWeight: `${checkedStyles.length > 0 ? '600' : '400'}` }}>
        <span>Стиль</span>
        {checkedStyles.length > 0 &&
          <span className="filter-output">{`(${checkedStyles.length})`}</span>
        }
      </legend>
      {visibleFilter &&
        <div className="catalog-filters__item-drop catalog-drop-filter">
          <div className="catalog-drop-filter__inner">
            <div className="catalog-drop-filter__title">Выберите стиль</div>
            <div className="catalog-drop-filter__items">
              {styles.map((style, i) => (
                <label key={`style-${i}`} className="catalog-drop-filter__item">
                  <input onChange={() => onCheckChange(styles, i, checkedStyles, setCheckedStyles)} className="check-box" type="checkbox" checked={checkedStyles.includes(style) ? true : false} />
                  <span class="check-style">
                    <span style={{ backgroundImage: `url(${checkIcon})` }}></span>
                  </span>
                  <span className="check-text">{style}</span>
                </label>
              ))}
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
            <button onClick={() => onSelectSortStyles(checkedStyles)} className="btn catalog-drop-filter__btn" type="button">Применить</button>
          </div>
        </div>
      }
    </fieldset>
  );
}

export default Style;