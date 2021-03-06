import React, { useRef, useEffect, useState } from 'react';
import checkIcon from '../../assets/images/icons/check.svg';
import Buttons from './buttons';

function Material() {
  const material = {
    "Основной материал": ['Акрил', 'Ангора', 'Бисер', 'Вискоза', 'Искусственная замша', 'Искусственная кожа'],
    "Утеплитель": ['Акрил', 'Искусственный мех', 'Искусственный пух', 'Микрофибра', 'Полиамид', 'Полимер']
  };

  const [visibleFilter, setVisibleFilter] = useState(false);

  const toggleFilter = () => {
    setVisibleFilter(!visibleFilter);
  }

  const filterRef = useRef();

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
    <fieldset ref={filterRef} className="catalog-filters__item catalog-filters__item--material">
      <legend onClick={toggleFilter} className="catalog-filters__item-title">
        <span>Материал</span>
        <span className="filter-output"></span>
        <svg onClick={toggleFilter} viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" clipRule="evenodd" d="M3.25 4L7 7.6L10.75 4L12 5.2L7 10L2 5.2L3.25 4Z" fill="#101112" />
        </svg>
      </legend>
      {visibleFilter &&
        <div className="catalog-filters__item-drop catalog-drop-filter">
          <div className="catalog-drop-filter__inner">
            <div className="catalog-drop-filter__body">
              <div className="catalog-drop-filter__cols">
                {Object.keys(material).map((key, i) => (
                  <fieldset key={`col-${i}`} className="catalog-drop-filter__col">
                    <legend className="catalog-drop-filter__title">{key}</legend>
                    {material[key].map((material, j) => (
                      <label key={`material-${j}`} className="catalog-drop-filter__item">
                        <input className="check-box" type="checkbox" />
                        <span className="check-style">
                          <span style={{ backgroundImage: `url(${checkIcon})` }}></span>
                        </span>
                        <span className="check-text">{material}</span>
                      </label>
                    ))}
                  </fieldset>
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

export default Material;