import classnames from 'classnames';
//import PropTypes from 'prop-types';
import React, { useCallback, useState } from 'react';
import classNames from 'classnames';
import heart from '../../assets/images/icons/heart.svg';
import heartFilled from '../../assets/images/icons/heart-filled.svg';
//import Button from '../Button';

function CatalogCard({ id, name, brand, imageUrl, price, color, sizes, discount, newProduct, onClickAddFavorite, onClickRemoveFavorite, setVisibleCatalogCardPopup }) {
  /* if (isLoaded) {
      return <PizzaLoader />;
  } */
  const sizesList = [42, 44, 46, 48, 50, 52];

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
        {discount != undefined &&
          <span class="label catalog-card__label label--discount">{`${discount}%`}</span>
        }
        {newProduct && newProduct != undefined &&
          <span class="label catalog-card__label label--new">new</span>
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
              <a key={size} href="#" className={classnames('catalog-card__size', {
                'catalog-card__size--disabled': !sizesList.includes(sizes[sizes.indexOf(size)])
              })}>{size}</a>
            ))}
          </div>
          <button onClick={() => setVisibleCatalogCardPopup(id)} className="catalog-card__info-link popup-link" type="button">Быстрый просмотр</button>
        </div>
      </div>
      <a className="catalog-card__title" href="#">{name}</a>
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