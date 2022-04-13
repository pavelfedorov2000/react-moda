import React from 'react';

function CatalogView(props) {
    return (
        <div className="catalog__view">
            <button className="catalog__view-btn grid-btn active" type="button">
                <svg viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="0.5" y="0.5" width="7" height="7" rx="0.5" stroke="#C0C0C0" />
                    <rect x="11.5" y="0.5" width="7" height="7" rx="0.5" stroke="#C0C0C0" />
                    <rect x="11.5" y="11.5" width="7" height="7" rx="0.5" stroke="#C0C0C0" />
                    <rect x="0.5" y="11.5" width="7" height="7" rx="0.5" stroke="#C0C0C0" />
                </svg>
            </button>
            <button className="catalog__view-btn col-btn" type="button">
                <svg viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="0.5" y="0.5" width="7" height="18" rx="0.5" stroke="#C0C0C0" />
                    <rect x="11.5" y="0.5" width="7" height="18" rx="0.5" stroke="#C0C0C0" />
                </svg>
            </button>
            <button className="catalog__view-btn row-btn" type="button">
                <svg viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="0.5" y="0.5" width="17" height="6.57895" rx="0.5" stroke="#C0C0C0" />
                    <rect x="0.5" y="10.9214" width="17" height="6.57895" rx="0.5" stroke="#C0C0C0" />
                </svg>
            </button>
        </div>
    );
}

export default CatalogView;