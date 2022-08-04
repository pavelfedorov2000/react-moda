import axios from 'axios';
import React, { useContext, useState } from 'react';
import { ProductDetails, ProductLinks, ProductCardContent, SliderSection, CatalogCardPopup, SliderArrows, Crumbs } from '../Components';
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';
import { removeFavoriteProduct } from '../redux/actions/favorite';
import { useDispatch, useSelector } from 'react-redux';
import { Splide, SplideTrack, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css/core';
import { Fancybox as NativeFancybox } from "@fancyapps/ui/dist/fancybox.esm.js";
import "@fancyapps/ui/dist/fancybox.css";
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

    return (
        <>
            {activeProduct &&
                <div className="container product-card">
                    <main className="page">
                        <Crumbs title={`${activeProduct.name} ${activeProduct.brand}`} product={true} />

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
                                <SliderArrows round={true} />
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
                            <CatalogCardPopup products={products} visibleCatalogCardPopup={visibleCatalogCardPopup} closeCatalogCardPopup={closeCatalogCardPopup} onClickAddFavorite={handleAddProductToFavorite} onAddCart={handleAddProductToCart} />
                        </div>
                    }
                </div>
            }
        </>
    );
}

export default ProductCard;