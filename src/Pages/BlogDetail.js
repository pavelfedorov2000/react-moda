import axios from 'axios';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { useRouteMatch } from 'react-router-dom/cjs/react-router-dom.min';
import { AsideBlog, BlogText, Crumbs } from '../Components';

function BlogDetail() {

    let { id } = useParams();

    const { url } = useRouteMatch();

    const [news, setNews] = useState([]);

    React.useEffect(() => {
        axios.get('/blog').then(({ data }) => {
            setNews(data);
        });
    }, []); // [] = componentDidMout */

    const activeNews = news.find(news => news.id == id);
    const asideNews = news.filter(news => news.id != id).splice(0, 4);

    return (
        <main className="page blog-text">
            {activeNews &&
                <div className="container">
                    <Crumbs title={activeNews.title} id={id} url={url.split('/')[1]} />

                    <h1 className="title page__title">{activeNews.title}</h1>

                    <div className="blog-text__inner">
                        <BlogText {...activeNews} />
                        <AsideBlog asideNews={asideNews} />
                    </div>
                </div>
            }
        </main>
    );
}

export default BlogDetail;