import { Pages } from '../enums/Page';
import { BlogItem as BlogItemType } from '../interfaces/BlogItem';
import BlogItem from '../components/BlogItem';
import { Section } from '../components/Layout';
import Grid from '../components/Layout/Grid';

const BlogSection = ({ items }: { items: BlogItemType[] }) => {
    return (
        <Section title={Pages.Blog.title} link={Pages.Blog.path}>
            <Grid className="blog-grid" listItems={items} listItem={BlogItem} otherPage actualPage={Pages.Blog.path} />
        </Section>
    );
}

export default BlogSection;