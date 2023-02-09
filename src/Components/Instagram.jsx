import React, { useState } from 'react';
import axios from 'axios';
import { Splide, SplideTrack, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css/core';
import SliderArrows from './SliderArrows';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';

const splideOptions = {
    speed: 1000,
    gap: `${getComputedStyle(document.documentElement).getPropertyValue('--gap')}`,
    perPage: 4,
    breakpoints: {
        1024: { perPage: 3, gap: '3rem' },
        767: { perPage: 2, gap: '2rem' }
    },
};

function Instagram() {

    const [instagramPhotos, setInstagramPhotos] = useState([]);
    useEffect(() => {
        axios.get('/instagram').then(({ data }) => {
            setInstagramPhotos(data);
        });
    }, []);

    return (
        <section className="section instagram-section">
            <Splide hasTrack={false} aria-label="Instagram" options={splideOptions}>
                <div className="section__top">
                    <h2 className="title">Мы в инстаграм</h2>
                    <SliderArrows />
                </div>

                <SplideTrack>
                    {instagramPhotos.map(item => (
                        <SplideSlide key={item.id}>
                            <Link className="full-link" to="/instagram">
                                <img src={item.imageUrl} alt="фото" width="336" height="336" />
                            </Link>
                        </SplideSlide>
                    ))}
                </SplideTrack>
            </Splide>
        </section>
    );
}

export default Instagram;