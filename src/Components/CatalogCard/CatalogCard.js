import classNames from 'classnames';
import React, { useContext, useState } from 'react';
import heart from '../../assets/images/icons/heart.svg';
import heartFilled from '../../assets/images/icons/heart-filled.svg';
import { Link } from 'react-router-dom';
import { AppContext } from '../../context';

function CatalogCard({ id, name, brand, imageUrl, price, color, sizes, discount, newProduct, onClickAddFavorite, onClickRemoveFavorite, isFavorite }) {
    const sizesList = [42, 44, 46, 48, 50, 52];

    const { setVisibleCatalogCardPopup } = useContext(AppContext);

    const [favorite, setFavorite] = useState(false);

    let obj;
    const onAddFavoriteProduct = () => {
        setFavorite(true);
        obj = {
            id,
            name,
            brand,
            imageUrl,
            price,
            color,
            sizes,
            discount,
            isFavorite: true
        };
        onClickAddFavorite(obj);
    }

    const onRemoveFavoriteProduct = () => {
        setFavorite(false);
        onClickRemoveFavorite(id);
    }

    return (
        <div className="catalog-card">
            <div className="labels">
                {discount != 0 &&
                    <span className="label catalog-card__label label--discount">{`${discount}%`}</span>
                }
                {newProduct && newProduct != undefined &&
                    <span className="label catalog-card__label label--new">new</span>
                }
            </div>
            {favorite ?
                <button onClick={onRemoveFavoriteProduct} type="button" aria-label="Удалить из избранного" style={{ backgroundImage: `url(${heartFilled})` }} className="catalog-card__favorite"></button> :
                <button onClick={onAddFavoriteProduct} type="button" aria-label="Добавить в избранное" style={{ backgroundImage: `url(${heart})` }} className="catalog-card__favorite"></button>
            }
            <div className="catalog-card__img">
                <img src={imageUrl} alt={`${name} ${brand}`} width="336" height="448" />
                <div className="catalog-card__info">
                    <div className="catalog-card__sizes">
                        {sizes && sizesList.map(size => (
                            <span key={size} className={classNames('catalog-card__size', {
                                'catalog-card__size--disabled': !sizesList.includes(sizes[sizes.indexOf(size)])
                            })}>{size}</span>
                        ))}
                    </div>
                    <button onClick={() => setVisibleCatalogCardPopup(id)} className="catalog-card__info-link popup-link" type="button">Быстрый просмотр</button>
                </div>
            </div>
            <Link to={`/product-card/${id}`} className="catalog-card__title">{name}</Link>
            <div className="catalog-card__subtitle">{brand}</div>
            <div className="prices">
                <div className={classNames('price', {
                    'new-price': discount != 0
                })}>{`${price} ₽`}</div>
                {discount != 0 &&
                    <div className="old-price catalog-card__old-price">{`${Math.floor(price * 100 / (100 - discount))} ₽`}</div>
                }
            </div>
        </div>
    );
}

export default CatalogCard;