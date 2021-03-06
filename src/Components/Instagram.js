import React, { useState } from 'react';
import axios from 'axios';
import { Splide, SplideTrack, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css/core';
import SliderArrows from './SliderArrows';

function Instagram() {

  const [instagramPhotos, setInstagramPhotos] = useState([]);
  React.useEffect(() => {
    axios.get('/instagram').then(({ data }) => {
      setInstagramPhotos(data);
    });
  }, []); // [] = componentDidMout

  return (
    <section className="section instagram-section">
      <Splide hasTrack={false} aria-label="Instagram" options={{
        speed: 1000,
        gap: '5.2rem',
        perPage: 4,
        breakpoints: {
          1024: { perPage: 3, gap: '3rem' },
          767: { perPage: 2, gap: '2rem' }
        },
      }}>
        <div className="section__title">
          <h2 className="title">Мы в инстаграм</h2>
          <SliderArrows />
        </div>
        <SplideTrack>
          {instagramPhotos.map(item => (
            <SplideSlide key={item.id}>
              <a href="#">
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