import React from 'react';

function Buttons({ checkedFilters, setCheckedFilters }) {
  const clearChecks = () => {
    let copy = Object.assign([], checkedFilters);
    copy.length = 0;
    setCheckedFilters(copy);
  }
  return (
    <div className="catalog-drop-filter__buttons">
      <button onClick={clearChecks} className="btn catalog-drop-filter__btn btn--border" type="reset">
        Очистить все
        <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M11.9929 3L8 6.99286L4.00714 3L3 4.00714L6.99286 8L3 11.9929L4.00714 13L8 9.00714L11.9929 13L13 11.9929L9.00714 8L13 4.00714L11.9929 3Z"
            fill="#479458" />
        </svg>
      </button>
      <button className="btn catalog-drop-filter__btn" type="submit">Применить</button>
    </div>
  );
}

export default Buttons;