import { useState } from 'react';
import axios from 'axios';
import { BlogItem } from '../components';
import { useEffect } from 'react';
import { Page } from '../interfaces/Route';
import { NewsItem } from '../interfaces/NewsItem';
import { Pages } from '../enums/Page';
import PageTop from '../components/Layout/PageTop';
import { Crumbs, EmptyBlock } from '../components/Layout';
import { ClassName } from '../enums/ClassName';

const News = ({ title, emptyBlock }: Page) => {
    const [news, setNews] = useState<NewsItem[]>([]);
    useEffect(() => {
        axios.get<NewsItem[]>(Pages.News.path).then(({ data }) => {
            setNews(data);
        });
    }, []);

    return (
        <main className={ClassName.Page}>
            <div className={ClassName.Container}>
                <Crumbs title={title} />

                <PageTop title={title} />

                {news.length !== 0 ?
                    <ul className={ClassName.Grid}>
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