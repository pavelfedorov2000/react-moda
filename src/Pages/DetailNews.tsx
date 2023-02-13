import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useRouteMatch } from 'react-router-dom';
import { Crumbs, OtherNews, NewsDetail } from '../Components';
import { Pages } from '../enums/Page';
import { NewsItem } from '../interfaces/NewsItem';

const DetailNews = () => {
    const { id } = useParams();
    const { url } = useRouteMatch();

    const [news, setNews] = useState<NewsItem[]>([]);

    useEffect(() => {
        axios.get<NewsItem[]>(Pages.News.path).then(({ data }) => {
            setNews(data);
        });
    }, []);

    const activeNews: NewsItem | undefined = news.find(news => news.id == id);
    const otherNews: NewsItem[] = news.filter(news => news.id !== id);

    return (
        <main className="page">
            {activeNews &&
                <div className="container">
                    <Crumbs title={activeNews.title} id={id} url={url.split('/')[1]} />

                    <NewsDetail {...activeNews} />

                    <OtherNews items={otherNews} title="Другие новости и акции" />
                </div>
            }
        </main>
    );
}

export default DetailNews;