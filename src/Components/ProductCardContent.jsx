import React, { useContext, useState } from 'react';
import { ProductSizes, ProductColors, Button, ProductCardDelivery, Prices } from '.';
import loriata from '../assets/images/logo/loriata.png';
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
                <Prices price={price} discount={discount} className="product-card__prices" />

                <div className="labels product-card__labels">
                    {discount !== 0 &&
                        <span className="label label--discount">{discount}%</span>
                    }

                    {newProduct && newProduct !== undefined &&
                        <span className="label label--new">new</span>
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

            <ProductCardDelivery />

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