import { Splide, SplideTrack, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css/core';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Pages } from '../enums/Page';
//import useRequest from '../hooks/useRequest';
import { CategoriesSliderItem } from '../interfaces/CategoriesSliderItem';

const splideOptions = {
    autoWidth: true,
    gap: `${getComputedStyle(document.documentElement).getPropertyValue('--gap')}`,
    pagination: false,
    arrows: false,
};

const IconsSlider = () => {
    //const [categoriesIcons] = useRequest('/iconsSlider');
    const [categoriesIcons, setCategoriesIcons] = useState<CategoriesSliderItem[]>([]);

    useEffect(() => {
        axios.get<CategoriesSliderItem[]>('/iconsSlider').then(({ data }) => {
            setCategoriesIcons(data);
        });
    }, []);

    return (
        <Splide className="icons-slider" hasTrack={false} aria-label="Категории" options={splideOptions}>
            <SplideTrack>
                {categoriesIcons.map((item) => (
                    <SplideSlide key={item.imageUrl.toString()} style={{ width: '12.8rem' }}>
                        <Link className="icons-slider__item" to={Pages.Catalog}>
                            <span className="icons-slider__item-img">
                                <img src={item.imageUrl} alt={item.title} />
                            </span>
                            <span className="icons-slider__item-title">{item.title}</span>
                        </Link>
                    </SplideSlide>
                ))}
            </SplideTrack>
        </Splide>
    );
}

export default IconsSlider;