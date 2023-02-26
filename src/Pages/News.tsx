import { useState } from 'react';
import axios from 'axios';
import { BlogItem, Crumbs, EmptyBlock } from '../Components';
import { useEffect } from 'react';
import { Page } from '../interfaces/Route';
import { NewsItem } from '../interfaces/NewsItem';
import { Pages } from '../enums/Page';
import PageTop from '../Components/Layout/PageTop';

const News = ({ title, emptyBlock }: Page) => {
    const [news, setNews] = useState<NewsItem[]>([]);
    useEffect(() => {
        axios.get<NewsItem[]>(Pages.News.path).then(({ data }) => {
            setNews(data);
        });
    }, []);

    return (
        <main className="page">
            <div className="container">
                <Crumbs title={title} />

                <PageTop title={title} />

                {news.length !== 0 ?
                    <ul className="grid">
                        {news.map((article) => (
                            <li key={article.id}>
                                <BlogItem key={article.id} {...article} />
                            </li>
                        ))}
                    </ul>
                    :
                    <EmptyBlock {...emptyBlock} />
                }
            </div>
        </main>
    );
}


export default News;