import axios from 'axios';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';

function NewsDetail() {

  //const { params } = match;
  //const { id } = params;

  let { id } = useParams();
  console.log(id);

  const [news, setNews] = useState([]);
  /* const fetchNews = async news => {
    const result = await axios.get('/news');
    setNews(result.data.news);
  } */
  React.useEffect(() => {
    axios.get('/news').then(({ data }) => {
      setNews(data);
    });
  }, []); // [] = componentDidMout */

  console.log(news);

  const activeNews = news.filter(news => news.id == id)[0];
  console.log(activeNews);

  return (
    <main className="page">
      <div className="container">
        <nav className="breadcrumbs" aria-label="breadcrumbs">
          <ol className="breadcrumbs__list">
            <li className="breadcrumbs__item">
              <Link to="/">Главная</Link>
            </li>
            <li className="breadcrumbs__item">
              <Link to="/news">Новости и акции</Link>
            </li>
            <li className="breadcrumbs__item">
              <span>{activeNews && activeNews.title}</span>
            </li>
          </ol>
        </nav>
        <section className="news-detail">
          <h1 className="title page__title">{activeNews && activeNews.title}</h1>
          <div className="news-detail__inner">
            <div className="news-detail__img">
              <img src={activeNews && activeNews.imageUrl} alt="фото" />
            </div>
            <div className="news-detail__content">
              {activeNews && Object.keys(activeNews.dl).map((key, i) => (
                <p key={`p-${i + 1}`}>
                  <b>{`${key}:`}</b>
                  {activeNews.dl[key]}
                </p>
              ))}
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}

export default NewsDetail;