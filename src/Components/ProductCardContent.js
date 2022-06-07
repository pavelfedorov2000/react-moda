import React, { useState } from 'react';
import { ProductSizes, ProductColors } from '../Components';
import loriata from '../assets/images/logo/loriata.png';
import delivery from '../assets/images/icons/delivery-issue.svg';
import truck from '../assets/images/icons/truck.svg';


function ProductCardContent({ setFavorite, onClickAddFavorite, onClickRemoveFavorite, onAddCart, id, articul, name, brand, logo, sizes, color, price, imageUrl, discount, newProduct, isFavorite, favorite }) {

  const availableSizes = [42, 44, 46, 48, 50, 52];

  const [checkedSize, setCheckedSize] = useState(null);
  const onCheckSize = (size) => {
    setCheckedSize(size);
  }

  const [basketProduct, setBasketProduct] = useState(false);

  const onAddFavoriteProduct = () => {
    setFavorite(true);
    const obj = {
      id,
      name,
      brand,
      imageUrl,
      price,
      sizes,
      articul,
      discount,
      isFavorite: true
    };
    onClickAddFavorite(obj);
  }

  const onRemoveFavoriteProduct = () => {
    setFavorite(false);
    onClickRemoveFavorite(id);
  }

  const onAddProductToCart = () => {
    setBasketProduct(true);
    const obj = {
      id,
      name,
      brand,
      imageUrl,
      price,
      color,
      //size: checkedSize,
      articul,
      discount
    };
    onAddCart(obj);
  }

  return (
    <div className="product-card__content">
      <div className="product-card__top-wrap">
        <h1 className="product-card__title">
          {name} {brand}
        </h1>
        <img className="product-card__logo" src={brand === 'Loriata' || logo === undefined ? loriata : logo} alt={`логотип ${brand}`} width="76" height="38" />
      </div>
      <div className="product-card__prices-wrap">
        <div className="prices product-card__prices">
          {discount != undefined &&
            <div className="old-price product-card__old-price">{`${Math.floor(price * 100 / (100 - discount))} ₽`}</div>
          }
          <div className={discount != undefined ? 'new-price' : 'price'}>{`${price} ₽`}</div>
        </div>
        <div className="labels product-card__labels">
          {discount != undefined &&
            <span class="label label--discount">{`${discount}%`}</span>
          }
          {newProduct && newProduct != undefined &&
            <span class="label label--new">new</span>
          }
        </div>
      </div>
      <section className="product-card__section">
        <h4 className="product-card__section-title">О товаре</h4>
        <p>
          Пальто на запах выполнено из мягкого шерстяного драпа. Модель приталенного кроя дополнена
          поясом в тон.
          Особенности: воротник с лацканами, без застежки, два боковых кармана, высокая шлица.
        </p>
        <button className="scroll-link" data-link="details" type="button">Подробнее</button>
      </section>
      <section className="product-card__section product-card-delivery">
        <h4 className="product-card__section-title">Доставка</h4>
        <div className="product-card-delivery__row">
          <div className="product-card-delivery__item">
            <img className="product-card-delivery__item-img" src={delivery}
              alt="иконка курьера" width="35" height="35" />
            <div className="product-card-delivery__item-text">
              В пункты выдачи заказов - бесплатно при покупке от 1&nbsp;500&nbsp;₽
            </div>
          </div>
          <div className="product-card-delivery__item">
            <img className="product-card-delivery__item-img" src={truck}
              alt="иконка грузовика" width="35" height="35" />
            <div className="product-card-delivery__item-text">
              По адресу курьером - с&nbsp;примеркой, бесплатно при покупке от 1&nbsp;500&nbsp;₽
            </div>
          </div>
        </div>
        <button className="scroll-link" data-link="delivery" type="button">Подробнее</button>
      </section>
      <form action="#" className="product-card-form">
        <ProductColors />
        <ProductSizes availableSizes={availableSizes} sizes={sizes} onCheckSize={onCheckSize} checkedSize={checkedSize} />
        <div className="product-card-form__buttons">
          <button onClick={onAddProductToCart} className="btn product-card-form__btn product-cart-btn" type="button" style={{ backgroundColor: `${basketProduct ? '#479458' : '#ee3333'}` }}>
            <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path

                d="M10.9933 15.1668H4.99996C3.85329 15.1668 2.99329 14.8602 2.45996 14.2535C1.92662 13.6468 1.71995 12.7668 1.85995 11.6268L2.45996 6.62683C2.63329 5.1535 3.00663 3.8335 5.60662 3.8335H10.4066C13 3.8335 13.3733 5.1535 13.5533 6.62683L14.1533 11.6268C14.2866 12.7668 14.0866 13.6535 13.5533 14.2535C13 14.8602 12.1466 15.1668 10.9933 15.1668Z"
                fill="white" />
              <path
                d="M10.6673 5.8335C10.394 5.8335 10.1673 5.60683 10.1673 5.3335V3.00016C10.1673 2.28016 9.72065 1.8335 9.00065 1.8335H7.00065C6.28065 1.8335 5.83398 2.28016 5.83398 3.00016V5.3335C5.83398 5.60683 5.60732 5.8335 5.33398 5.8335C5.06065 5.8335 4.83398 5.60683 4.83398 5.3335V3.00016C4.83398 1.72683 5.72732 0.833496 7.00065 0.833496H9.00065C10.274 0.833496 11.1673 1.72683 11.1673 3.00016V5.3335C11.1673 5.60683 10.9407 5.8335 10.6673 5.8335Z"
                fill="white" />
            </svg>
            <span>{basketProduct ? 'В корзине' : 'Добавить в корзину'}</span>
          </button>
          {isFavorite || favorite ?
            <button onClick={onRemoveFavoriteProduct} className="btn product-card-form__btn product-favorite-btn btn--border" type="button">
              <svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M9.99984 18.0413C9.7415 18.0413 9.4915 18.008 9.28317 17.933C6.09984 16.8413 1.0415 12.9663 1.0415 7.24134C1.0415 4.32467 3.39984 1.95801 6.29984 1.95801C7.70817 1.95801 9.02484 2.50801 9.99984 3.49134C10.9748 2.50801 12.2915 1.95801 13.6998 1.95801C16.5998 1.95801 18.9582 4.33301 18.9582 7.24134C18.9582 12.9747 13.8998 16.8413 10.7165 17.933C10.5082 18.008 10.2582 18.0413 9.99984 18.0413Z"
                  fill="#EE3333" />
              </svg>
              <span>В избранном</span>
            </button> :
            <button onClick={onAddFavoriteProduct} className="btn product-card-form__btn product-favorite-btn btn--border" type="button">
              <svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M9.99984 18.0418C9.7415 18.0418 9.4915 18.0085 9.28317 17.9335C6.09984 16.8418 1.0415 12.9668 1.0415 7.24183C1.0415 4.32516 3.39984 1.9585 6.29984 1.9585C7.70817 1.9585 9.02484 2.5085 9.99984 3.49183C10.9748 2.5085 12.2915 1.9585 13.6998 1.9585C16.5998 1.9585 18.9582 4.3335 18.9582 7.24183C18.9582 12.9752 13.8998 16.8418 10.7165 17.9335C10.5082 18.0085 10.2582 18.0418 9.99984 18.0418ZM6.29984 3.2085C4.0915 3.2085 2.2915 5.01683 2.2915 7.24183C2.2915 12.9335 7.7665 16.1002 9.6915 16.7585C9.8415 16.8085 10.1665 16.8085 10.3165 16.7585C12.2332 16.1002 17.7165 12.9418 17.7165 7.24183C17.7165 5.01683 15.9165 3.2085 13.7082 3.2085C12.4415 3.2085 11.2665 3.80016 10.5082 4.82516C10.2748 5.14183 9.7415 5.14183 9.50817 4.82516C8.73317 3.79183 7.5665 3.2085 6.29984 3.2085Z"
                  fill="#101112" />
              </svg>
              <span>В избранное</span>
            </button>
          }
        </div>
      </form>
    </div>
  );
}

export default ProductCardContent;