import axios from 'axios';
import { useEffect, useState } from 'react';
import { Splide, SplideTrack, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css/core';
import SaleItem from '../components/SaleItem';
import SliderArrows from '../components/SliderArrows';
import { Gaps } from '../enums/Gap';
import { SaleItem as SaleItemType } from '../interfaces/SaleItem';

const sliderOptions = {
    type: 'loop',
    perPage: 1,
    speed: 1000,
    gap: Gaps.S,
};

const mainClass = 'promo-sale';

const PromoSale = () => {
    const [promoSale, setPromoSale] = useState<SaleItemType[]>([]);
    useEffect(() => {
        axios.get<SaleItemType[]>('/promo').then(({ data }) => {
            setPromoSale(data);
        });
    }, []);

    return (
        <div className={mainClass}>
            <div className={`${mainClass}__grid`}>
                <Splide className={`${mainClass}__slider`} hasTrack={false} options={sliderOptions}>
                    <SliderArrows className={`${mainClass}__slider-arrows`} />
                    <SplideTrack>
                        {promoSale.map((slide) => (
                            <SplideSlide key={slide.id} className={`${mainClass}__slider-item`}>
                                <SaleItem {...slide} imageUrl={promoSale[0].imageUrl} imgWidth={1112} imgHeight={610} />
                            </SplideSlide>
                        ))}
                    </SplideTrack>
                </Splide>

                {promoSale.length > 0 && promoSale.map((item, index) => (
                    index !== 0 && <SaleItem key={item.id} className={`${mainClass}__item`} {...item} />
                ))}
            </div>
        </div>
    );
}

export default PromoSale;