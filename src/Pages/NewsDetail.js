import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

function NewsDetail({ activeNews }) {
  const [news, setNews] = useState([]);
  React.useEffect(() => {
    axios.get('/news').then(({ data }) => {
      setNews(data);
    });
  }, []); // [] = componentDidMout
  console.log(news);

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
              <span>{news[activeNews]["title"]}</span>
            </li>
          </ol>
        </nav>
        <section className="news-detail">
          <h1 className="title page__title">{news[activeNews]["title"]}</h1>
          <div className="news-detail__inner">
            <div className="news-detail__img">
              <img className="lazy" src="assets/images/content/news/news-detail.jpg" alt="фото" />
            </div>
            <div className="news-detail__content">
              {Object.keys(news[activeNews]["dl"]).map((key, i) => (
                <p key={`p-${i + 1}`}>
                  <b>{`${key}:`}</b>
                  {news[activeNews]["dl"][key]}
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