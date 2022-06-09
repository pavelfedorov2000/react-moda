import React from 'react';
import { Splide, SplideTrack, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css/core';
import sliderImageLeft from '../assets/images/content/blog-text-slider/01.jpg';
import sliderImageRight from '../assets/images/content/blog-text-slider/02.jpg';

function BlogText({ imageUrl, tags }) {
  return (
    <article className="blog-text__content">
      <div className="tags blog-text__tags">
        {tags.map((tag, i) => (
          <a key={`tag_${i + 1}`} href="#" className="tag blog-text__tag">{`#${tag}`}</a>
        ))}
      </div>
      <div className="blog-text__text">
        <p>Бренд LORIATA в новом сезоне дополнил свою коллекцию стильными пуховиками.</p>
        <p>
          Для создания пуховиков используется пух белого гуся 90/10 от известного производителя
          MINARDI
          PIUME (Италия)
          с показателем Fill Power 700.
        </p>
        <p>
          Уникальная NANO технология обработки пуха гарантирует экологичность и гипоаллергенность всей
          продукции.
          Благодаря специальной обработке, ткани обладают водонепроницаемостью и способностью
          “дышать”.
          Дизайн и крой
          изделий не только актуален, но и функционален, пуховики полностью адаптированы для холодной
          зимы
          с
          температурой до -25С. Коллекция Loriata подарит вам индивидуальный стиль, легкость и тепло в
          зимние дни!
        </p>
        <p>
          Наши менеджеры готовы организовать дистанционную презентацию коллекций любым удобном
          способом
          (Skype, Zoom,
          Whats App).
        </p>
        <p>Звоните по бесплатному номеру <a href="tel:88002503005">8-800-250-30-05</a>, задавайте
          вопросы нашим
          менеджерам.</p>
      </div>
      <Splide className="blog-text__slider" hasTrack={false} options={{
        type: 'loop',
        speed: 1000,
        gap: '5.2rem',
        perPage: 2,
        perMove: 1,
        breakpoints: {
          1024: { gap: '3rem' },
          767: { perPage: 1, gap: '2rem' },
        },
      }}>
        <div className="splide__arrows">
          <button className="splide__arrow splide__arrow--prev">
            <svg viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M11.3426 21.4595C11.5504 21.4595 11.7582 21.3829 11.9223 21.2188C12.2395 20.9017 12.2395 20.3767 11.9223 20.0595L5.86289 14.0001L11.9223 7.94072C12.2395 7.62354 12.2395 7.09854 11.9223 6.78135C11.6051 6.46416 11.0801 6.46416 10.7629 6.78135L4.12382 13.4204C3.80664 13.7376 3.80664 14.2626 4.12382 14.5798L10.7629 21.2188C10.927 21.3829 11.1348 21.4595 11.3426 21.4595Z"
                fill="#101112" />
              <path
                d="M4.88906 14.8203H23.2969C23.7453 14.8203 24.1172 14.4484 24.1172 14C24.1172 13.5516 23.7453 13.1797 23.2969 13.1797H4.88906C4.44062 13.1797 4.06875 13.5516 4.06875 14C4.06875 14.4484 4.44062 14.8203 4.88906 14.8203Z"
                fill="#101112" />
            </svg>
          </button>
          <button className="splide__arrow splide__arrow--next">
            <svg viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M16.6574 21.4595C16.4496 21.4595 16.2418 21.3829 16.0777 21.2188C15.7605 20.9017 15.7605 20.3767 16.0777 20.0595L22.1371 14.0001L16.0777 7.94072C15.7605 7.62354 15.7605 7.09854 16.0777 6.78135C16.3949 6.46416 16.9199 6.46416 17.2371 6.78135L23.8762 13.4204C24.1934 13.7376 24.1934 14.2626 23.8762 14.5798L17.2371 21.2188C17.073 21.3829 16.8652 21.4595 16.6574 21.4595Z"
                fill="#101112" />
              <path
                d="M23.1109 14.8203H4.70312C4.25469 14.8203 3.88281 14.4484 3.88281 14C3.88281 13.5516 4.25469 13.1797 4.70312 13.1797H23.1109C23.5594 13.1797 23.9312 13.5516 23.9312 14C23.9312 14.4484 23.5594 14.8203 23.1109 14.8203Z"
                fill="#101112" />
            </svg>
          </button>
        </div>
        <SplideTrack>
          {Array(4).fill(0).map((_, index) => (
            <SplideSlide className="blog-text__slider-item" key={index + 1}>
              <img src={index % 2 != 0 ? sliderImageLeft : sliderImageRight} alt="фото" />
            </SplideSlide>
          ))}
        </SplideTrack>
      </Splide>
    </article>
  );
}

export default BlogText;