import classNames from 'classnames';
import React from 'react';

function SliderArrows({ className }) {
    return (
        <div className={classNames('slider-arrows splide__arrows', className !== undefined && className)}>
            <button className="splide__arrow splide__arrow--prev">
                <svg viewBox="0 0 56 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M0.292892 8.70711C-0.0976295 8.31658 -0.0976295 7.68342 0.292892 7.29289L6.65685 0.928932C7.04738 0.538408 7.68054 0.538408 8.07107 0.928932C8.46159 1.31946 8.46159 1.95262 8.07107 2.34315L2.41422 8L8.07107 13.6569C8.46159 14.0474 8.46159 14.6805 8.07107 15.0711C7.68054 15.4616 7.04738 15.4616 6.65685 15.0711L0.292892 8.70711ZM56 9H1V7H56V9Z"
                        fill="#C0C0C0" />
                </svg>
            </button>
            <button className="splide__arrow splide__arrow--next">
                <svg viewBox="0 0 56 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M55.7071 8.70711C56.0976 8.31658 56.0976 7.68342 55.7071 7.29289L49.3431 0.928932C48.9526 0.538408 48.3195 0.538408 47.9289 0.928932C47.5384 1.31946 47.5384 1.95262 47.9289 2.34315L53.5858 8L47.9289 13.6569C47.5384 14.0474 47.5384 14.6805 47.9289 15.0711C48.3195 15.4616 48.9526 15.4616 49.3431 15.0711L55.7071 8.70711ZM0 9H55V7H0V9Z"
                        fill="#C0C0C0" />
                </svg>
            </button>
        </div>
    );
}

export default SliderArrows;