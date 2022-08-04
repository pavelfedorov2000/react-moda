import React, { useContext } from 'react';
import { Splide, SplideTrack, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css/core';
import { CatalogCard, SliderArrows } from '../Components';
import { CatalogCardPopupContext } from '../context';

function SliderSection({ products, title }) {
    const sliderLength = 6;
    // Разворачиваем массив товаров в новый массив рандомных товаров
    /* const randomProducts = [...products];
    const min = 0;
    const max = randomProducts.length;
    const [sliderProducts, setSliderProducts] = useState(randomProducts.splice(Math.floor(min + Math.random() * (max + 1 - min)), sliderLength));
    console.log(sliderProducts); */

    const { setVisibleCatalogCardPopup } = useContext(CatalogCardPopupContext);

    return (
        products.length > 4 ?
            <Splide className="slider-section" hasTrack={false} aria-label={title} options={{
                speed: 1000,
                gap: '5.2rem',
                perPage: sliderLength - 2,
                perMove: 1,
                //arrows: false,
                breakpoints: {
                    1024: { perPage: 2, gap: '3rem' },
                    767: { perPage: 1 },
                    500: { gap: '2rem' }
                },
            }}>
                <div className="section__title">
                    <h2 className="title">{title}</h2>
                    <SliderArrows />
                </div>
                <SplideTrack>
                    {products.map(product => (
                        <SplideSlide key={product.id}>
                            <CatalogCard setVisibleCatalogCardPopup={setVisibleCatalogCardPopup} {...product} />
                        </SplideSlide>
                    ))}
                </SplideTrack>
            </Splide>
            :
            <div className="slider-section" >
                <div className="section__title">
                    <h2 className="title">{title}</h2>
                </div>
                <div className="slider-section__items">
                    {products.map(product => (
                        <CatalogCard key={product.id} setVisibleCatalogCardPopup={setVisibleCatalogCardPopup} {...product} />
                    ))}
                </div>
            </div>
    );
}

export default SliderSection;