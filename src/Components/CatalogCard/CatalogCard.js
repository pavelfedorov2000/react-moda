import classnames from 'classnames';
//import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { Fancybox as NativeFancybox } from "@fancyapps/ui/dist/fancybox.esm.js";
import "@fancyapps/ui/dist/fancybox.css";
import classNames from 'classnames';
import heart from '../../assets/images/icons/heart.svg';
import heartFilled from '../../assets/images/icons/heart-filled.svg';
//import Button from '../Button';

function CatalogCard({ id, name, brand, sizes, price, imageUrl, discount, newProduct, favorite, toggleFavorite, onClickAddFavorite, onClickRemoveFavorite, isFavorite }) {
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
      isFavorite: true
    };
    onClickAddFavorite(obj);
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
      <button onClick={onAddFavoriteProduct} type="button" aria-label="Добавить в избранное" style={{ backgroundImage: `url(${favorite ? heartFilled : heart})` }} className={classNames('catalog-card__favorite', {
        'animated': favorite
      })}></button>
      <div className="catalog-card__img">
        <img src={imageUrl} alt={`${name} ${brand}`} width="336" height="448" />
        <div className="catalog-card__info">
          <div className="catalog-card__sizes">
            {sizesList.map((size, i) => (
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