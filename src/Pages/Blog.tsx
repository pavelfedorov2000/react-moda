import { useEffect, useState } from 'react';
import { BlogItem } from '../Components';
import { Crumbs, EmptyBlock } from '../Components/Layout';
import PageTop from '../Components/Layout/PageTop';
import { useActions } from '../hooks/useActions';
import { useTypedSelector } from '../hooks/useTypedSelector';
import { BlogItem as BlogItemType } from '../interfaces/BlogItem';
import { Page } from '../interfaces/Route';

const Blog = ({ title, emptyBlock }: Page) => {
    const { fetchBlog } = useActions();
    const { items } = useTypedSelector((state) => state.blogReducer);

    const [blogItems, setBlogItems] = useState<BlogItemType[]>([]);

    useEffect(() => {
        fetchBlog();
        setBlogItems(items);
    }, []);

    return (
        <main className="page">
            <div className="container">
                <Crumbs title={title} />

                <PageTop title={title} />

                {blogItems.length !== 0 ?
                    <>
                        <ul className="grid blog-grid">
                            {
                                blogItems.map((article) => (
                                    <li key={article.id}>
                                        <BlogItem {...article} />
                                    </li>
                                ))
                            }
                        </ul>
                    </>
                    :
                    <EmptyBlock {...emptyBlock} />
                }
            </div>
        </main>
    );
}

export default Blog;

//<Pagination align='center' />