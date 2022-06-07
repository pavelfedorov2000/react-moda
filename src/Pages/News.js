
import React from 'react';
import { Link } from 'react-router-dom';
import emptyBlog from '../assets/images/icons/empty-blog.svg';
import { BlogItem } from '../Components';

function News({ news }) {

  const crumbs = ['Главная', 'Новости и акции'];

  return (
    <main className="page news-page">
      <div className="container">
        <nav className="breadcrumbs" aria-label="breadcrumbs">
          <ol className="breadcrumbs__list">
            {crumbs.map((crumb, i) => (
              <li className="breadcrumbs__item">{i === 0 ? <Link to="/">{crumb}</Link> : <span>{crumb}</span>}</li>
            ))}
          </ol>
        </nav>

        <h1 className="title page__title">Новости и акции</h1>

        {news.length == 0 ?
          <div class="empty-page news-page__empty">
            <img class="empty-page__img" src={emptyBlog} alt="иконка" width="100"
              height="100" />
            <div class="empty-page__text">Нет актуальных новостей и акций</div>
          </div>
          :
          <div className="news-page__grid">
            {news.map(article => (
              <BlogItem key={article.id} {...article} path="news-detail" />
            ))}
          </div>
        }
      </div>
    </main>
  );
}

export default News;