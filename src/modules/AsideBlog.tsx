import { TitleLevel } from '../enums/TitleLevel';
import { NewsItem } from '../interfaces/NewsItem';
import { Title } from '../ui';
import BlogItem from '../components/BlogItem';
import Grid from '../components/Layout/Grid';

const mainClass = 'aside-blog';

const AsideBlog = ({ items }: { items: NewsItem[]}) => {
    return (
        <aside className={`${mainClass} blog-text__aside`}>
            <Title tag={TitleLevel.H2} className={`${mainClass}__title`}>Другие новости</Title>
            <Grid className="aside-blog__items" listItems={items} listItem={BlogItem} isUrlSplice />
        </aside>
    );
}

export default AsideBlog;