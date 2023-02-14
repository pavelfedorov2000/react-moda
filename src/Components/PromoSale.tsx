import axios from 'axios';
import { useEffect, useState } from 'react';
import { Splide, SplideTrack, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css/core';
import SaleItem from './SaleItem';
import SliderArrows from './SliderArrows';
import { Gaps } from '../enums/Gap';
import { SaleItem as SaleItemType } from '../interfaces/SaleItem';

const sliderOptions = {
    type: 'loop',
    perPage: 1,
    speed: 1000,
    gap: Gaps.S,
};

const PromoSale = () => {
    const [promoSale, setPromoSale] = useState<SaleItemType[]>([]);
    useEffect(() => {
        axios.get<SaleItemType[]>('/promo').then(({ data }) => {
            setPromoSale(data);
        });
    }, []);

    return (
        <div className="promo-sale">
            <div className="container">
                <div className="promo-sale__grid">
                    <Splide className="promo-sale__slider" hasTrack={false} options={sliderOptions}>
                        <SliderArrows className="promo-sale__slider-arrows" />
                        <SplideTrack>
                            {promoSale.length > 0 && promoSale.map((slide) => (
                                <SplideSlide key={slide.id} className="promo-sale__slider-item">
                                    <SaleItem {...slide} imageUrl={promoSale[0].imageUrl} imgWidth={1112} imgHeight={610} />
                                </SplideSlide>
                            ))}
                        </SplideTrack>
                    </Splide>

                    {promoSale.length > 0 && promoSale.map((item, index) => (
                        index !== 0 && <SaleItem key={item.id} className="promo-sale__item" {...item} />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default PromoSale;