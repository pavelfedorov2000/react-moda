import React, { useRef, useEffect, useState } from 'react';
import Buttons from './buttons';
import checkIcon from '../../assets/images/icons/check.svg';
import dropArr from '../../assets/images/icons/drop-arr-black.svg';

function Style() {
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
      <legend onClick={toggleFilter} className="catalog-filters__item-title" style={{ backgroundImage: `url(${dropArr})` }}>
        <span>Стиль</span>
        <span className="filter-output"></span>
      </legend>
      {visibleFilter &&
        <div className="catalog-filters__item-drop catalog-drop-filter">
          <div className="catalog-drop-filter__inner">
            <div className="catalog-drop-filter__title">Выберите стиль</div>
            <div className="catalog-drop-filter__items">
              {styles.map((style, i) => (
                <label key={`style-${i}`} className="catalog-drop-filter__item">
                  <input className="check-box" type="checkbox" />
                  <span class="check-style">
                    <span style={{ backgroundImage: `url(${checkIcon})` }}></span>
                  </span>
                  <span className="check-text">{style}</span>
                </label>
              ))}
            </div>
          </div>
          <Buttons />
        </div>
      }
    </fieldset>
  );
}

export default Style;