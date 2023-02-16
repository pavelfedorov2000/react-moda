import { Splide, SplideTrack, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css/core';
import { splideOptions } from '../constants/splide';
import { CatalogItem } from '../interfaces/CatalogItem';
import CatalogCard from './CatalogCard/CatalogCard';
import SliderArrows from './SliderArrows';

interface Props {
    items: CatalogItem[];
    title: string;
}

const SliderSection = ({ items, title }: Props) => {
    //const filteredProducts = id ? products.filter(product => product.id !== id) : products;

    return (
        <section className="section">
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
        </section>
    );
}

export default SliderSection;