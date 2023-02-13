import { Splide, SplideTrack, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css/core';
import { Gaps } from '../enums/Gap';
import CatalogCard from './CatalogCard/CatalogCard';
import SliderArrows from './SliderArrows';

const splideOptions = {
    speed: 1000,
    gap: Gaps.XL,
    perPage: 4,
    perMove: 1,
    breakpoints: {
        1024: { perPage: 2, gap: Gaps.L },
        767: { perPage: 1 },
        500: { gap: Gaps.S }
    },
}

interface Props {
    items: any[];
    title: string;
}

const SliderSection = ({ items, title }: Props) => {
    //const sliderLength = 6;
    //const filteredProducts = id ? products.filter(product => product.id !== id) : products;

    return (
        <section className="section">
            <div className="container">
                {items.length > 4 ?
                    <Splide hasTrack={false} aria-label={title} options={splideOptions}>
                        <div className="section__top">
                            <h2 className="title">{title}</h2>
                            {items.length > 4 && <SliderArrows />}
                        </div>

                        <SplideTrack>
                            {items.map((item) => (
                                <SplideSlide key={item.id}>
                                    <CatalogCard {...item} />
                                </SplideSlide>
                            ))}
                        </SplideTrack>
                    </Splide>
                    :
                    <>
                        <div className="section__top">
                            <h2 className="title">{title}</h2>
                        </div>

                        <ul className="grid grid--items-xl_4">
                            {items.map((item) => (
                                <li key={item.id}>
                                    <CatalogCard {...item} />
                                </li>
                            ))}
                        </ul>
                    </>
                }
            </div>
        </section>
    );
}

export default SliderSection;