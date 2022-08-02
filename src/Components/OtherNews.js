import React from 'react';
import { Splide, SplideTrack, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css/core';
import SliderArrows from './SliderArrows';
import BlogItem from './BlogItem';

function OtherNews({ otherNews, title }) {

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
                        <BlogItem {...news} isUrlSplice={true} />
                    </SplideSlide>
                ))}
            </SplideTrack>
        </Splide>
    );
}

export default OtherNews;