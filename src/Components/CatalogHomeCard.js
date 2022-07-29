import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AppContext } from '../context';

function CatalogHomeCard({ href, imageUrl, text, index }) {
    const { onChangeCategory } = useContext(AppContext);
    return (
        <Link className="catalog-home-card" to="/home" onClick={() => onChangeCategory(index)}>
            <img className="catalog-home-card__img" src={imageUrl} alt="фото" width="465" height="610" />
            <div className="catalog-home-card__title">{text}</div>
        </Link>
    );
}

export default CatalogHomeCard;