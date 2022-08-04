import axios from 'axios';
import React, { useState } from 'react';
import { Link, useRouteMatch } from 'react-router-dom';
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';
import { Crumbs, OtherNews } from '../Components';

function NewsDetail() {

    let { id } = useParams();

    const { url } = useRouteMatch();

    const [news, setNews] = useState([]);

    React.useEffect(() => {
        axios.get('/news').then(({ data }) => {
            setNews(data);
        });
    }, []); // [] = componentDidMout */

    //console.log(news);

    const activeNews = news.filter(news => news.id == id)[0];
    //console.log(activeNews);
    const otherNews = news.filter(news => news.id != id);
    //console.log(otherNews);

    return (
        <main className="page">
            <div className="container">
                {activeNews &&
                    <>
                        <Crumbs title={activeNews.title} id={id} url={url.split('/')[1]} />

                        <article className="news-detail">
                            <h1 className="title page__title">{activeNews.title}</h1>
                            <div className="news-detail__inner">
                                <div className="news-detail__img">
                                    <img src={activeNews.imageUrl} alt="фото" />
                                </div>
                                <div className="news-detail__content">
                                    {activeNews.list.map((item, i) => (
                                        <p key={`p-${i + 1}`}>
                                            <b>{`${item.title}:`}</b>
                                            {item.text}
                                        </p>
                                    ))}
                                </div>
                            </div>
                        </article>
                        <aside className="other-news">
                            <OtherNews otherNews={otherNews} title="Другие новости и акции" />
                        </aside>
                    </>
                }
            </div>
        </main>
    );
}

export default NewsDetail;