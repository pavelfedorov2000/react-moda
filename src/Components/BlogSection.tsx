import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Pages } from '../enums/Page';
import { useActions } from '../hooks/useActions';
import { useTypedSelector } from '../hooks/useTypedSelector';
import { BlogItem as BlogItemType } from '../interfaces/BlogItem';
import AllLink from './AllLink';
import BlogItem from './BlogItem';

const BlogSection = () => {
    const { fetchBlog } = useActions();
    const { items } = useTypedSelector((state) => state.blogReducer);
    const [blogPreview, setBlogPreview] = useState<BlogItemType[]>([]);

    useEffect(() => {
        fetchBlog();
        setBlogPreview([...items].slice(0, 3));
    }, []);

    return (
        <section className="section">
            <div className="container">
                <div className="section__top">
                    <h2 className="title">{Pages.Blog.title}</h2>

                    <AllLink url={Pages.Blog.path} />
                </div>

                <ul className="blog-grid">
                    {blogPreview.map(article => (
                        <li key={article.id}>
                            <BlogItem {...article} otherPage={true} actualPage="blog" className="blog-grid__item" />
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
}

export default BlogSection;