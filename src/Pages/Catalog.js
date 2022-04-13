import React, { useState } from 'react';
//import {  } from '../Components';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { Collection, Pagination, AsideFilters, CatalogFilters, CatalogView, CatalogCard } from '../Components';
import filterIcon from '../assets/images/icons/filter.svg';
import axios from 'axios';
import CatalogCardUrl from '../assets/images/content/catalog/01.jpg';
//import { setCategory, setSortBy } from '../redux/actions/filters';
//import { fetchPizzas } from '../redux/actions/pizzas';
//import { addPizzaToCart } from '../redux/actions/cart';

function Catalog() {


    //const dispatch = useDispatch();
    //const pizzas = useSelector(({ pizzas }) => pizzas.pizzas); // вытаскиваем пиццы из стора
    //const isLoaded = useSelector(({ pizzas }) => pizzas.isLoaded); // вытаскиваем состояние загрузки из стора
    //const { category, sortBy } = useSelector(({ filters }) => filters); // вытаскиваем категории и сортировку по из стора сразу через деструктуризацию
    //const cartItems = useSelector(({ cart }) => cart.items); // вытаскиваем пиццы из стора
    const [products, setProducts] = useState([]);


    React.useEffect(() => {
        //dispatch(fetchProducts(sortBy, category)); // вернет функцию
        axios.get('http://localhost:3001/products').then(({ data }) => {
            //dispatch(setPizzas(data));
            setProducts(data);
            //console.log(data);
            //});
        })
    }, []); // [] = componentDidMout // category, sortBy

    return (
        <main className="page catalog">
            <nav className="breadcrumbs" aria-label="breadcrumbs">
                <div className="container">
                    <ol className="breadcrumbs__list">
                        <li className="breadcrumbs__item">
                            <Link to="/" exact>Главная</Link>
                        </li>
                        <li className="breadcrumbs__item">
                            <a href="#">Женщинам</a>
                        </li>
                        <li className="breadcrumbs__item">
                            <a href="#">Одежда</a>
                        </li>
                        <li className="breadcrumbs__item">
                            <a href="#">Верхняя одежда</a>
                        </li>
                        <li className="breadcrumbs__item">
                            <span>Пальто</span>
                        </li>
                    </ol>
                </div>
            </nav>
            <Collection />
            <div className="catalog__page container">
                <h1 className="title page__title catalog__title">Женские пальто</h1>
                <div className="catalog__inner">
                    <AsideFilters />
                    <div className="catalog__body">
                        <div className="catalog__filters">
                            <CatalogFilters />
                            <CatalogView />
                            <button className="filters-btn" type="button" style={{ backgroundImage: `url(${filterIcon})` }}>Фильтры</button>
                        </div>
                        <div className="catalog__cards">
                            {products && products.map((product, i) => (
                                //`../assets/images/content/catalog/0${i + 1}.jpg`
                                <CatalogCard key={product.id} {...product} imageUrl={CatalogCardUrl} />
                            ))}
                        </div>
                        <Pagination />
                        <div className="seo-text catalog__seo-text">
                            <p>
                                Далеко-далеко за словесными горами в стране гласных и согласных живут рыбные тексты.
                                Вдали
                                от
                                всех живут они
                                в
                                буквенных домах на берегу Семантика большого языкового океана. Маленький ручеек Даль
                                журчит
                                по
                                всей стране и
                                обеспечивает ее всеми необходимыми правилами. Эта парадигматическая страна, в которой
                                жаренные
                                члены
                                предложения залетают прямо в рот.
                            </p>
                            <p>
                                Даже всемогущая пунктуация не имеет власти над рыбными текстами, ведущими
                                безорфографичный
                                образ
                                жизни.
                                Однажды одна маленькая строчка рыбного текста по имени Lorem ipsum решила выйти в
                                большой
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
            </div>
        </main>
    );
}

export default Catalog;