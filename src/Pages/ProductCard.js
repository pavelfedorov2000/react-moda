import axios from 'axios';
import React, { useContext, useState } from 'react';
import { ProductDetails, ProductLinks, ProductCardContent, SliderSection, CatalogCardPopup } from '../Components';
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';
import { removeFavoriteProduct } from '../redux/actions/favorite';
import { useDispatch, useSelector } from 'react-redux';
import { Splide, SplideTrack, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css/core';
import { Fancybox as NativeFancybox } from "@fancyapps/ui/dist/fancybox.esm.js";
import "@fancyapps/ui/dist/fancybox.css";
import { Link } from 'react-router-dom';
import classNames from 'classnames';
import { AppContext } from '../context';


function ProductCard() {

    const { setBasketProduct } = useContext(AppContext);

    const dispatch = useDispatch();
    let { id } = useParams();

    const [products, setProducts] = useState([]);

    React.useEffect(() => {
        axios.get('/products').then(({ data }) => {
            setProducts(data);
        });
    }, []); // [] = componentDidMout */

    const favoriteProducts = useSelector(({ favorite }) => favorite.products); // вытаскиваем товары из стора
    const basketProducts = useSelector(({ cart }) => cart.items); // вытаскиваем товары из стора

    let activeProduct = products.filter(product => product.id == id)[0];
    console.log(activeProduct);

    if (activeProduct && favoriteProducts.length > 0) {
        const thisFavorite = favoriteProducts.find(product => product.id == activeProduct.id);
        if (thisFavorite) {
            activeProduct = {
                ...activeProduct,
                isFavorite: true
            }
        }
    }

    if (activeProduct && basketProducts.length > 0) {
        const thisInBasket = basketProducts.find(product => product.items[0].id == activeProduct.id);
        if (thisInBasket) {
            activeProduct = {
                ...activeProduct,
                inBasket: true
            }
        }
    }

    const [favorite, setFavorite] = useState(false);

    // Экшн на добавление в избранное
    const handleAddProductToFavorite = obj => {
        dispatch({
            type: 'ADD_FAVORITE_PRODUCT',
            payload: obj
        });
    }

    // Экшн на удаление из избранного
    const handleRemoveFavoriteProduct = (id) => {
        dispatch(removeFavoriteProduct(id));
    }

    // Экшн на добавление в корзину
    const handleAddProductToCart = obj => {
        setBasketProduct(true);
        dispatch({
            type: 'ADD_PRODUCT_TO_CART',
            payload: obj
        });
    }

    const tabs = [
        {
            id: 'details',
            text: 'Детали',
        },
        {
            id: 'delivery',
            text: 'Доставка',
        },
        {
            id: 'payment',
            text: 'Оплата',
        },
        {
            id: 'shops-availability',
            text: 'Наличие в магазинах',
        },
        {
            id: 'video',
            text: 'Видео',
        },
    ];

    const [activeTab, setActiveTab] = useState(0);
    const onClickTab = (i) => {
        setActiveTab(i);
    }

    const [visibleCatalogCardPopup, setVisibleCatalogCardPopup] = useState(null);

    const closeCatalogCardPopup = () => {
        setVisibleCatalogCardPopup(null);
    }

    const crumbs = ['Главная', 'Женщинам', 'Одежда', 'Верхняя одежда'];
    const [home, ...rest] = crumbs;

    return (
        <>
            {activeProduct &&
                <div className="container product-card">
                    <main className="page">
                        <nav className="breadcrumbs" aria-label="breadcrumbs">
                            <ol className="breadcrumbs__list">
                                <li className="breadcrumbs__item"><Link to="/">{home}</Link></li>
                                {rest.map((crumb, i) => (
                                    <li key={`carumb_${i + 1}`} className="breadcrumbs__item"><Link to="/catalog">{crumb}</Link></li>
                                ))}
                                <li className="breadcrumbs__item"><span>{activeProduct.name} {activeProduct.brand}</span></li>
                            </ol>
                        </nav>
                        <div className="product-card__inner">
                            <ProductCardContent onAddCart={handleAddProductToCart} onClickAddFavorite={handleAddProductToFavorite} onClickRemoveFavorite={handleRemoveFavoriteProduct} {...activeProduct} favorite={favorite} setFavorite={setFavorite} />
                            <Splide className="product-card__slider" hasTrack={false} options={{
                                type: 'loop',
                                speed: 1000,
                                gap: '5.2rem',
                                perPage: 2,
                                perMove: 1,
                                breakpoints: {
                                    1024: { gap: '3rem' },
                                    767: { perPage: 1, gap: '2rem' },
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
                                        <SplideSlide key={index + 1}>
                                            <a data-fancybox="gallery" className="product-card__slider-item" href={index % 2 != 0 ? 'https://www.youtube.com/watch?v=L1e8YEozOD8' : activeProduct.imageUrl}>
                                                <img src={activeProduct.imageUrl} alt="фото" />
                                                {index % 2 != 0 && <div class="player-btn"></div>}
                                            </a>
                                        </SplideSlide>
                                    ))}
                                </SplideTrack>
                            </Splide>
                            <div className="product-card__links">
                                <ProductLinks {...activeProduct} />
                            </div>
                            <div className="product-card__info">
                                <div className="product-card__tabs-wrap">
                                    <div className="product-card__tabs">
                                        {tabs.map((tab, i) => (
                                            <button onClick={() => onClickTab(i)} key={tab.id} className={classNames('tab product-card__tab', {
                                                'tab--active': i === activeTab
                                            })}>{tab.text}</button>
                                        ))}
                                    </div>
                                </div>
                                <>
                                    {tabs.map((tab, i) => (
                                        tab.id === 'details' ? <ProductDetails id={tab.id} key={tab.id} index={i} activeTab={activeTab} {...activeProduct} /> :
                                            <div key={tab.id} id={tab.id} class={classNames('tabs-content', {
                                                'tabs-content--active': i === activeTab
                                            })}>
                                                {tab.id === 'video' ?
                                                    <div class="product-card__videos">
                                                        {Array(2).fill(0).map((_, index) => (
                                                            <div key={`video-${index}`} class="product-card__video">
                                                                <iframe src="https://www.youtube.com/embed/L1e8YEozOD8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                                                            </div>
                                                        ))}
                                                    </div> :
                                                    <>
                                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi recusandae maxime aliquid fugiat dolorum
                                                            deserunt quia rem consectetur quaerat! Error dolore est assumenda, temporibus reprehenderit quia labore
                                                            impedit ea laboriosam.</p>
                                                        <p>Quae explicabo mollitia, fugiat atque quos nostrum architecto deleniti velit corrupti vel maiores ipsa.
                                                            Inventore tenetur quis laudantium, ut eos fugit, sequi dolorum necessitatibus dicta velit aut totam
                                                            voluptatibus iste?</p>
                                                        <p>Exercitationem, enim? Quae numquam doloremque mollitia vitae corrupti autem odit maiores ipsum illo. Quos
                                                            corporis deleniti, facere officia eum perferendis consectetur vero numquam consequuntur quae? Pariatur
                                                            repudiandae quisquam neque. Autem?</p>
                                                    </>
                                                }
                                            </div>
                                    ))}
                                </>
                            </div>
                        </div>
                    </main>
                    <aside className="product-card__page">
                        {['С этим товаром рекомендуем', 'Похожие товары'].map((section, i) => (
                            <section>
                                <SliderSection key={`aside-section_${i + 1}`} products={products} {...activeProduct} title={section} setVisibleCatalogCardPopup={setVisibleCatalogCardPopup} onClickAddFavorite={handleAddProductToFavorite} onClickRemoveFavorite={handleRemoveFavoriteProduct} />
                            </section>
                        ))}
                    </aside>
                    {visibleCatalogCardPopup !== null &&
                        <div className="overlay active">
                            <CatalogCardPopup products={products} onCloseCatalogCardPopup={closeCatalogCardPopup} onClickAddFavorite={handleAddProductToFavorite} onAddCart={handleAddProductToCart} />
                        </div>
                    }
                </div>
            }
        </>
    );
}

export default ProductCard;