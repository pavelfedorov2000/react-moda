import axios from 'axios';
import React, { useState } from 'react';
import { Splide, SplideTrack, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css/core';
import SaleItem from './SaleItem';
import SliderArrows from './SliderArrows';
//import { Link } from 'react-router-dom';

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
            <div className="container">
                <div className="promo-sale__grid">
                    <Splide className="promo-sale__slider" hasTrack={false} options={sliderOptions}>
                        <SliderArrows className="promo-sale__slider-arrows" />
                        <SplideTrack>
                            {promoSale.length > 0 && promoSale.map(slide => (
                                <SplideSlide key={slide.id} className="promo-sale__slider-item">
                                    <SaleItem src={promoSale[0].imageUrl} title={slide.title} subtitle={slide.subtitle} saleText={slide.saleText} imgWidth="1112" imgHeight="610" />
                                </SplideSlide>
                            ))}
                        </SplideTrack>
                    </Splide>

                    {promoSale.length > 0 && promoSale.map((item, i) => (
                        i !== 0 && <SaleItem key={item.id} className="promo-sale__item" src={item.imageUrl} title={item.title} subtitle={item.subtitle} saleText={item.saleText} />
                    ))}
                </div>
            </div>
        </section>
    );
}

export default PromoSale;