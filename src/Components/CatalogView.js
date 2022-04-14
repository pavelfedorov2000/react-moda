import classNames from 'classnames';
import React from 'react';

function CatalogView({ onViewChange, catalogView }) {
  return (
    <div className="catalog__view">
      <button onClick={onViewChange} type="button" className={classNames('catalog__view-btn grid-btn', {
        'active': catalogView === 'grid'
      })}>
        <svg viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="0.5" y="0.5" width="7" height="7" rx="0.5" stroke="#C0C0C0" />
          <rect x="11.5" y="0.5" width="7" height="7" rx="0.5" stroke="#C0C0C0" />
          <rect x="11.5" y="11.5" width="7" height="7" rx="0.5" stroke="#C0C0C0" />
          <rect x="0.5" y="11.5" width="7" height="7" rx="0.5" stroke="#C0C0C0" />
        </svg>
      </button>
      <button onClick={onViewChange} type="button" className={classNames('catalog__view-btn col-btn', {
        'active': catalogView === 'col'
      })}>
        <svg viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="0.5" y="0.5" width="7" height="18" rx="0.5" stroke="#C0C0C0" />
          <rect x="11.5" y="0.5" width="7" height="18" rx="0.5" stroke="#C0C0C0" />
        </svg>
      </button>
      <button onClick={onViewChange} type="button" className="catalog__view-btn row-btn">
        <svg viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="0.5" y="0.5" width="17" height="6.57895" rx="0.5" stroke="#C0C0C0" />
          <rect x="0.5" y="10.9214" width="17" height="6.57895" rx="0.5" stroke="#C0C0C0" />
        </svg>
      </button>
    </div>
  );
}

export default CatalogView;