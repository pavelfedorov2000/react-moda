import classnames from 'classnames';
//import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { Fancybox as NativeFancybox } from "@fancyapps/ui/dist/fancybox.esm.js";
import "@fancyapps/ui/dist/fancybox.css";
import classNames from 'classnames';
import heart from '../../assets/images/icons/heart.svg';
import heartFilled from '../../assets/images/icons/heart-filled.svg';
//import Button from '../Button';

function CatalogCard({ id, articul, name, brand, imageUrl, price, sizes, isFavorite, discount, newProduct, favorite, toggleFavorite, onClickAddFavorite, onAddCart }) {
    /* if (isLoaded) {
        return <PizzaLoader />;
    } */
    const sizesList = [42, 44, 46, 48, 50, 52];

    const onAddFavoriteProduct = () => {
        toggleFavorite();
        const obj = {
            id,
            name,
            brand,
            imageUrl,
            price,
            sizes,
            discount,
            isFavorite: true
        };
        onClickAddFavorite(obj);
    }

    const onAddProductToCart = (e) => {
        const obj = {
            id,
            name,
            brand,
            imageUrl,
            price,
            sizes,
            articul,
            discount
        };
        onAddCart(obj);
    }

    /* const onRemoveFavoriteProduct = () => {
      onClickRemoveFavorite(id);
    } */

    //
    //const delegate = props.delegate || "[data-fancybox]";

    return (
        <div className="catalog-card">
            {discount != undefined &&
                <span class="label catalog-card__label label--discount">{`${discount}%`}</span>
            }
            {newProduct && newProduct != undefined &&
                <span class="label catalog-card__label label--new">new</span>
            }
            <button onClick={onAddFavoriteProduct} type="button" aria-label={favorite ? 'Удалить из избранного' : 'Добавить в избранное'} style={{ backgroundImage: `url(${favorite ? heartFilled : heart})` }} className="catalog-card__favorite"></button>
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
                    <a data-fancybox href="#product-popup" className="catalog-card__info-link popup-link">Быстрый просмотр</a>
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
            <button onClick={onAddProductToCart} className="btn product-card-form__btn product-cart-btn" type="button">
                <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M10.9933 15.1668H4.99996C3.85329 15.1668 2.99329 14.8602 2.45996 14.2535C1.92662 13.6468 1.71995 12.7668 1.85995 11.6268L2.45996 6.62683C2.63329 5.1535 3.00663 3.8335 5.60662 3.8335H10.4066C13 3.8335 13.3733 5.1535 13.5533 6.62683L14.1533 11.6268C14.2866 12.7668 14.0866 13.6535 13.5533 14.2535C13 14.8602 12.1466 15.1668 10.9933 15.1668Z"
                        fill="white" />
                    <path
                        d="M10.6673 5.8335C10.394 5.8335 10.1673 5.60683 10.1673 5.3335V3.00016C10.1673 2.28016 9.72065 1.8335 9.00065 1.8335H7.00065C6.28065 1.8335 5.83398 2.28016 5.83398 3.00016V5.3335C5.83398 5.60683 5.60732 5.8335 5.33398 5.8335C5.06065 5.8335 4.83398 5.60683 4.83398 5.3335V3.00016C4.83398 1.72683 5.72732 0.833496 7.00065 0.833496H9.00065C10.274 0.833496 11.1673 1.72683 11.1673 3.00016V5.3335C11.1673 5.60683 10.9407 5.8335 10.6673 5.8335Z"
                        fill="white" />
                </svg>
                <span>Добавить в корзину</span>
            </button>
        </div>
    );
}

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