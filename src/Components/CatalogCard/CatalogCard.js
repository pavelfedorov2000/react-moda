import classnames from 'classnames';
//import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { Fancybox as NativeFancybox } from "@fancyapps/ui/dist/fancybox.esm.js";
import "@fancyapps/ui/dist/fancybox.css";
import classNames from 'classnames';
//import Button from '../Button';

function CatalogCard({ id, name, brand, sizes, price, imageUrl, discount }) {
  console.log(discount);
  /* if (isLoaded) {
      return <PizzaLoader />;
  } */
  const sizesList = [42, 44, 46, 48, 50, 52];

  //const delegate = props.delegate || "[data-fancybox]";

  return (
    <div className="catalog-card">
      {discount &&
        <span class="label catalog-card__label label--discount">{discount}</span>
      }
      <span class="label catalog-card__label label--new"></span>
      <button className="catalog-card__favorite" disabled type="button" aria-label="Добавить в избранное"></button>
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
        <div className={classNames('catalog-card__price', {
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