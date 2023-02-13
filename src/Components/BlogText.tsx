import { Splide, SplideTrack, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css/core';
//import sliderImageLeft from '../assets/images/content/blog-text-slider/01.jpg';
import sliderImageRight from '../assets/images/content/blog-text-slider/02.jpg';
import SliderArrows from './SliderArrows';
import { phone } from '../constants/phone';
import { splideOptions } from '../constants/splide';
import Tag from './Tag';
import { BlogItem } from '../interfaces/BlogItem';

const BlogText = ({ tags, imageUrl }: BlogItem) => {
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
                <p>Бренд LORIATA в новом сезоне дополнил свою коллекцию стильными пуховиками.</p>
                <p>
                    Для создания пуховиков используется пух белого гуся 90/10 от известного производителя
                    MINARDI
                    PIUME (Италия)
                    с показателем Fill Power 700.
                </p>
                <p>
                    Уникальная NANO технология обработки пуха гарантирует экологичность и гипоаллергенность всей
                    продукции.
                    Благодаря специальной обработке, ткани обладают водонепроницаемостью и способностью
                    “дышать”.
                    Дизайн и крой
                    изделий не только актуален, но и функционален, пуховики полностью адаптированы для холодной
                    зимы
                    с
                    температурой до -25С. Коллекция Loriata подарит вам индивидуальный стиль, легкость и тепло в
                    зимние дни!
                </p>
                <p>
                    Наши менеджеры готовы организовать дистанционную презентацию коллекций любым удобном
                    способом
                    (Skype, Zoom,
                    Whats App).
                </p>
                <p>Звоните по бесплатному номеру <a href={`tel:${['+', ...phone.split(' ').join('').trim()].join('')}`}>{phone}</a>, задавайте
                    вопросы нашим
                    менеджерам.</p>
            </div>

            <Splide className="blog-text__slider" hasTrack={false} options={splideOptions}>
                <SliderArrows isRound />
                <SplideTrack>
                    {Array(4).fill(0).map((_, index) => (
                        <SplideSlide className="blog-text__slider-item" key={index}>
                            <img src={index % 2 !== 0 ? imageUrl : sliderImageRight} alt="фото" />
                        </SplideSlide>
                    ))}
                </SplideTrack>
            </Splide>
        </article>
    );
}

export default BlogText;