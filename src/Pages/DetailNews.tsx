import axios from 'axios';
import { useEffect, useState, useMemo } from 'react';
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

    const activeNews: NewsItem | undefined = useMemo(() => news?.find((news) => news.id == id), [id]);
    const otherNews: NewsItem[] = useMemo(() => news?.filter((news) => news.id !== id), [id]);

    if (!activeNews) return null;

    return (
        <>
            <main>
                <Container>
                    <Crumbs title={activeNews.title} id={id} url={url.split('/')[1]} />
                    <NewsDetail {...activeNews} />
                </Container>
            </main>
            <OtherNews items={otherNews} title="Другие новости и акции" />
        </>
    );
}

export default DetailNews;
