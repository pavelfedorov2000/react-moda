import axios from 'axios';
import React, { useState } from 'react';
import { Splide, SplideTrack, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css/core';
import SaleItem from './SaleItem';
import SliderArrows from './SliderArrows';

const sliderOptions = {
    type: 'loop',
    perPage: 1,
    speed: 1000,
    gap: '2rem',
};

function PromoSale() {
    const [promoSale, setPromoSale] = useState([]);
    React.useEffect(() => {
        axios.get('/promo').then(({ data }) => {
            setPromoSale(data);
        });
    }, []); // [] = componentDidMout

    return (
        <section className="promo-sale">
            <div className="promo-sale__grid">
                <Splide className="promo-sale__slider" hasTrack={false} options={sliderOptions}>
                    <SliderArrows className="promo-sale__slider-arrows" />
                    <SplideTrack>
                        {promoSale.length > 0 && Array(3).fill(promoSale[0]).map(slide => (
                            <SplideSlide key={slide.id} className="promo-sale__slider-item">
                                <article className="sale-item">
                                    <a href="#" className="sale-item__img">
                                        <img src={slide.imageUrl} alt="фото" width="336" height="250" />
                                        {slide.saleText !== undefined && <span className="sale-item__discount">{slide.saleText}</span>}
                                    </a>
                                    <a href="#" className="sale-item__title">{slide.title}</a>
                                    <div className="sale-item__descr">{slide.subtitle}</div>
                                </article>
                            </SplideSlide>
                        ))}
                    </SplideTrack>
                </Splide>
                {promoSale.length > 0 && promoSale.map((item, i) => (
                    i !== 0 && <SaleItem key={item.id} className="promo-sale__item" src={item.imageUrl} title={item.title} subtitle={item.subtitle} saleText={item.saleText} />
                ))}
            </div>
        </section>
    );
}

export default PromoSale;