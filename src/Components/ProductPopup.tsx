import { useRef, useCallback } from "react";
import { Link } from "react-router-dom";
import ProductSizes from "./ProductSizes";
import Prices from "./Prices";
import { Splide, SplideTrack, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css/core';
import SliderArrows from "./SliderArrows";
import { CatalogItem } from "../interfaces/CatalogItem";
import { splideOptions } from "../constants/splide";
import { useActions } from "../hooks/useActions";
import Button from "./Button";
import { PRODUCT_LIST } from "../constants/product-list";
import useHandleOutsideClick from "../hooks/useHandleOutsideClick";
import { useTypedSelector } from "../hooks/useTypedSelector";

const ProductPopup = ({ id, name, brand, sizes, price, color, style, imageUrl, discount, newProduct }: CatalogItem) => {
    //const catalogPopupRef = useRef<HTMLDivElement>(null);

    const { products } = useTypedSelector((state) => state.favoriteReducer);
    const { items } = useTypedSelector((state) => state.cartReducer);
    const { closeProductPopup, addProductToCart, addFavoriteProduct, removeFavoriteProduct } = useActions();

    const isFavorite = products.findIndex((product) => product.id === id) !== -1;
    const isInBasket = Object.keys(items).includes(id);

    const handleAddProductToCart = () => {
        addProductToCart({
            id,
            name,
            brand,
            imageUrl,
            price,
            color,
            sizes,
            style,
            discount,
            newProduct
        });
    }

    const handleAddFavorite = () => {
        addFavoriteProduct({
            id,
            name,
            brand,
            imageUrl,
            price,
            color,
            sizes,
            style,
            discount,
            newProduct
        })
    }

    const handleRemoveFavoriteProduct = useCallback(() => {
        removeFavoriteProduct(id);
    }, []);

    //useHandleOutsideClick(catalogPopupRef, closeProductPopup);

    return (
        <div className="popup product-popup">
            <button onClick={closeProductPopup} className="popup__close" type="button">
                <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M23.1871 7L16 14.1871L8.81286 7L7 8.81286L14.1871 16L7 23.1871L8.81286 25L16 17.8129L23.1871 25L25 23.1871L17.8129 16L25 8.81286L23.1871 7Z" />
                </svg>
            </button>

            <div className="labels">
                {discount !== 0 &&
                    <span className="label label--discount">{discount}%</span>
                }

                {newProduct &&
                    <span className="label label--new">new</span>
                }
            </div>

            <div className="product-popup__inner">
                <Splide className="product-popup__slider" hasTrack={false} options={{
                    ...splideOptions,
                    perPage: 1
                }}>
                    <SliderArrows isRound />
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

                        <Prices price={price} discount={discount} />
                    </div>

                    <form className="product-popup__form product-card-form">
                        <ProductSizes sizes={sizes} />

                        <div className="product-card-form__buttons">
                            <Button onClick={handleAddProductToCart} isBasketProduct={isInBasket} className="product-card-form__btn product-cart-btn" icon cart />
                            <Button onClick={isFavorite ? handleRemoveFavoriteProduct : handleAddFavorite} isFavoriteProduct={isFavorite} className="product-card-form__btn product-favorite-btn" border favorite icon />
                        </div>
                    </form>

                    <div className="about-product product-popup__about">
                        <div className="about-product__title">О товаре</div>

                        <dl className="about-product__list">
                            {PRODUCT_LIST.map((item) => (
                                <div key={item.key.toString()}>
                                    <dt>{item.key}</dt>
                                    <dd>{item.value}</dd>
                                </div>
                            ))}
                        </dl>

                        <Link to={`/product-card/${id}`} className="popup-link">Подробнее</Link>
                    </div>
                </div>

                <Link onClick={closeProductPopup} className="product-popup__more-link" to={`/product-card/${id}`}>
                    <span>Больше информации о товаре</span>
                    <svg viewBox="0 0 56 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd"
                            d="M55.7071 8.70711C56.0976 8.31658 56.0976 7.68342 55.7071 7.29289L49.3431 0.928932C48.9526 0.538408 48.3195 0.538408 47.9289 0.928932C47.5384 1.31946 47.5384 1.95262 47.9289 2.34315L53.5858 8L47.9289 13.6569C47.5384 14.0474 47.5384 14.6805 47.9289 15.0711C48.3195 15.4616 48.9526 15.4616 49.3431 15.0711L55.7071 8.70711ZM0 9H55V7H0V9Z" />
                    </svg>
                </Link>
            </div>
        </div>
    );
}

export default ProductPopup;