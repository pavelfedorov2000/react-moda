import { useEffect, useState } from 'react';
import { BlogItem } from '../components';
import { Container, Crumbs, EmptyBlock } from '../components/Layout';
import PageTop from '../components/Layout/PageTop';
import { useActions } from '../hooks/useActions';
import { useTypedSelector } from '../hooks/useTypedSelector';
import { BlogItem as BlogItemType } from '../interfaces/BlogItem';
import { Page } from '../interfaces/Route';
import Grid from '../components/Layout/Grid';
import { ClassName } from '../enums/ClassName';

const Blog = ({ title, emptyBlock }: Page) => {
    const { fetchBlog } = useActions();
    const { items } = useTypedSelector((state) => state.blogReducer);

    const [blogItems, setBlogItems] = useState<BlogItemType[]>([]);

    useEffect(() => {
        fetchBlog();
        setBlogItems(items);
    }, []);

    return (
        <main className={ClassName.Page}>
            <Container>
                <Crumbs title={title} />

                <PageTop title={title} />

                {blogItems.length !== 0 ?
                    <Grid className="blog-grid" listItems={blogItems} listItem={BlogItem} />
                    :
                    <EmptyBlock {...emptyBlock} />
                }
            </Container>
        </main>
    );
}

export default Blog;

//<Pagination align='center' />