import React from 'react';

function AsideBlog({ asideNews }) {
    return (
        <aside className="blog-text__aside aside-blog">
            <h2 className="aside-blog__title">Другие новости</h2>
            <div className="aside-blog__items">
                {asideNews.map(article => (
                    <article key={article.id} className="blog-item aside-blog__item">
                        <a href="#" className="blog-item__img">
                            <img src={article.imageUrl} alt="фото блога" />
                        </a>
                        <div className="blog-item__content">
                            <time className="date aside-blog__item-date" datetime={article.date.split('.').reverse().join('-')}>{article.date}</time>
                            <a className="blog-item-title aside-blog__item-title" href="#">{article.title}</a>
                            <p className="blog-item-text aside-blog__item-text">{article.text}</p>
                            <div className="tags">
                                {article.tags.map((tag, i) => (
                                    <a key={`tag_${i + 1}`} href="#" className="tag blog-item__tag">{`#${tag}`}</a>
                                ))}
                            </div>
                        </div>
                    </article>
                ))}
            </div>
        </aside>
    );
}

export default AsideBlog;