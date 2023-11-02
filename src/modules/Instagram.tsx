import { useState } from 'react';
import axios from 'axios';
import { Splide, SplideTrack, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css/core';
import SliderArrows from '../components/SliderArrows';
import { useEffect } from 'react';
import { SPLIDE_OPTIONS } from '../constants/splide';
import { Image } from '../ui';
import { Section, Slider } from '../components/Layout';

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
        <Section title={title} isSlider>
            <Slider className="section" ariaLabel={title} slides={instagramPhotos} isSliderSection></Slider>
        </Section>
    );
}

export default Instagram;