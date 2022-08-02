import classNames from 'classnames';
import React from 'react';
import { NavLink, useRouteMatch } from 'react-router-dom';
import Time from './Time';

function BlogItem({ id, imageUrl, date, title, text, tags, className, isUrlSplice, otherPage, actualPage }) {

    let { url } = useRouteMatch();

    url = isUrlSplice ? [...url].reverse().filter((_, i) => i !== 0 && i !== 1).reverse().join('') : url;

    url = otherPage ? `${url[0]}${actualPage}` : url;
    
    return (
        <article className={classNames('blog-item', className !== undefined && className)}>
            <NavLink to={`${url}/${id}`} className="blog-item__img"><img src={imageUrl} alt="фото" /></NavLink>

            <div className="blog-item__content">
                <Time date={date} dateClass={true} className={className} />

                <NavLink to={`${url}/${id}`} className={`blog-item-title ${className === 'aside-blog__item' ? 'ctitle' : 'blog-item__title'}`}>{title}</NavLink>

                <p className={`blog-item-text ${className === 'aside-blog__item' ? 'aside-blog__item-text' : 'blog-item__text'}`}>{text}</p>

                <div className="tags">
                    {tags.map((tag, i) => (
                        <a key={`tag_${i + 1}`} href="#" className="tag blog-item__tag">{`#${tag}`}</a>
                    ))}
                </div>
            </div>
        </article>
    );
}

export default BlogItem;