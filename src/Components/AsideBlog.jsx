import React from 'react';
import BlogItem from './BlogItem';

function AsideBlog({ asideNews }) {
    return (
        <aside className="blog-text__aside aside-blog">
            <h2 className="aside-blog__title">Другие новости</h2>
            <div className="aside-blog__items">
                {asideNews.map(article => (
                    <BlogItem key={article.id} {...article} isUrlSplice={true} className="aside-blog__item" />
                ))}
            </div>
        </aside>
    );
}

export default AsideBlog;