import axios from 'axios';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { BlogItem } from '../Components';

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
          {blogItems.map(article => (
            <BlogItem key={article.id} {...article} path="blog-detail" className="blog-grid__item" />
          ))}
        </div>
      </div>
    </main>
  );
}

export default Blog;