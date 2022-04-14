import React, { useState } from 'react';
//import {  } from '../Components';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { Collection, Pagination, AsideFilters, CatalogFilters, CatalogView, CatalogCard, SeoText, Loader } from '../Components';
import filterIcon from '../assets/images/icons/filter.svg';
//import axios from 'axios';
import CatalogCardUrl from '../assets/images/content/catalog/01.jpg';
import classNames from 'classnames';
import { setSortBy } from '../redux/actions/filters';
import { fetchProducts } from '../redux/actions/products';
//import { addPizzaToCart } from '../redux/actions/cart';

function Catalog() {

  const sizes = [42, 44, 46, 48, 50, 52];

  const sortFilters = [
    {
      name: 'возрастанию цены',
      type: 'price',
      order: 'asc'
    },
    {
      name: 'убыванию цены',
      type: 'price',
      order: 'desc'
    },
    {
      name: 'популярности',
      type: 'price',
      order: 'desc'
    },
    {
      name: 'новинкам',
      type: 'price',
      order: 'desc'
    },
    {
      name: 'скидкам',
      type: 'price',
      order: 'desc'
    },
  ];

  const dispatch = useDispatch();
  const products = useSelector(({ products }) => products.products); // вытаскиваем пиццы из стора
  const isLoaded = useSelector(({ products }) => products.isLoaded); // вытаскиваем состояние загрузки из стора
  const { sortBy } = useSelector(({ filters }) => filters); // вытаскиваем категории и сортировку по из стора сразу через деструктуризацию
  //const cartItems = useSelector(({ cart }) => cart.items); // вытаскиваем пиццы из стора
  //const filterTitles = ['Сортировать', 'Материал', 'Цвет', 'Размер', 'Цена', 'Бренд', 'Стиль', 'Узор'];
  //const [products, setProducts] = useState([]);


  const onSelectSortType = React.useCallback((type) => {
    dispatch(setSortBy(type)); // экшн выбор типа сортировки
  }, []);


  const views = ['grid', 'col'];
  const [catalogView, setCatalogView] = useState(views[0]);
  const toggleCatalogView = () => {
    setCatalogView(views.reverse()[0]);
  }

  /* const handleOutsideClick = (event) => {
    const path = event.path || (event.composedPath && event.composedPath());
    if (!path.includes(sortRef.current)) {
      setVisibleSelect(false);
    }
  }

  useEffect(() => {
    document.body.addEventListener('click', handleOutsideClick);
  }, []); */


  React.useEffect(() => {
    dispatch(fetchProducts(sortBy)); // вернет функцию
    /* axios.get('http://localhost:3001/pizzas').then(({ data }) => {
        dispatch(setPizzas(data));
        //setPizzas(data.pizzas);
    }); */
    //fetch('db.json')
    //.then((response) => response.json())
    //.then(json => setPizzas(json.pizzas));
  }, [sortBy]); // [] = componentDidMout

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
              <CatalogFilters activeSortBy={sortBy.type} sortFilters={sortFilters} onClickSort={onSelectSortType} />
              <CatalogView onViewChange={toggleCatalogView} views={views} catalogView={catalogView} />
              <button className="filters-btn" type="button" style={{ backgroundImage: `url(${filterIcon})` }}>Фильтры</button>
            </div>
            <div className={classNames('catalog__cards', {
              'catalog__cards--two-cols': catalogView === 'col'
            })}>
              {isLoaded
                ? products.map(product => <CatalogCard key={product.id} {...product} isLoaded={true} imageUrl={CatalogCardUrl} />)
                : Array(18).fill(0).map((_, index) => <Loader key={`loader-${index}`} />)
              }
            </div>
            <Pagination />
            <SeoText />
          </div>
        </div>
      </div>
    </main>
  );
}

export default Catalog;