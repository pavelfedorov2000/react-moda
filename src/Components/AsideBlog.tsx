import { NewsItem } from '../interfaces/NewsItem';
import BlogItem from './BlogItem';

interface Props {
    items: NewsItem[]
}

const AsideBlog = ({ items }: Props) => {
    return (
        <aside className="blog-text__aside aside-blog">
            <h2 className="aside-blog__title">Другие новости</h2>
            <ul className="grid aside-blog__items">
                {items.map((article) => (
                    <li key={article.id}>
                        <BlogItem className="aside-blog__item" {...article} isUrlSplice />
                    </li>
                ))}
            </ul>
        </aside>
    );
}

export default AsideBlog;