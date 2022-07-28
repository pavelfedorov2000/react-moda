import React, { useContext, useRef, useState } from "react";
import { Link } from "react-router-dom";
import ProductSizes from "../ProductSizes";
import { Splide, SplideTrack, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css/core';
import { useSelector } from "react-redux";
import { AppContext } from "../../context";

function CatalogCardPopup({ products, onClickAddFavorite, onClickRemoveFavorite, onAddCart }) {

    const { visibleCatalogCardPopup, setVisibleCatalogCardPopup } = useContext(AppContext);

    // Превью карточки товара в попапе

    const closeCatalogCardPopup = () => {
        setVisibleCatalogCardPopup(null);
    }

    const productList = {
        "Сезон": "Демисезон",
        "Материал": "Альпака",
        "Состав материала": "Шерсть 38%, Альпака 62%",
        "Диапазон температур, °С": "от 0 до +15",
        "Страна производства": "Латвия",
        "Параметры модели": "89-60-84",
        "Рост модели на фото": "176 см",
        "Длина рукава:": "60 см",
    };

    const availableSizes = [42, 44, 46, 48, 50, 52];

    const catalogPopupRef = useRef();

    const favoriteProducts = useSelector(({ favorite }) => favorite.products); // вытаскиваем товары из стора
    const basketProducts = useSelector(({ cart }) => cart.items); // вытаскиваем товары из стора

    let activeProduct = products.filter(product => product.id == visibleCatalogCardPopup)[0];
    //console.log(activeProduct);

    let basketGood;
    if (Object.keys(basketProducts).length > 0) {
        basketGood = basketProducts[visibleCatalogCardPopup] && basketProducts[visibleCatalogCardPopup].items[0].inBasket ? true : false;
    } else {
        basketGood = false;
    }


    if (activeProduct && favoriteProducts.length > 0) {
        const thisFavorite = favoriteProducts.find(product => product.id == activeProduct.id);
        if (thisFavorite) {
            activeProduct = {
                ...activeProduct,
                isFavorite: true
            }
        }
    }

    const { id, articul, name, brand, sizes, color, price, imageUrl, discount, newProduct, isFavorite } = activeProduct;
    //console.log(id);

    const [favorite, setFavorite] = useState(false);

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

    //console.log(activeProduct);
    const onRemoveFavoriteProduct = () => {
        setFavorite(false);
        onClickRemoveFavorite(id);
    }

    const onAddProductToCart = () => {
        //setBasketProduct(true);
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

    const [checkedSize, setCheckedSize] = useState(availableSizes[0]);
    const onCheckSize = (size) => {
        setCheckedSize(size);
    }

    /* const handleOutsideClick = (event) => {
      const path = event.path || (event.composedPath && event.composedPath());
      if (!path.includes(catalogPopupRef.current)) {
        onCloseCatalogCardPopup();
      }
    }
   
    useEffect(() => {
      document.body.addEventListener('click', handleOutsideClick);
    }, []); */


    return (
        <div ref={catalogPopupRef} className="popup product-popup">
            <button onClick={() => closeCatalogCardPopup()} className="popup__close" type="button">
                <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M23.1871 7L16 14.1871L8.81286 7L7 8.81286L14.1871 16L7 23.1871L8.81286 25L16 17.8129L23.1871 25L25 23.1871L17.8129 16L25 8.81286L23.1871 7Z" fill="#F4F4F6" />
                </svg>
            </button>
            <div className="labels">
                {discount != 0 &&
                    <span className="label label--discount">{`${discount}%`}</span>
                }
                {newProduct && newProduct != undefined &&
                    <span className="label label--new">new</span>
                }
            </div>
            <div className="product-popup__inner">
                <Splide className="product-popup__slider" hasTrack={false} options={{
                    type: 'loop',
                    speed: 1000,
                    gap: '2rem',
                    perPage: 1,
                    perMove: 1,
                    breakpoints: {
                        1024: { perPage: 2, gap: '2rem' },
                        767: { perPage: 1 },
                    },
                }}>
                    <div className="splide__arrows">
                        <button className="splide__arrow splide__arrow--prev">
                            <svg viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M11.3426 21.4595C11.5504 21.4595 11.7582 21.3829 11.9223 21.2188C12.2395 20.9017 12.2395 20.3767 11.9223 20.0595L5.86289 14.0001L11.9223 7.94072C12.2395 7.62354 12.2395 7.09854 11.9223 6.78135C11.6051 6.46416 11.0801 6.46416 10.7629 6.78135L4.12382 13.4204C3.80664 13.7376 3.80664 14.2626 4.12382 14.5798L10.7629 21.2188C10.927 21.3829 11.1348 21.4595 11.3426 21.4595Z"
                                    fill="#101112" />
                                <path
                                    d="M4.88906 14.8203H23.2969C23.7453 14.8203 24.1172 14.4484 24.1172 14C24.1172 13.5516 23.7453 13.1797 23.2969 13.1797H4.88906C4.44062 13.1797 4.06875 13.5516 4.06875 14C4.06875 14.4484 4.44062 14.8203 4.88906 14.8203Z"
                                    fill="#101112" />
                            </svg>
                        </button>
                        <button className="splide__arrow splide__arrow--next">
                            <svg viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M16.6574 21.4595C16.4496 21.4595 16.2418 21.3829 16.0777 21.2188C15.7605 20.9017 15.7605 20.3767 16.0777 20.0595L22.1371 14.0001L16.0777 7.94072C15.7605 7.62354 15.7605 7.09854 16.0777 6.78135C16.3949 6.46416 16.9199 6.46416 17.2371 6.78135L23.8762 13.4204C24.1934 13.7376 24.1934 14.2626 23.8762 14.5798L17.2371 21.2188C17.073 21.3829 16.8652 21.4595 16.6574 21.4595Z"
                                    fill="#101112" />
                                <path
                                    d="M23.1109 14.8203H4.70312C4.25469 14.8203 3.88281 14.4484 3.88281 14C3.88281 13.5516 4.25469 13.1797 4.70312 13.1797H23.1109C23.5594 13.1797 23.9312 13.5516 23.9312 14C23.9312 14.4484 23.5594 14.8203 23.1109 14.8203Z"
                                    fill="#101112" />
                            </svg>
                        </button>
                    </div>
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
                            {discount != 0 &&
                                <div className="old-price product-popup__old-price">{`${Math.floor(price * 100 / (100 - discount))} ₽`}</div>
                            }
                            <div className={discount != 0 ? 'new-price' : 'price'}>{`${price} ₽`}</div>
                        </div>
                    </div>
                    <form className="product-popup__form product-card-form">
                        <ProductSizes availableSizes={availableSizes} sizes={sizes} checkedSize={checkedSize} onCheckSize={onCheckSize} />
                        <div className="product-card-form__buttons">
                            <button onClick={onAddProductToCart} className="btn product-card-form__btn product-cart-btn" type="button" style={{ backgroundColor: `${basketGood ? '#479458' : '#ee3333'}` }}>
                                <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M10.9933 15.1668H4.99996C3.85329 15.1668 2.99329 14.8602 2.45996 14.2535C1.92662 13.6468 1.71995 12.7668 1.85995 11.6268L2.45996 6.62683C2.63329 5.1535 3.00663 3.8335 5.60662 3.8335H10.4066C13 3.8335 13.3733 5.1535 13.5533 6.62683L14.1533 11.6268C14.2866 12.7668 14.0866 13.6535 13.5533 14.2535C13 14.8602 12.1466 15.1668 10.9933 15.1668Z"
                                        fill="white" />
                                    <path
                                        d="M10.6673 5.8335C10.394 5.8335 10.1673 5.60683 10.1673 5.3335V3.00016C10.1673 2.28016 9.72065 1.8335 9.00065 1.8335H7.00065C6.28065 1.8335 5.83398 2.28016 5.83398 3.00016V5.3335C5.83398 5.60683 5.60732 5.8335 5.33398 5.8335C5.06065 5.8335 4.83398 5.60683 4.83398 5.3335V3.00016C4.83398 1.72683 5.72732 0.833496 7.00065 0.833496H9.00065C10.274 0.833496 11.1673 1.72683 11.1673 3.00016V5.3335C11.1673 5.60683 10.9407 5.8335 10.6673 5.8335Z"
                                        fill="white" />
                                </svg>
                                <span>{basketGood ? 'В корзине' : 'Добавить в корзину'}</span>
                            </button>
                            {isFavorite ?
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
                    <div className="about-product product-popup__about">
                        <div className="about-product__title">О товаре</div>
                        <dl className="about-product__list">
                            {Object.keys(productList).map((key, i) => (
                                <div key={`key${i + 1}`}>
                                    <dt>{key}</dt>
                                    <dd>{productList[key]}</dd>
                                </div>
                            ))}
                        </dl>
                        <Link to={`/product-card/${id}`} className="popup-link">Подробнее</Link>
                    </div>
                </div>
                <Link className="product-popup__more-link" to={`/product-card/${id}`}>
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