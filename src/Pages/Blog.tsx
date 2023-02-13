import { useEffect, useState } from 'react';
import { BlogItem, Crumbs, EmptyBlock, Pagination } from '../Components';
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

                <div className="page__top">
                    <h1 className="title">{title}</h1>
                </div>

                {blogItems && blogItems.length !== 0 ?
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
                        <Pagination align='center' />
                    </>
                    :
                    <EmptyBlock {...emptyBlock} />
                }
            </div>
        </main>
    );
}

export default Blog;