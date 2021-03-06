import React from 'react';
import { Link } from 'react-router-dom';
import collectionImg from '../assets/images/content/collection.jpg';

function Collection() {
    return (
        <article className="promo-collection">
            <div className="promo-collection__inner">
                <div className="promo-collection__img">
                    <img src={collectionImg} alt="жилетка" width="724" height="350" />
                </div>
                <div className="promo-collection__suptitle">Ретро стиль в современной одежде</div>
                <div className="title promo-collection__title">
                    Свитеры и жилетки.<br />
                    Зима 2022
                </div>
                <Link to="/catalog" className="all-link promo-collection__link">
                    <span>Смотреть коллекцию</span>
                    <svg viewBox="0 0 56 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M55.7071 8.70711C56.0976 8.31658 56.0976 7.68342 55.7071 7.29289L49.3431 0.928932C48.9526 0.538408 48.3195 0.538408 47.9289 0.928932C47.5384 1.31946 47.5384 1.95262 47.9289 2.34315L53.5858 8L47.9289 13.6569C47.5384 14.0474 47.5384 14.6805 47.9289 15.0711C48.3195 15.4616 48.9526 15.4616 49.3431 15.0711L55.7071 8.70711ZM0 9H55V7H0V9Z" fill="#C0C0C0" />
                    </svg>
                </Link>
            </div>
        </article>
    );
}

export default Collection;