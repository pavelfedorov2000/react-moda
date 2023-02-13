import { Splide, SplideTrack, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css/core';
import SliderArrows from './SliderArrows';
import BlogItem from './BlogItem';
import { NewsItem } from '../interfaces/NewsItem';
import { splideOptions } from '../constants/splide';

interface Props {
    items: NewsItem[],
    title: string;
}

const OtherNews = ({ items, title }: Props) => {
    return (
        <aside className="other-news">
            <Splide className="slider-section" hasTrack={false} aria-label={title} options={splideOptions}>
                <div className="other-news__top section__top">
                    <h2 className="title">{title}</h2>
                    <SliderArrows />
                </div>

                <SplideTrack>
                    {items.map(news => (
                        <SplideSlide key={news.id}>
                            <BlogItem {...news} isUrlSplice={true} />
                        </SplideSlide>
                    ))}
                </SplideTrack>
            </Splide>
        </aside>
    );
}

export default OtherNews;