import React, { useState } from 'react';
import { Splide, SplideTrack, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css/core';
import axios from 'axios';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

function IconsSlider() {

    const [categoriesIcons, setCategoriesIcons] = useState([]);
    React.useEffect(() => {
        axios.get('/iconsSlider').then(({ data }) => {
            setCategoriesIcons(data);
        });
    }, []); // [] = componentDidMout

    //console.log(categoriesIcons);

    return (
        <div className="section">
            <Splide className="icons-slider" hasTrack={false} aria-label="Категории" options={{
                autoWidth: true,
                gap: '5.2rem',
                pagination: false,
                arrows: false,
            }}>
                <SplideTrack>
                    {categoriesIcons.map(item => (
                        <SplideSlide key={item.id} style={{ width: '12.8rem' }}>
                            <Link className="icons-slider__item" to="/catalog">
                                <div className="icons-slider__item-img">
                                    <img src={item.imageUrl} alt={item.title} />
                                </div>
                                <span className="icons-slider__item-title">{item.title}</span>
                            </Link>
                        </SplideSlide>
                    ))}
                </SplideTrack>
            </Splide>
        </div>
    );
}

export default IconsSlider;