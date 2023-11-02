import { Splide, SplideTrack, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css/core';
import { SPLIDE_OPTIONS } from '../../constants/splide';
import SliderArrows from '../SliderArrows';
import { Image } from '../../ui';
import { fakeArray } from '../../utils/fakeArray';

const YOUTUBE_LINK = 'https://www.youtube.com/watch?v=L1e8YEozOD8';

interface Props {
    mainClass?: string;
    imageUrl: string;
}

const ProductCardSlider = ({ mainClass, imageUrl }: Props) => {
    return (
        <Splide className={`${mainClass}__slider`} hasTrack={false} options={{
            ...SPLIDE_OPTIONS,
            type: 'loop',
            perPage: 2
        }}>
            <SliderArrows position="absolute" isRound />
            <SplideTrack>
                {fakeArray(4).map((_, index) => (
                    <SplideSlide key={index}>
                        <a data-fancybox="gallery" className={`${mainClass}__slider-item`} href={index % 2 !== 0 ? YOUTUBE_LINK : imageUrl}>
                            <Image src={imageUrl} alt="фото" width={480} height={610} />
                            {index % 2 !== 0 && <div className="player-btn"></div>}
                        </a>
                    </SplideSlide>
                ))}
            </SplideTrack>
        </Splide>
    );
};

export default ProductCardSlider;