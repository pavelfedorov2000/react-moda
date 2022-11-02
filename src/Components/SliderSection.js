import React, { useMemo } from 'react';
import { Splide, SplideTrack, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css/core';
import { CatalogCard, SliderArrows } from '../Components';

const splideBreakpoints = {
    1024: { perPage: 2, gap: '3rem' },
    767: { perPage: 1 },
    500: { gap: '2rem' }
};

function SliderSection({ products, title, setVisibleCatalogCardPopup, id }) {
    const sliderLength = 6;
    const filteredProducts = id !== undefined ? products.filter(product => product.id !== id) : products;

    const splideOptions = useMemo(() => {
        return {
            speed: 1000,
            gap: `${getComputedStyle(document.documentElement).getPropertyValue('--gap')}`,
            perPage: sliderLength - 2,
            perMove: 1,
            breakpoints: splideBreakpoints,
        }
    }, [sliderLength, splideBreakpoints]);

    return (
        <section className="section">
            <div className="container">
                {filteredProducts.length > 4 ?
                    <Splide hasTrack={false} aria-label={title} options={splideOptions}>
                        <div className="section__top">
                            <h2 className="title">{title}</h2>
                            {filteredProducts.length > 4 && <SliderArrows />}
                        </div>

                        <SplideTrack>
                            {filteredProducts.map(product => (
                                <SplideSlide key={product.id}>
                                    <CatalogCard {...product} product={product} setVisibleCatalogCardPopup={setVisibleCatalogCardPopup} />
                                </SplideSlide>
                            ))}
                        </SplideTrack>
                    </Splide>
                    :
                    <>
                        <div className="section__top">
                            <h2 className="title">{title}</h2>
                        </div>

                        <div className="slider-section__items">
                            {filteredProducts.map(product => (
                                filteredProducts.length > 4 ?
                                    <SplideSlide key={product.id}>
                                        <CatalogCard {...product} product={product} setVisibleCatalogCardPopup={setVisibleCatalogCardPopup} />
                                    </SplideSlide>
                                    :
                                    <CatalogCard key={product.id} {...product} setVisibleCatalogCardPopup={setVisibleCatalogCardPopup} />
                            ))}
                        </div>
                    </>}
            </div>
        </section>
    );
}

export default SliderSection;