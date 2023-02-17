import axios from 'axios';
import { useEffect, useState } from 'react';
import { useRouteMatch } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { AsideBlog, BlogText, Crumbs } from '../Components';
import { Pages } from '../enums/Page';
import { useActions } from '../hooks/useActions';
import { useTypedSelector } from '../hooks/useTypedSelector';
import { BlogItem } from '../interfaces/BlogItem';
import { NewsItem } from '../interfaces/NewsItem';

const BlogDetail = () => {
    const { id } = useParams();
    const { url } = useRouteMatch();

    const { fetchBlog } = useActions();
    const { items } = useTypedSelector((state) => state.blogReducer);

    const [news, setNews] = useState<NewsItem[]>([]);
    const [blogItems, setBlogItems] = useState<BlogItem[]>([]);

    useEffect(() => {
        fetchBlog();
        setBlogItems(items);
        axios.get<NewsItem[]>(Pages.News.path).then(({ data }) => {
            setNews(data);
        });
    }, []);

    const activeBlog = blogItems.find((news) => news.id == id);
    const asideNews = news.filter((news) => news.id !== id).splice(0, 4);

    return (
        <main className="page blog-text">
            {activeBlog &&
                <div className="container">
                    <Crumbs title={activeBlog.title} id={id} url={url.split('/')[1]} />

                    <div className="page__top">
                        <h1 className="title">{activeBlog.title}</h1>
                    </div>

                    <div className="blog-text__inner">
                        <BlogText {...activeBlog} />
                        <AsideBlog items={asideNews} />
                    </div>
                </div>
            }
        </main>
    );
}

export default BlogDetail;