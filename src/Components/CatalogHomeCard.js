import React from 'react';
import { Link } from 'react-router-dom';

function CatalogHomeCard({ name, imageUrl, text, index, onChangeCategory }) {
    return (
        <Link className="catalog-home-card" to={`/${name}`} onClick={() => onChangeCategory(index)}>
            <img className="catalog-home-card__img" src={imageUrl} alt="фото" width="465" height="610" />
            <div className="catalog-home-card__title">{text}</div>
        </Link>
    );
}

export default CatalogHomeCard;