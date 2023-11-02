import { Splide, SplideTrack, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css/core';
import sliderImageLeft from '../assets/images/content/blog-text-slider/01.jpg';
import sliderImageRight from '../assets/images/content/blog-text-slider/02.jpg';
import SliderArrows from '../components/SliderArrows';
import { SPLIDE_OPTIONS } from '../constants/splide';
import Tag from '../components/Tag';
import { BlogItem } from '../interfaces/BlogItem';
import { Image } from '../ui';
import { fakeArray } from '../utils/fakeArray';

const mainClass = 'blog-text';

const BlogText = ({ tags, content }: BlogItem) => {
    return (
        <article className={`${mainClass}__content`}>
            <ul className="tags blog-text__tags">
                {tags?.map((tag) => (
                    <li key={tag.toString()}>
                        <Tag className="blog-text__tag" tag={tag} />
                    </li>
                ))}
            </ul>

            <div className={`${mainClass}__text`}>
                {content.items.map((item) => (
                    <p key={item.text.toString()}>{item.text}</p>
                ))}
            </div>

            <Splide className={`${mainClass}__slider`} hasTrack={false} options={{
                ...SPLIDE_OPTIONS,
                perPage: 2
            }}>
                <SliderArrows position="absolute" isRound />
                <SplideTrack>
                    {fakeArray(4).map((_, index) => (
                        <SplideSlide className={`${mainClass}__slider-item`} key={index}>
                            <Image src={index % 2 !== 0 ? sliderImageLeft : sliderImageRight} width={478} height={637} />
                        </SplideSlide>
                    ))}
                </SplideTrack>
            </Splide>
        </article>
    );
}

export default BlogText;