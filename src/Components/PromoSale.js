import axios from 'axios';
import React, { useState } from 'react';
import { Splide, SplideTrack, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css/core';
import SaleItem from './SaleItem';

function PromoSale() {
  const [promoSale, setPromoSale] = useState([]);
  React.useEffect(() => {
    axios.get('/promo').then(({ data }) => {
      setPromoSale(data);
    });
  }, []); // [] = componentDidMout

  console.log(promoSale);

  return (
    <section className="promo-sale">
      <div className="promo-sale__grid">
        {promoSale.map((item, i) => (
          i === 0 ?
            <Splide className="promo-sale__slider" options={{
              perPage: 1
            }}>
              <div className="slider-arrows splide__arrows promo-sale__slider-arrows">
                <button className="splide__arrow splide__arrow--prev">
                  <svg viewBox="0 0 56 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M0.292892 8.70711C-0.0976295 8.31658 -0.0976295 7.68342 0.292892 7.29289L6.65685 0.928932C7.04738 0.538408 7.68054 0.538408 8.07107 0.928932C8.46159 1.31946 8.46159 1.95262 8.07107 2.34315L2.41422 8L8.07107 13.6569C8.46159 14.0474 8.46159 14.6805 8.07107 15.0711C7.68054 15.4616 7.04738 15.4616 6.65685 15.0711L0.292892 8.70711ZM56 9H1V7H56V9Z"
                      fill="#C0C0C0" />
                  </svg>
                </button>
                <button className="splide__arrow splide__arrow--next">
                  <svg viewBox="0 0 56 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M55.7071 8.70711C56.0976 8.31658 56.0976 7.68342 55.7071 7.29289L49.3431 0.928932C48.9526 0.538408 48.3195 0.538408 47.9289 0.928932C47.5384 1.31946 47.5384 1.95262 47.9289 2.34315L53.5858 8L47.9289 13.6569C47.5384 14.0474 47.5384 14.6805 47.9289 15.0711C48.3195 15.4616 48.9526 15.4616 49.3431 15.0711L55.7071 8.70711ZM0 9H55V7H0V9Z"
                      fill="#C0C0C0" />
                  </svg>
                </button>
              </div>
              <SplideTrack>
                {promoSale.map(slide => (
                  <SplideSlide className="promo-sale__slider-item">
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
            </Splide> :
            <SaleItem className="promo-sale__item" src={item.imageUrl} title={item.title} subtitle={item.subtitle} saleText={item.saleText} />
        ))}
      </div>
    </section>
  );
}

export default PromoSale;