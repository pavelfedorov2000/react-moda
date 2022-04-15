import React, { useState } from 'react';
//import {  } from '../Components';
import { useSelector, useDispatch } from 'react-redux';

import { Collection, Pagination, AsideFilters, CatalogFilters, CatalogView, CatalogCard, SeoText, Loader, CatalogCardPopup } from '../Components';
import filterIcon from '../assets/images/icons/filter.svg';
//import axios from 'axios';
//import CatalogCardUrl from '../assets/images/content/catalog/01.jpg';
import classNames from 'classnames';
import { setSortBy } from '../redux/actions/filters';
import { fetchProducts } from '../redux/actions/products';
import { removeFavoriteProduct } from '../redux/actions/favorite';
//import { addPizzaToCart } from '../redux/actions/cart';


function Catalog({ generateCrumbs }) {

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
      type: 'popular',
      order: 'desc'
    },
    {
      name: 'новинкам',
      type: 'news',
      order: 'desc'
    },
    {
      name: 'скидкам',
      type: 'discount',
      order: 'desc'
    },
  ];

  const dispatch = useDispatch();
  const products = useSelector(({ products }) => products.products); // вытаскиваем товары из стора
  const isLoaded = useSelector(({ products }) => products.isLoaded); // вытаскиваем состояние загрузки из стора
  const { sortBy } = useSelector(({ filters }) => filters); // вытаскиваем сортировку по из стора сразу через деструктуризацию
  //const cartItems = useSelector(({ cart }) => cart.items); // вытаскиваем пиццы из стора
  //const filterTitles = ['Сортировать', 'Материал', 'Цвет', 'Размер', 'Цена', 'Бренд', 'Стиль', 'Узор'];
  //const [products, setProducts] = useState([]);

  const handleAddProductToFavorite = obj => {
    dispatch({
      type: 'ADD_FAVORITE_PRODUCT',
      payload: obj
    });
  }

  const handleRemoveFavoriteProduct = (id) => {
    dispatch(removeFavoriteProduct(id));
  }

  React.useEffect(() => {
    dispatch(fetchProducts(sortBy)); // вернет функцию
    console.log(products);
  }, [sortBy]); // [] = componentDidMout


  const onSelectSortType = React.useCallback((type) => {
    dispatch(setSortBy(type)); // экшн выбор типа сортировки
  }, []);
  //const dispatch = useDispatch();

  const views = ['grid', 'col'];
  const [catalogView, setCatalogView] = useState(views[0]);
  const toggleCatalogView = () => {
    setCatalogView(views.reverse()[0]);
  }

  const [favorite, setFavorite] = useState(false);

  const toggleFavorite = () => {
    setFavorite(!favorite);
    /* setTimeout(() => {
      e.target.classList.remove(('animated'));
    }, 300); */
  }

  const crumbs = ['Главная', 'Женщинам', 'Одежда', 'Верхняя одежда', 'Пальто'];

  return (
    <>
      <main className="page catalog">
        <nav className="breadcrumbs" aria-label="breadcrumbs">
          <div className="container">
            <ol className="breadcrumbs__list">
              {crumbs.map((crumb, i) => () => generateCrumbs(crumbs, crumb, i))}
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
                <CatalogFilters activeSortBy={sortBy} sortFilters={sortFilters} onClickSort={onSelectSortType} />
                <CatalogView onViewChange={toggleCatalogView} views={views} catalogView={catalogView} />
                <button className="filters-btn" type="button" style={{ backgroundImage: `url(${filterIcon})` }}>Фильтры</button>
              </div>
              <div className={classNames('catalog__cards', {
                'catalog__cards--two-cols': catalogView === 'col'
              })}>
                {isLoaded
                  ? products.map(product => <CatalogCard onClickRemoveFavorite={handleRemoveFavoriteProduct} onClickAddFavorite={handleAddProductToFavorite} favorite={favorite} toggleFavorite={toggleFavorite} key={product.id} {...product} isLoaded={true} />)
                  : Array(18).fill(0).map((_, index) => <Loader key={`loader-${index}`} />)
                }
              </div>
              <Pagination />
              <SeoText />
            </div>
          </div>
        </div>
      </main>
      {
        products.map(product => <CatalogCardPopup key={product.id} {...product} favorite={favorite} toggleFavorite={toggleFavorite} />)
      }
    </>
  );
}

export default Catalog;