import axios from 'axios';
import React, { useState } from 'react';
import { ProductLinks, ProductCardContent, SliderSection, CatalogCardPopup, SliderArrows, Crumbs, ProductCardInfo } from '../Components';
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';
import { Splide, SplideTrack, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css/core';
import "@fancyapps/ui/dist/fancybox.css";
import { useEffect } from 'react';


const splideOptions = {
    type: 'loop',
    speed: 1000,
    gap: `${getComputedStyle(document.documentElement).getPropertyValue('--gap')}`,
    perPage: 2,
    perMove: 1,
    breakpoints: {
        1024: { gap: '3rem' },
        767: { perPage: 1, gap: '2rem' },
    },
};

const asideSections = [{
    id: 0,
    title: 'С этим товаром рекомендуем'
}, {
    id: 1,
    title: 'Похожие товары'
}];

function ProductCard() {
    const { id } = useParams();

    const [products, setProducts] = useState([]);

    useEffect(() => {
        axios.get('/products').then(({ data }) => {
            setProducts(data);
        });
    }, []);

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
                                    {Array(4).fill(0).map((_, index) => (
                                        <SplideSlide key={index}>
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

                            <ProductCardInfo activeProduct={activeProduct} activeTab={activeTab} onClickTab={onClickTab} />
                        </div>
                    </main>

                    <aside className="product-card__page">
                        {asideSections.map(section => (
                            <section key={section.id}>
                                <SliderSection id={id} products={products} {...activeProduct} title={section.title} setVisibleCatalogCardPopup={setVisibleCatalogCardPopup} />
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