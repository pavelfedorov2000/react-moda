import classnames from 'classnames';
//import PropTypes from 'prop-types';
import React, { useCallback, useState } from 'react';
//import { Fancybox as NativeFancybox } from "@fancyapps/ui/dist/fancybox.esm.js";
import "@fancyapps/ui/dist/fancybox.css";
import classNames from 'classnames';
import heart from '../../assets/images/icons/heart.svg';
import heartFilled from '../../assets/images/icons/heart-filled.svg';
//import Button from '../Button';

function CatalogCard({ id, name, brand, imageUrl, price, color, sizes, isFavorite, discount, newProduct, onClickAddFavorite, onClickRemoveFavorite, setVisibleCatalogCardPopup }) {
    /* if (isLoaded) {
        return <PizzaLoader />;
    } */
    const sizesList = [42, 44, 46, 48, 50, 52];

    const [favorite, setFavorite] = useState(false);

    const toggleFavorite = () => {
        setFavorite(!favorite);
        /* setTimeout(() => {
            e.target.classList.remove(('animated'));
        }, 300); */
    }

    let obj;
    const onToggleFavoriteProduct = () => {
        toggleFavorite();
        isFavorite ? onClickRemoveFavorite(id) :
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

    return (
        <div className="catalog-card">
            <div className="labels">
                {discount != undefined &&
                    <span class="label label--discount">{`${discount}%`}</span>
                }
                {newProduct && newProduct != undefined &&
                    <span class="label label--new">new</span>
                }
            </div>
            <button onClick={onToggleFavoriteProduct} type="button" aria-label={favorite ? 'Удалить из избранного' : 'Добавить в избранное'} style={{ backgroundImage: `url(${favorite || isFavorite ? heartFilled : heart})` }} className="catalog-card__favorite"></button>
            <div className="catalog-card__img">
                <img src={imageUrl} alt={`${name} ${brand}`} width="336" height="448" />
                <div className="catalog-card__info">
                    <div className="catalog-card__sizes">
                        {sizesList.map(size => (
                            <a key={size} href="#" className={classnames('catalog-card__size', {
                                'catalog-card__size--disabled': !sizesList.includes(sizes[sizes.indexOf(size)])
                            })}>{size}</a>
                        ))}
                    </div>
                    <button onClick={() => setVisibleCatalogCardPopup(id)} className="catalog-card__info-link popup-link" type="button">Быстрый просмотр</button>
                </div>
            </div>
            <h6 className="catalog-card__title"><a href="#">{name}</a></h6>
            <div className="catalog-card__subtitle">{brand}</div>
            <div className="prices">
                <div className={classNames('price', {
                    'new-price': discount != undefined
                })}>{`${price} ₽`}</div>
                {discount != undefined &&
                    <div className="old-price catalog-card__old-price">{`${Math.floor(price * 100 / (100 - discount))} ₽`}</div>
                }
            </div>
        </div>
    );
}

//data-fancybox href="#product-popup"

//<a data-fancybox href="#size-subscribe-popup" className="catalog-card__size catalog-card__size--disabled">52</a>

// Типизация на минималках
/* PizzaBlock.propTypes = {
    name: PropTypes.string,
    imageUrl: PropTypes.string.isRequired,
    price: PropTypes.number,
    types: PropTypes.arrayOf(PropTypes.number),
    sizes: PropTypes.arrayOf(PropTypes.number),
    isLoading: PropTypes.bool,
    onClickAddPizza: PropTypes.func,
    addedCount: PropTypes.number,
};

PizzaBlock.defaultProps = {
    name: '---',
    price: 0,
    types: [],
    sizes: [],
    isLoading: false,
}; */

export default CatalogCard;