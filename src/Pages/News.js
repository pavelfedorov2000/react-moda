
import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import emptyBlog from '../assets/images/icons/empty-blog.svg';

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
                        {news.map((article, i) => (
                            <article key={`article-${i}`} className="blog-item">
                                <NavLink className="blog-item__inner" to={`/news-detail/${article.id}`}>
                                    <div className="blog-item__img"><img src={article.imageUrl} alt="фото" /></div>
                                    <div className="blog-item__content">
                                        <time className="date blog-item__date" dateTime={article.date.split('.').reverse().join('-')}>{article.date}</time>
                                        <div className="blog-item-title blog-item__title">
                                            {article.title}
                                        </div>
                                        <p className="blog-item-text blog-item__text">{article.text}</p>
                                        <div className="tags">
                                            {article.tags.map((tag, i) => (
                                                <a key={`tag_${i + 1}`} href="#" className="tag blog-item__tag">{`#${tag}`}</a>
                                            ))}
                                        </div>
                                    </div>
                                </NavLink>
                            </article>
                        ))}
                    </div>
                }
            </div>
        </main>
    );
}

export default News;