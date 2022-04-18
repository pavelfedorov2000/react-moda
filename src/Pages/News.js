
import React, { useState } from 'react';
import { Link, Route } from 'react-router-dom';
import axios from 'axios';
import { NewsDetail } from './';
import { Switch } from 'react-router-dom';

function News() {
  const [news, setNews] = useState([]);
  React.useEffect(() => {
    axios.get('/news').then(({ data }) => {
      setNews(data);
    });
  }, []); // [] = componentDidMout
  console.log(news);


  const crumbs = ['Главная', 'Новости и акции'];

  const [activeNews, setActiveNews] = useState(null);
  const onClickNews = (i) => {
    setActiveNews(i);
  }

  return (
    <main className="page news-page">
      <div className="container">
        <nav className="breadcrumbs" aria-label="breadcrumbs">
          <ol className="breadcrumbs__list">
            {crumbs.map((crumb, i) => (
              i === 0 ? <li className="breadcrumbs__item"><Link to="/">{crumb}</Link></li> : <li className="breadcrumbs__item"><span>{crumb}</span></li>
            ))}
          </ol>
        </nav>

        <h1 className="title page__title">Новости и акции</h1>

        <Switch>
          <Route path="/news/detail" news={news} activeNews={activeNews} component={NewsDetail} />
        </Switch>

        <div className="news-page__grid">
          {news.map((article, i) => (
            <article key={`article-${i}`} className="blog-item" onClick={onClickNews}>
              <Link className="blog-item__inner" to="/news/detail">
                <img className="blog-item__img" src={article.imageUrl} alt="фото" />
                <div className="blog-item__content">
                  <time className="blog-item__date" datetime={article.date.split('.').reverse().join('-')}>{article.date}</time>
                  <h5 className="blog-item-title blog-item__title">
                    {article.title}
                  </h5>
                  <p className="blog-item-text blog-item__text">{article.text}</p>
                  <div className="tags">
                    <a href="#" className="tag blog-item__tag">#коллекция</a>
                    {article.tags.map((tag, i) => (
                      <a key={`tag_${i + 1}`} href="#" className="tag blog-item__tag">{`#${tag}`}</a>
                    ))}
                  </div>
                </div>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
}

export default News;