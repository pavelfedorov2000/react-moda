import { Splide, SplideTrack, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css/core';
import { splideOptions } from '../../constants/splide';
import SliderArrows from '../SliderArrows';

const YOUTUBE_LINK = 'https://www.youtube.com/watch?v=L1e8YEozOD8';

interface Props {
    imageUrl: string;
}

const ProductCardSlider = ({ imageUrl }: Props) => {
    return (
        <Splide className="product-card__slider" hasTrack={false} options={{
            ...splideOptions,
            type: 'loop',
            perPage: 2
        }}>
            <SliderArrows position="absolute" isRound />
            <SplideTrack>
                {Array(4).fill(0).map((_, index) => (
                    <SplideSlide key={index}>
                        <a data-fancybox="gallery" className="product-card__slider-item" href={index % 2 !== 0 ? YOUTUBE_LINK : imageUrl}>
                            <img src={imageUrl} alt="фото" />
                            {index % 2 !== 0 && <div className="player-btn"></div>}
                        </a>
                    </SplideSlide>
                ))}
            </SplideTrack>
        </Splide>
    );
};

export default ProductCardSlider;