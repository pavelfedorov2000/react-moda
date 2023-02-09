import React, { useState } from 'react';
import axios from 'axios';
import { BlogItem, Crumbs, EmptyPage } from '../Components';
import { useEffect } from 'react';

function News({ title, empty }) {
    const [news, setNews] = useState([]);
    useEffect(() => {
        axios.get('/news').then(({ data }) => {
            setNews(data);
        });
    }, []);

    return (
        <main className="page news-page">
            <div className="container">
                <Crumbs title={title} />

                <h1 className="title page__title">{title}</h1>

                {news.length == 0 ?
                    <EmptyPage {...empty} />
                    :
                    <div className="news-page__grid">
                        {news.map(article => (
                            <BlogItem key={article.id} {...article} path="news-detail" />
                        ))}
                    </div>
                }
            </div>
        </main>
    );
}


export default News;