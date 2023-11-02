import { Splide, SplideTrack, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css/core';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Gaps } from '../enums/Gap';
import { CategoriesSliderItem } from '../interfaces/CategoriesSliderItem';
import CategoryItem from '../components/CategoryItem';
import { Section, Slider } from '../components/Layout';

const sliderOptions = {
    autoWidth: true,
    gap: Gaps.XL,
    pagination: false,
    arrows: false,
};

const mainClass = 'icons-slider';

const IconsSlider = () => {
    const [categoriesIcons, setCategoriesIcons] = useState<CategoriesSliderItem[]>([]);

    useEffect(() => {
        axios.get<CategoriesSliderItem[]>('/iconsSlider').then(({ data }) => {
            setCategoriesIcons(data);
        });
    }, []);

    return (
        <Section>
            <Slider className={mainClass} ariaLabel="Категории" slides={categoriesIcons} item={CategoryItem} slideWidth='12.8rem' sliderOptions={sliderOptions} />
        </Section>
    );
}

export default IconsSlider;