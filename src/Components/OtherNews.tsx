import '@splidejs/react-splide/css/core';
import BlogItem from './BlogItem';
import { NewsItem } from '../interfaces/NewsItem';
import { Container, Slider } from './Layout';
import { ClassName } from '../enums/ClassName';

interface Props {
    items: NewsItem[],
    title: string;
}

const OtherNews = ({ items, title }: Props) => {
    return (
        <aside className="page">
            <Container>
                <Slider className={ClassName.Section} ariaLabel={title} replaceOptions={{ perPage: 2 }} slides={items} item={BlogItem} isSliderSection />
            </Container>
        </aside>
    );
}

export default OtherNews;