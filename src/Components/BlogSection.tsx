import { Pages } from '../enums/Page';
import { BlogItem as BlogItemType } from '../interfaces/BlogItem';
import AllLink from './AllLink';
import BlogItem from './BlogItem';

interface Props {
    items: BlogItemType[];
}

const BlogSection = ({ items }: Props) => {
    return (
        <section className="section">
            <div className="section__top">
                <h2 className="title">{Pages.Blog.title}</h2>

                <AllLink url={Pages.Blog.path} />
            </div>

            <ul className="grid blog-grid">
                {items.map((article) => (
                    <li key={article.id}>
                        <BlogItem {...article} otherPage={true} actualPage="blog" />
                    </li>
                ))}
            </ul>
        </section>
    );
}

export default BlogSection;