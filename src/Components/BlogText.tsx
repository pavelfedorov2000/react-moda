import { Splide, SplideTrack, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css/core';
import sliderImageLeft from '../assets/images/content/blog-text-slider/01.jpg';
import sliderImageRight from '../assets/images/content/blog-text-slider/02.jpg';
import SliderArrows from './SliderArrows';
import { splideOptions } from '../constants/splide';
import Tag from './Tag';
import { BlogItem } from '../interfaces/BlogItem';

const BlogText = ({ tags, imageUrl, content }: BlogItem) => {
    return (
        <article className="blog-text__content">
            <ul className="tags blog-text__tags">
                {tags?.map((tag) => (
                    <li key={tag.toString()}>
                        <Tag className="blog-text__tag" tag={tag} />
                    </li>
                ))}
            </ul>

            <div className="blog-text__text">
                {content.items.map((item) => (
                    <p key={item.text.toString()}>{item.text}</p>
                ))}
            </div>

            <Splide className="blog-text__slider" hasTrack={false} options={{
                ...splideOptions,
                perPage: 2
            }}>
                <SliderArrows isRound />
                <SplideTrack>
                    {Array(4).fill(0).map((_, index) => (
                        <SplideSlide className="blog-text__slider-item" key={index}>
                            <img src={index % 2 !== 0 ? sliderImageLeft : sliderImageRight} alt="фото" />
                        </SplideSlide>
                    ))}
                </SplideTrack>
            </Splide>
        </article>
    );
}

export default BlogText;