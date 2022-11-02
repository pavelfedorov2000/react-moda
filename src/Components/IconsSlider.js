import React, { useState } from 'react';
import { Splide, SplideTrack, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css/core';
import axios from 'axios';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

const splideOptions = {
    autoWidth: true,
    gap: `${getComputedStyle(document.documentElement).getPropertyValue('--gap')}`,
    pagination: false,
    arrows: false,
};

function IconsSlider() {

    const [categoriesIcons, setCategoriesIcons] = useState([]);
    React.useEffect(() => {
        axios.get('/iconsSlider').then(({ data }) => {
            setCategoriesIcons(data);
        });
    }, []); // [] = componentDidMout

    return (
        <section className="section">
            <div className="container">
                <Splide className="icons-slider" hasTrack={false} aria-label="Категории" options={splideOptions}>
                    <SplideTrack>
                        {categoriesIcons.map(item => (
                            <SplideSlide key={item.id} style={{ width: '12.8rem' }}>
                                <Link className="icons-slider__item" to="/catalog">
                                    <span className="icons-slider__item-img">
                                        <img src={item.imageUrl} alt={item.title} />
                                    </span>
                                    <span className="icons-slider__item-title">{item.title}</span>
                                </Link>
                            </SplideSlide>
                        ))}
                    </SplideTrack>
                </Splide>
            </div>
        </section>
    );
}

export default IconsSlider;