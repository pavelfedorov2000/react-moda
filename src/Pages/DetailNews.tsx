import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useRouteMatch } from 'react-router-dom';
import { OtherNews } from '../components';
import { Container, Crumbs } from '../components/Layout';
import { Pages } from '../enums/Page';
import { NewsItem } from '../interfaces/NewsItem';
import { ClassName } from '../enums/ClassName';
import { NewsDetail } from '../modules';

const DetailNews = () => {
    const { id } = useParams();
    const { url } = useRouteMatch();

    const [news, setNews] = useState<NewsItem[]>([]);

    useEffect(() => {
        axios.get<NewsItem[]>(Pages.News.path).then(({ data }) => {
            setNews(data);
        });
    }, []);

    const activeNews: NewsItem | undefined = news.find((news) => news.id == id);
    const otherNews: NewsItem[] = news.filter((news) => news.id !== id);

    return (
        <>
            <main>
                {activeNews &&
                    <Container>
                        <Crumbs title={activeNews.title} id={id} url={url.split('/')[1]} />
                        <NewsDetail {...activeNews} />
                    </Container>
                }
            </main>
            <OtherNews items={otherNews} title="Другие новости и акции" />
        </>
    );
}

export default DetailNews;