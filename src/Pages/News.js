
import React from 'react';
import { Link } from 'react-router-dom';
import emptyBlog from '../assets/images/icons/empty-blog.svg';
import { BlogItem } from '../Components';

function News({ news, generateCrumbs }) {

  const crumbs = ['Главная', 'Новости и акции'];

  return (
    <main className="page news-page">
      <div className="container">
        <nav className="breadcrumbs" aria-label="breadcrumbs">
          <ol className="breadcrumbs__list">
            {crumbs.map((crumb, i) => generateCrumbs(crumb, i))}
          </ol>
        </nav>

        <h1 className="title page__title">{crumbs[0]}</h1>

        {news &&
          <>
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
          </>
        }
      </div>
    </main>
  );
}

export default News;