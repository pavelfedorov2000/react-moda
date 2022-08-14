import axios from 'axios';
import React, { useState } from 'react';
import { ProductDetails, ProductLinks, ProductCardContent, SliderSection, CatalogCardPopup, SliderArrows, Crumbs } from '../Components';
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';
import { Splide, SplideTrack, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css/core';
import { Fancybox as NativeFancybox } from "@fancyapps/ui/dist/fancybox.esm.js";
import "@fancyapps/ui/dist/fancybox.css";
import classNames from 'classnames';

const splideOptions = {
    type: 'loop',
    speed: 1000,
    gap: '5.2rem',
    perPage: 2,
    perMove: 1,
    breakpoints: {
        1024: { gap: '3rem' },
        767: { perPage: 1, gap: '2rem' },
    },
};

const tabs = [{
    id: 'details',
    text: 'Детали',
}, {
    id: 'delivery',
    text: 'Доставка',
}, {
    id: 'payment',
    text: 'Оплата',
}, {
    id: 'shops-availability',
    text: 'Наличие в магазинах',
}, {
    id: 'video',
    text: 'Видео',
}];

function ProductCard() {

    const { id } = useParams();

    const [products, setProducts] = useState([]);

    React.useEffect(() => {
        axios.get('/products').then(({ data }) => {
            setProducts(data);
        });
    }, []); // [] = componentDidMout */

    let activeProduct = products.find(product => product.id == id);

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
                            <ProductCardContent {...activeProduct} />

                            <Splide className="product-card__slider" hasTrack={false} options={splideOptions}>
                                <SliderArrows round={true} />
                                <SplideTrack>
                                    {Array(4).fill(0).map((slide, index) => (
                                        <SplideSlide key={slide.toString()}>
                                            <a data-fancybox="gallery" className="product-card__slider-item" href={index % 2 != 0 ? 'https://www.youtube.com/watch?v=L1e8YEozOD8' : activeProduct.imageUrl}>
                                                <img src={activeProduct.imageUrl} alt="фото" />
                                                {index % 2 != 0 && <div className="player-btn"></div>}
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
                                        tab.id === 'details' ?
                                            <ProductDetails id={tab.id} key={tab.id} index={i} activeTab={activeTab} {...activeProduct} />
                                            :
                                            <div key={tab.id} id={tab.id} className={classNames('tabs-content', {
                                                'tabs-content--active': i === activeTab
                                            })}>
                                                {tab.id === 'video' ?
                                                    <div className="product-card__videos">
                                                        {Array(2).fill(0).map(video => (
                                                            <div key={video.toString()} className="product-card__video">
                                                                <iframe src="https://www.youtube.com/embed/L1e8YEozOD8" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
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
                        {['С этим товаром рекомендуем', 'Похожие товары'].map(section => (
                            <section>
                                <SliderSection key={section.toString()} id={id} products={products} {...activeProduct} title={section} setVisibleCatalogCardPopup={setVisibleCatalogCardPopup} />
                            </section>
                        ))}
                    </aside>

                    {visibleCatalogCardPopup !== null &&
                        <div className="overlay active">
                            <CatalogCardPopup products={products} visibleCatalogCardPopup={visibleCatalogCardPopup} closeCatalogCardPopup={closeCatalogCardPopup} />
                        </div>
                    }
                </div>
            }
        </>
    );
}

export default ProductCard;