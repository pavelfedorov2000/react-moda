import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Collection, Brands, Actual, PromoSale, IconsSlider, SliderSection, Instagram, SeoText } from '../Components';
import { useParams } from 'react-router-dom';

function Home({ blog }) {

  let { category } = useParams();

  const [products, setProducts] = useState([]);

  React.useEffect(() => {
    axios.get('/products').then(({ data }) => {
      setProducts(data);
    });
  }, []); // [] = componentDidMout */

  const blogPreview = blog.slice(0, 3);

  return (
    <main className="page home-page">
      <div className="container home-page__wrapper">
        <PromoSale />
        <IconsSlider />
        <section className="section">
          <SliderSection products={products} title="Популярные товары" />
        </section>
        <Actual />
        <Brands />
        <section className="section">
          <SliderSection products={products} title="Новинки" />
        </section>
        <Collection />
        <section className="section blog-section">
          <div className="section__title">
            <h2 className="title">Блог</h2>
            <Link to="/blog" className="all-link">
              <span>Смотреть все</span>
              <svg viewBox="0 0 56 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M55.7071 8.70711C56.0976 8.31658 56.0976 7.68342 55.7071 7.29289L49.3431 0.928932C48.9526 0.538408 48.3195 0.538408 47.9289 0.928932C47.5384 1.31946 47.5384 1.95262 47.9289 2.34315L53.5858 8L47.9289 13.6569C47.5384 14.0474 47.5384 14.6805 47.9289 15.0711C48.3195 15.4616 48.9526 15.4616 49.3431 15.0711L55.7071 8.70711ZM0 9H55V7H0V9Z"
                  fill="#C0C0C0" />
              </svg>
            </Link>
          </div>
          <div className="blog-grid">
            {blogPreview.map(article => (
              <article className="blog-item blog-grid__item">
                <a href="#" className="blog-item__img">
                  <img src={article.imageUrl} alt="фото блога" width="724" height="336" />
                </a>
                <div className="blog-item__content">
                  <time className="date blog-item__date" dateTime={article.date.split('.').reverse().join('-')}>{article.date}</time>
                  <a className="blog-item-title blog-item__title" href="#">{article.title}</a>
                  <p className="blog-item-text blog-item__text">
                    {article.text}
                  </p>
                  <div className="tags">
                    {article.tags.map(tag => (
                      <a href="#" className="tag blog-item__tag">{`#${tag}`}</a>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>
        <Instagram />
        <div className="section">
          <SeoText className="home-page__seo-text" />
        </div>
      </div>
    </main>
  );
}

export default Home;