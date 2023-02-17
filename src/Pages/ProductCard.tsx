import { useMemo, useState } from 'react';
import { ProductLinks, ProductCardContent, SliderSection, SliderArrows, Crumbs, ProductCardInfo, ProductPopup } from '../Components';
import { Splide, SplideTrack, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css/core';
import "@fancyapps/ui/dist/fancybox.css";
import { useEffect } from 'react';
import { Sections } from '../enums/Section';
import { splideOptions } from '../constants/splide';
import { useTypedSelector } from '../hooks/useTypedSelector';
import { useParams } from 'react-router-dom';
import { fetchProducts } from '../redux/actions/products';

const YOUTUBE_LINK = 'https://www.youtube.com/watch?v=L1e8YEozOD8';

const ProductCard = () => {
    const { id } = useParams();
    const { products } = useTypedSelector((state) => state.productsReducer);
    const { popupProduct } = useTypedSelector((state) => state.productReducer);
    const { sortBy, sortPrices, sortBrands, sortColors, sortSizes, sortStyles } = useTypedSelector((state) => state.filtersReducer);

    const activeProduct = products.find((product) => product.id == id);

    const [activeTab, setActiveTab] = useState(0);
    const onClickTab = (index: number) => {
        setActiveTab(index);
    }

    const asideSections = useMemo(() => [{
        name: 'recommended',
        title: Sections.Recommend.title,
        items: products.filter((product) => product.id !== activeProduct?.id && product.discount)
    }, {
        name: 'similar',
        title: Sections.SimilarGoods.title,
        items: products.filter((product) => {
            return product.id !== activeProduct?.id
                && product.brand === activeProduct?.brand
                || product.style === activeProduct?.style
                || product.newProduct === activeProduct?.newProduct
        })
    }], [products]);

    useEffect(() => {
        fetchProducts(sortBy, sortPrices, sortColors, sortSizes, sortBrands, sortStyles);
    }, [sortBy, sortPrices, sortColors, sortBrands, sortStyles, sortSizes]);

    return (
        <>
            {activeProduct &&
                <div className="container product-card">
                    <main className="page">
                        <Crumbs title={`${activeProduct.name} ${activeProduct.brand}`} product={true} />

                        <div className="product-card__inner">
                            <ProductCardContent {...activeProduct} />

                            <Splide className="product-card__slider" hasTrack={false} options={{
                                ...splideOptions,
                                type: 'loop',
                                perPage: 2
                            }}>
                                <SliderArrows isRound />
                                <SplideTrack>
                                    {Array(4).fill(0).map((_, index) => (
                                        <SplideSlide key={index}>
                                            <a data-fancybox="gallery" className="product-card__slider-item" href={index % 2 !== 0 ? YOUTUBE_LINK : activeProduct.imageUrl}>
                                                <img src={activeProduct.imageUrl} alt="фото" />
                                                {index % 2 !== 0 && <div className="player-btn"></div>}
                                            </a>
                                        </SplideSlide>
                                    ))}
                                </SplideTrack>
                            </Splide>

                            <div className="product-card__links">
                                <ProductLinks {...activeProduct} />
                            </div>

                            <ProductCardInfo product={activeProduct} activeTab={activeTab} onClick={onClickTab} />
                        </div>
                    </main>

                    <aside className="product-card__page">
                        {asideSections.map((section) => (
                            <SliderSection key={section.name.toString()} items={section.items} title={section.title} />
                        ))}
                    </aside>

                    {popupProduct &&
                        <div className="overlay active">
                            <ProductPopup {...popupProduct} />
                        </div>
                    }
                </div>
            }
        </>
    );
}

export default ProductCard;