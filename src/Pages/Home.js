import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Collection, Brands, Actual, PromoSale, IconsSlider, SliderSection, Instagram } from '../Components';
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
    console.log(blogPreview);

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
                            <article class="blog-item blog-grid__item animate__animated animate__fadeInLeft wow"
                                data-wow-duration="1.5s">
                                <a href="#" class="blog-item__img">
                                    <img class="lazy" data-src="assets/images/content/blog/01.jpg"
                                        src={article.imageUrl} alt="фото блога" width="724" height="336" />
                                </a>
                                <div class="blog-item__content">
                                    <time class="date blog-item__date" datetime={article.date.split('.').reverse().join('-')}>{article.date}</time>
                                    <a class="blog-item-title blog-item__title" href="#">{article.title}</a>
                                    <p class="blog-item-text blog-item__text">
                                        {article.text}
                                    </p>
                                    <div class="tags">
                                        {article.tags.map(tag => (
                                            <a href="#" class="tag blog-item__tag">{`#${tag}`}</a>
                                        ))}
                                    </div>
                                </div>
                            </article>
                        ))}
                    </div>
                </section>
                <Instagram />
                <div className="section">
                    <div className="seo-text home-page__seo-text">
                        <p>
                            Далеко-далеко за словесными горами в стране гласных и согласных живут рыбные тексты. Вдали
                            от
                            всех живут они
                            в
                            буквенных домах на берегу Семантика большого языкового океана. Маленький ручеек Даль журчит
                            по
                            всей стране и
                            обеспечивает ее всеми необходимыми правилами. Эта парадигматическая страна, в которой
                            жаренные
                            члены
                            предложения залетают прямо в рот.
                        </p>
                        <p>
                            Даже всемогущая пунктуация не имеет власти над рыбными текстами, ведущими безорфографичный
                            образ
                            жизни.
                            Однажды одна маленькая строчка рыбного текста по имени Lorem ipsum решила выйти в большой
                            мир
                            грамматики.
                            Великий Оксмокс предупреждал ее о злых запятых, диких знаках вопроса и коварных точках с
                            запятой, но текст
                            не
                            дал сбить себя с толку.
                        </p>
                        <p>
                            Он собрал семь своих заглавных букв, подпоясал инициал за пояс и пустился в дорогу.
                            Взобравшись
                            на первую
                            вершину курсивных гор, бросил он последний взгляд назад, на силуэт своего родного города
                            Буквоград, на
                            заголовок деревни Алфавит и на подзаголовок своего переулка Строчка
                        </p>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default Home;