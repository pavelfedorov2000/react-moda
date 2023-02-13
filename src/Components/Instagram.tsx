import { useState } from 'react';
import axios from 'axios';
import { Splide, SplideTrack, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css/core';
import SliderArrows from './SliderArrows';
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

interface InstagramItem {
    imageUrl: string;
}

interface Props {
    title: string;
    dataUrl: string;
}

const Instagram = ({ title, dataUrl }: Props) => {
    const [instagramPhotos, setInstagramPhotos] = useState<InstagramItem[]>([]);

    useEffect(() => {
        axios.get<InstagramItem[]>(dataUrl).then(({ data }) => {
            setInstagramPhotos(data);
        });
    }, []);

    return (
        <section className="section">
            <Splide hasTrack={false} aria-label={title} options={splideOptions}>
                <div className="section__top">
                    <h2 className="title">{title}</h2>
                    <SliderArrows />
                </div>

                <SplideTrack>
                    {instagramPhotos.map(item => (
                        <SplideSlide key={item.imageUrl.toString()}>
                            <a className="full-link" href="#">
                                <img src={item.imageUrl} alt="фото" width="336" height="336" />
                            </a>
                        </SplideSlide>
                    ))}
                </SplideTrack>
            </Splide>
        </section>
    );
}

export default Instagram;