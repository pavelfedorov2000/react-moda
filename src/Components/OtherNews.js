import React from 'react';
import { Splide, SplideTrack, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css/core';
import SliderArrows from './SliderArrows';

function OtherNews({ otherNews, title }) {
    console.log(otherNews);

    return (
        <Splide className="slider-section other-news__slider" hasTrack={false} aria-label={title} options={{
            speed: 1000,
            gap: '5.2rem',
            perPage: 2,
            perMove: 1,
            breakpoints: {
                767: { perPage: 1, gap: '2rem' },
            },
        }}>
            <div className="other-news__top section__title">
                <h2 className="title">{title}</h2>
                <SliderArrows />
            </div>
            <SplideTrack>
                {otherNews.map(news => (
                    <SplideSlide key={news.id}>
                        <article className="blog-item">
                            <a href="#" className="blog-item__img">
                                <img src={news.imageUrl} alt="фото" />
                            </a>
                            <div className="blog-item__content">
                                <time className="date blog-item__date" datetime={news.date.split('.').reverse().join('-')}>{news.date}</time>
                                <a className="blog-item-title blog-item__title" href="#">{news.title}</a>
                                <p className="blog-item-text blog-item__text">{news.text}</p>
                                <div className="tags">
                                    {news.tags.map((tag, i) => (
                                        <a key={`tag_${i + 1}`} href="#" className="tag blog-item__tag">{`#${tag}`}</a>
                                    ))}
                                </div>
                            </div>
                        </article>
                    </SplideSlide>
                ))}
            </SplideTrack>
        </Splide>
    );
}

export default OtherNews;