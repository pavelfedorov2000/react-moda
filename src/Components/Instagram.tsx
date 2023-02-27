import { useState } from 'react';
import axios from 'axios';
import { Splide, SplideTrack, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css/core';
import SliderArrows from './SliderArrows';
import { useEffect } from 'react';
import { splideOptions } from '../constants/splide';
import { database } from '../constants/db';

interface InstagramItem {
    imageUrl: string;
}

interface Props {
    title: string;
}

const Instagram = ({ title }: Props) => {
    const [instagramPhotos, setInstagramPhotos] = useState<InstagramItem[]>([]);

    useEffect(() => {
        axios.get(database).then(({ data }) => {
            setInstagramPhotos(data.instagram);
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
                    {instagramPhotos.map((item, index) => (
                        <SplideSlide key={index}>
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