import axios from 'axios';
import { useEffect, useState, useMemo } from 'react';
import { useRouteMatch } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { Crumbs } from '../components/Layout';
import PageTop from '../components/Layout/PageTop';
import { Pages } from '../enums/Page';
import { useActions } from '../hooks/useActions';
import { useTypedSelector } from '../hooks/useTypedSelector';
import { BlogItem } from '../interfaces/BlogItem';
import { NewsItem } from '../interfaces/NewsItem';
import { generatePageClassName } from '../utils/generatePageClassName';
import { ClassName } from '../enums/ClassName';
import { AsideBlog, BlogText } from '../modules';

const mainClass = 'blog-text';

const BlogDetail = () => {
    const { id } = useParams();
    const { url } = useRouteMatch();

    const { fetchBlog } = useActions();
    const { items as blogItems } = useTypedSelector((state) => state.blogReducer);

    const [news, setNews] = useState<NewsItem[]>([]);

    useEffect(() => {
        fetchBlog();
        axios.get<NewsItem[]>(Pages.News.path).then(({ data }) => {
            setNews(data);
        });
    }, []);

    const activeBlog = useMemo(() => blogItems?.find((news) => news.id == id, [id]);
    const asideNews = useMemo(() => news?.filter((news) => news?.id !== id).splice(0, 4), [id]);

    if (!activeBlog) return null;

    return (
        <main className={generatePageClassName(mainClass)}>
            <div className={ClassName.Container}>
                <Crumbs title={activeBlog.title} id={id} url={url.split('/')[1]} />

                <PageTop title={activeBlog.title} />

                <div className={`${mainClass}__inner`}>
                    <BlogText {...activeBlog} />
                    <AsideBlog items={asideNews} />
                </div>
            </div>
        </main>
    );
}

export default BlogDetail;
