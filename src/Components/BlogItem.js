import classNames from 'classnames';
import React from 'react';
import { NavLink } from 'react-router-dom';

function BlogItem({ id, imageUrl, date, title, text, tags, className, path }) {
  return (
    <article className={classNames('blog-item', className !== undefined && className)}>
      <NavLink to={`/${path}/${id}`} className="blog-item__img"><img src={imageUrl} alt="фото" /></NavLink>
      <div className="blog-item__content">
        <time className={`date ${className === 'aside-blog__item' ? 'aside-blog__item-date' : 'blog-item__date'}`} dateTime={date.split('.').reverse().join('-')}>{date}</time>
        <NavLink to={`/${path}/${id}`} className={`blog-item-title ${className === 'aside-blog__item' ? 'ctitle' : 'blog-item__title'}`}>{title}</NavLink>
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