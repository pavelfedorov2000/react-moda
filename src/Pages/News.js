
import React from 'react';
import { Link, NavLink } from 'react-router-dom';

function News({ news }) {

    const crumbs = ['Главная', 'Новости и акции'];

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

                <div className="news-page__grid">
                    {news.map((article, i) => (
                        <article key={`article-${i}`} className="blog-item">
                            <NavLink className="blog-item__inner" to={`/news-detail/${article.id}`}>
                                <div className="blog-item__img"><img src={article.imageUrl} alt="фото" /></div>
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
                            </NavLink>
                        </article>
                    ))}
                </div>
            </div>
        </main>
    );
}

export default News;