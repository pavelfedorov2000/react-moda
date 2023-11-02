import { Splide, SplideTrack, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css/core';
import { SPLIDE_OPTIONS } from '../constants/splide';
import { CatalogItem } from '../interfaces/CatalogItem';
import CatalogCard from '../components/CatalogCard/CatalogCard';
import SliderArrows from '../components/SliderArrows';

interface Props {
    items: CatalogItem[];
    title: string;
}

const SliderSection = ({ items, title }: Props) => {
    return (
        <section className="section">
            {items.length > 4 ?
                <Splide hasTrack={false} aria-label={title} options={SPLIDE_OPTIONS}>
                    <div className="section__top">
                        <h2 className="title">{title}</h2>
                        <SliderArrows />
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