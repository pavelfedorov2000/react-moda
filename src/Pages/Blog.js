import axios from 'axios';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Blog() {
    const crumbs = ['Главная', 'Блог'];
    const [blogItems, setBlogItems] = useState([]);

    React.useEffect(() => {
        axios.get('/blog').then(({ data }) => {
            setBlogItems(data);
        });
    }, []); // [] = componentDidMout
    return (
        <main className="page blog-page">
            <div className="container">
                <nav className="breadcrumbs" aria-label="breadcrumbs">
                    <ol className="breadcrumbs__list">
                        {crumbs.map((crumb, i) => (
                            <li className="breadcrumbs__item">{i === 0 ? <Link to="/">{crumb}</Link> : <span>{crumb}</span>}</li>
                        ))}
                    </ol>
                </nav>

                <h1 className="title blog-page__title">Блог</h1>

                <div className="blog-grid">
                    {blogItems.map((article, i) => (
                        <article key={`article_${i + 1}`} className="blog-item blog-grid__item">
                            <Link className="blog-item__img" to={`/blog-detail/${article.id}`}>
                                <img src={article.imageUrl} alt="фото блога" />
                            </Link>
                            <div className="blog-item__content">
                                <time className="date date blog-item__date" dateTime={article.date.split('.').reverse().join('-')}>{article.date}</time>
                                <Link className="blog-item-title blog-item-title blog-item__title" to={`/blog-detail/${article.id}`}>{article.title}</Link>
                                <p className="blog-item-text blog-item__text">{article.text}</p>
                                <div className="tags">
                                    {article.tags.map((tag, i) => (
                                        <a key={`tag-${i + 1}`} href="#" className="tag blog-item__tag">{`#${tag}`}</a>
                                    ))}
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </main>
    );
}

export default Blog;