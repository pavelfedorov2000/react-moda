import React, { useState } from 'react';
import { Splide, SplideTrack, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css/core';
import CatalogCard from './CatalogCard/CatalogCard';
import SliderArrows from './SliderArrows';

function SliderSection({ products, title, onClickAddFavorite, onClickRemoveFavorite, setVisibleCatalogCardPopup }) {
  const sliderLength = 6;
  // Разворачиваем массив товаров в новый массив рандомных товаров
  //const [randomProducts, setRandomProducts] = useState([...products]);
  const randomProducts = [...products];
  const min = 0;
  const max = randomProducts.length;
  const [sliderProducts, setSliderProducts] = useState(randomProducts.splice(Math.floor(min + Math.random() * (max + 1 - min)), sliderLength));
  console.log(sliderProducts);

  return (
    <Splide className="slider-section" hasTrack={false} aria-label={title} options={{
      speed: 1000,
      gap: '5.2rem',
      perPage: sliderLength - 2,
      perMove: 1,
      breakpoints: {
        1024: { perPage: 2, gap: '3rem' },
        767: { perPage: 1 },
        500: { gap: '2rem' }
      },
    }}>
      <div className="section__title">
        <h2 className="title">{title}</h2>
        {sliderProducts > 4 && <SliderArrows />}
      </div>
      <SplideTrack>
        {sliderProducts.map(product => (
          <SplideSlide>
            <CatalogCard setVisibleCatalogCardPopup={setVisibleCatalogCardPopup} onClickAddFavorite={onClickAddFavorite} onClickRemoveFavorite={onClickRemoveFavorite} {...product} />
          </SplideSlide>
        ))}
      </SplideTrack>
    </Splide>
  );
}

export default SliderSection;