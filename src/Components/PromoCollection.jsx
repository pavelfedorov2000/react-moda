import React from 'react';
import { Link } from 'react-router-dom';
import collectionImg from '../assets/images/content/collection.jpg';
import AllLink from './AllLink';

const PromoCollection = () => {
    return (
        <article className="promo-collection">
            <div className="promo-collection__img">
                <img src={collectionImg} alt="жилетка" width="724" height="350" />
            </div>

            <div className="promo-collection__suptitle">Ретро стиль в современной одежде</div>

            <h3 className="title promo-collection__title">
                Свитеры и жилетки.<br />
                Зима 2022
            </h3>

            <AllLink className='promo-collection__link' url='catalog' text='Смотреть коллекцию' />
        </article>
    );
}

export default PromoCollection;