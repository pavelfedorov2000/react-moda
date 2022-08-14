import React, { useContext, useState } from 'react';
import { ProductSizes, ProductColors, Button } from '../Components';
import loriata from '../assets/images/logo/loriata.png';
import delivery from '../assets/images/icons/delivery-issue.svg';
import truck from '../assets/images/icons/truck.svg';
import { AppContext } from '../context';
import { useSelector } from 'react-redux';


function ProductCardContent({ id, articul, name, brand, logo, sizes, color, price, imageUrl, discount, newProduct, isFavorite }) {

    const basketProducts = useSelector(({ cart }) => cart.items); // вытаскиваем товары из стора
    const favorites = useSelector(({ favorite }) => favorite.products);

    const { sizesList, onClickAddFavorite, onClickRemoveFavorite, onAddCart } = useContext(AppContext);

    const isFavoriteProduct = favorites.length > 0 && favorites.find(product => product.id === id) || isFavorite;

    const isBasketProduct = Object.keys(basketProducts).length > 0 && basketProducts[id] !== undefined && basketProducts[id].items[0].inBasket || false;

    const [checkedSize, setCheckedSize] = useState(sizesList[0]);
    const onCheckSize = (size) => {
        setCheckedSize(size);
    }

    const onAddFavoriteProduct = () => {
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
        onClickRemoveFavorite(id);
    }

    const onAddProductToCart = () => {
        const obj = {
            id,
            name,
            brand,
            imageUrl,
            price,
            color,
            size: checkedSize,
            articul,
            discount,
            inBasket: true,
        };
        onAddCart(obj);
    }

    const favoriteClickCondition = (isFavoriteProduct) => {
        return isFavoriteProduct ? onRemoveFavoriteProduct : onAddFavoriteProduct;
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
                    {discount !== 0 &&
                        <div className="old-price product-card__old-price">{`${Math.floor(price * 100 / (100 - discount))} ₽`}</div>
                    }

                    <div className={discount !== 0 ? 'new-price' : 'price'}>{`${price} ₽`}</div>
                </div>

                <div className="labels product-card__labels">
                    {discount !== 0 &&
                        <span class="label label--discount">{`${discount}%`}</span>
                    }

                    {newProduct && newProduct !== undefined &&
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

                <ProductSizes sizes={sizes} onCheckSize={onCheckSize} checkedSize={checkedSize} />

                <div className="product-card-form__buttons">
                    <Button clickHandler={onAddProductToCart} isBasketProduct={isBasketProduct} className="product-card-form__btn product-cart-btn" type="button" icon cart />
                    <Button clickHandler={favoriteClickCondition(isFavoriteProduct)} isFavoriteProduct={isFavoriteProduct} className="product-card-form__btn product-favorite-btn" border favorite icon type="button" />
                </div>
            </form>
        </div>
    );
}

export default ProductCardContent;