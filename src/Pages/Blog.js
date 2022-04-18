import axios from 'axios';
import React, { useState } from 'react';

function Blog(props) {
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

          </ol>
        </nav>

        <h1 className="title blog-page__title">Блог</h1>

        <div className="blog-tags">
          <a href="#" className="blog-tag">
            #коллекции
            <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M11.9929 3L8 6.99286L4.00714 3L3 4.00714L6.99286 8L3 11.9929L4.00714 13L8 9.00714L11.9929 13L13 11.9929L9.00714 8L13 4.00714L11.9929 3Z"
                fill="#9b9b9b" />
            </svg>
          </a>
          <a href="#" className="blog-tag">
            #детям
            <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M11.9929 3L8 6.99286L4.00714 3L3 4.00714L6.99286 8L3 11.9929L4.00714 13L8 9.00714L11.9929 13L13 11.9929L9.00714 8L13 4.00714L11.9929 3Z"
                fill="#9b9b9b" />
            </svg>
          </a>
        </div>

        <div className="blog-grid">
          {blogItems.map((article, i) => (
            <article className="blog-item blog-grid__item">
              <a href="#" className="blog-item__img">
                <img src={article.imageUrl} alt="фото блога" />
              </a>
              <div className="blog-item__content">
                <time className="date date blog-item__date" datetime={article.date.split('.').reverse().join('-')}>{article.date}</time>
                <h5 className="blog-item-title blog-item-title blog-item__title"><a href="#">{article.title}</a></h5>
                <p className="blog-item-text blog-item__text">{article.text}</p>
                <div className="tags">
                  <a href="#" className="tag blog-item__tag">#коллекция</a>
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