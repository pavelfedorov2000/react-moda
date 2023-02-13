import axios from 'axios';
import { useState } from 'react';
import { ProductLinks, ProductCardContent, SliderSection, CatalogCardPopup, SliderArrows, Crumbs, ProductCardInfo } from '../Components';
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';
import { Splide, SplideTrack, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css/core';
import "@fancyapps/ui/dist/fancybox.css";
import { useEffect } from 'react';
import { Sections } from '../enums/Section';
import { splideOptions } from '../constants/splide';

const sliderOptions = {
    ...splideOptions,
    type: 'loop',
};

const asideSections = [{
    name: 'recommended',
    title: Sections.Recommend.title
}, {
    name: 'similar',
    title: Sections.SimilarGoods.title
}];

const ProductCard = () => {
    const { id } = useParams();

    const [products, setProducts] = useState([]);

    useEffect(() => {
        axios.get('/products').then(({ data }) => {
            setProducts(data);
        });
    }, []);

    const activeProduct = products.find(product => product.id === id);

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

                            <Splide className="product-card__slider" hasTrack={false} options={sliderOptions}>
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
                                <SliderSection id={id} items={products} {...activeProduct} title={section.title} />
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