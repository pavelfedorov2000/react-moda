import axios from 'axios';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { AsideBlog, BlogText } from '../Components';

function BlogDetail() {

  let { id } = useParams();

  const [news, setNews] = useState([]);

  React.useEffect(() => {
    axios.get('/blog').then(({ data }) => {
      setNews(data);
    });
  }, []); // [] = componentDidMout */

  const activeNews = news.filter(news => news.id == id)[0];
  //console.log(activeNews);
  const asideNews = news.filter(news => news.id != id).splice(0, 4);
  //console.log(asideNews);

  return (
    <main className="page blog-text">
      {activeNews &&
        <div className="container">
          <nav className="breadcrumbs" aria-label="breadcrumbs">
            <ol className="breadcrumbs__list">
              <li className="breadcrumbs__item">
                <Link to="/">Главная</Link>
              </li>
              <li className="breadcrumbs__item">
                <Link to="/blog">Блог</Link>
              </li>
              <li className="breadcrumbs__item">
                <span>{activeNews.title}</span>
              </li>
            </ol>
          </nav>

          <h1 className="title page__title">{activeNews.title}</h1>

          <div className="blog-text__inner">
            <BlogText {...activeNews} />
            <AsideBlog asideNews={asideNews} />
          </div>
        </div>
      }
    </main>
  );
}

export default BlogDetail;