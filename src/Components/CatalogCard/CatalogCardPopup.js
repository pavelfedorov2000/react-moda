import React, { useContext, useRef, useState } from "react";
import { Link } from "react-router-dom";
import ProductSizes from "../ProductSizes";
import { Splide, SplideTrack, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css/core';
import { useSelector } from "react-redux";
import { AppContext } from "../../context";
import SliderArrows from "../SliderArrows";
import Button from "../Button";

const splideOptions = {
    type: 'loop',
    speed: 1000,
    gap: '2rem',
    perPage: 1,
    perMove: 1,
    breakpoints: {
        1024: { perPage: 2, gap: '2rem' },
        767: { perPage: 1 },
    },
};

function CatalogCardPopup({ products, closeCatalogCardPopup, visibleCatalogCardPopup }) {

    const productList = React.useMemo(() => [{
        id: 0,
        key: "Сезон",
        value: "Демисезон"
    }, {
        id: 1,
        key: "Материал",
        value: "Альпака"
    }, {
        id: 2,
        key: "Состав материала",
        value: "Шерсть 38%, Альпака 62%"
    }, {
        id: 3,
        key: "Диапазон температур, °С",
        value: "от 0 до +15"
    }, {
        id: 4,
        key: "Страна производства",
        value: "Латвия"
    }, {
        id: 5,
        key: "Параметры модели",
        value: "89-60-84"
    }, {
        id: 6,
        key: "Рост модели на фото",
        value: "176 см"
    }, {
        id: 7,
        key: "Длина рукава:",
        value: "60 см"
    }], []);

    const { onClickAddFavorite, onClickRemoveFavorite, onAddCart, sizesList } = useContext(AppContext);

    const catalogPopupRef = useRef();

    const favorites = useSelector(({ favorite }) => favorite.products); // вытаскиваем товары из стора
    const basketProducts = useSelector(({ cart }) => cart.items); // вытаскиваем товары из стора

    const activeProduct = products.find(product => product.id === visibleCatalogCardPopup);

    const { id, articul, name, brand, sizes, color, price, imageUrl, discount, newProduct, isFavorite } = activeProduct;

    const isFavoriteProduct = favorites.length > 0 && favorites.find(product => product.id === id) || isFavorite;

    const isBasketProduct = Object.keys(basketProducts).length > 0 && basketProducts[id] !== undefined && basketProducts[id].items[0].inBasket || false;

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
            inBasket: true
        };
        
        onAddCart(obj);
        closeCatalogCardPopup();
    }

    const [checkedSize, setCheckedSize] = useState(sizesList[0]);
    const onCheckSize = (size) => {
        setCheckedSize(size);
    }

    const favoriteClickCondition = (isFavoriteProduct) => {
        return isFavoriteProduct ? onRemoveFavoriteProduct : onAddFavoriteProduct;
    }

    return (
        <div ref={catalogPopupRef} className="popup product-popup">
            <button onClick={() => closeCatalogCardPopup()} className="popup__close" type="button">
                <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M23.1871 7L16 14.1871L8.81286 7L7 8.81286L14.1871 16L7 23.1871L8.81286 25L16 17.8129L23.1871 25L25 23.1871L17.8129 16L25 8.81286L23.1871 7Z" fill="#F4F4F6" />
                </svg>
            </button>

            <div className="labels">
                {discount !== 0 &&
                    <span className="label label--discount">{`${discount}%`}</span>
                }

                {newProduct && newProduct !== undefined &&
                    <span className="label label--new">new</span>
                }
            </div>

            <div className="product-popup__inner">
                <Splide className="product-popup__slider" hasTrack={false} options={splideOptions}>
                    <SliderArrows round={true} />
                    <SplideTrack>
                        {Array(4).fill(0).map((_, index) => (
                            <SplideSlide key={index + 1} className="product-popup__slider-item">
                                <img src={imageUrl} alt="фото" />
                            </SplideSlide>
                        ))}
                    </SplideTrack>
                </Splide>

                <div className="product-popup__content">
                    <div className="product-popup__content-top">
                        <div className="product-popup__title">{`${name} ${brand}`}</div>

                        <div className="prices">
                            {discount !== 0 &&
                                <div className="old-price product-popup__old-price">{`${Math.floor(price * 100 / (100 - discount))} ₽`}</div>
                            }

                            <div className={discount !== 0 ? 'new-price' : 'price'}>{`${price} ₽`}</div>
                        </div>
                    </div>

                    <form className="product-popup__form product-card-form">
                        <ProductSizes sizes={sizes} checkedSize={checkedSize} onCheckSize={onCheckSize} />

                        <div className="product-card-form__buttons">
                            <Button clickHandler={onAddProductToCart} isBasketProduct={isBasketProduct} className="product-card-form__btn product-cart-btn" type="button" icon cart />
                            <Button clickHandler={favoriteClickCondition(isFavoriteProduct)} isFavoriteProduct={isFavoriteProduct} className="product-card-form__btn product-favorite-btn" border favorite icon type="button" />
                        </div>
                    </form>

                    <div className="about-product product-popup__about">
                        <div className="about-product__title">О товаре</div>

                        <dl className="about-product__list">
                            {productList.map(item => (
                                <div key={item.id}>
                                    <dt>{item.key}</dt>
                                    <dd>{item.value}</dd>
                                </div>
                            ))}
                        </dl>

                        <Link to={`/product-card/${id}`} className="popup-link">Подробнее</Link>
                    </div>
                </div>

                <Link onClick={() => closeCatalogCardPopup()} className="product-popup__more-link" to={`/product-card/${id}`}>
                    <span>Больше информации о товаре</span>
                    <svg viewBox="0 0 56 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M55.7071 8.70711C56.0976 8.31658 56.0976 7.68342 55.7071 7.29289L49.3431 0.928932C48.9526 0.538408 48.3195 0.538408 47.9289 0.928932C47.5384 1.31946 47.5384 1.95262 47.9289 2.34315L53.5858 8L47.9289 13.6569C47.5384 14.0474 47.5384 14.6805 47.9289 15.0711C48.3195 15.4616 48.9526 15.4616 49.3431 15.0711L55.7071 8.70711ZM0 9H55V7H0V9Z"
                            fill="#101112" />
                    </svg>
                </Link>
            </div>
        </div>
    );
}

export default CatalogCardPopup;