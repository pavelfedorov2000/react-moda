import React, { useState } from 'react';
//import {  } from '../Components';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { Collection, Pagination, AsideFilters, CatalogFilters, CatalogView, CatalogCard, SeoText, Loader, CatalogCardPopup } from '../Components';
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
    const products = useSelector(({ products }) => products.products); // вытаскиваем пиццы из стора
    const isLoaded = useSelector(({ products }) => products.isLoaded); // вытаскиваем состояние загрузки из стора
    const { sortBy } = useSelector(({ filters }) => filters); // вытаскиваем категории и сортировку по из стора сразу через деструктуризацию
    //const cartItems = useSelector(({ cart }) => cart.items); // вытаскиваем пиццы из стора
    //const filterTitles = ['Сортировать', 'Материал', 'Цвет', 'Размер', 'Цена', 'Бренд', 'Стиль', 'Узор'];
    //const [products, setProducts] = useState([]);

    React.useEffect(() => {
        dispatch(fetchProducts(sortBy)); // вернет функцию
        console.log(products);
        /* axios.get('http://localhost:3001/pizzas').then(({ data }) => {
            dispatch(setPizzas(data));
            //setPizzas(data.pizzas);
        }); */
        //fetch('db.json')
        //.then((response) => response.json())
        //.then(json => setPizzas(json.pizzas));
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

    /* const handleOutsideClick = (event) => {
      const path = event.path || (event.composedPath && event.composedPath());
      if (!path.includes(sortRef.current)) {
        setVisibleSelect(false);
      }
    }
  
    useEffect(() => {
      document.body.addEventListener('click', handleOutsideClick);
    }, []); */

    const crumbs = ['Главная', 'Женщинам', 'Одежда', 'Верхняя одежда', 'Пальто'];
    function generateCrumbs(crumbs, crumb, i) {
        switch (i) {
            case 0:
                return <Link className="breadcrumbs__item" to="/" exact>{crumb}</Link>
            case crumbs.length - 1:
                return <span className="breadcrumbs__item">{crumb}</span>
            default:
                return <a className="breadcrumbs__item" href="#">{crumb}</a>
        }
    }

    return (
        <>
            <main className="page catalog">
                <nav className="breadcrumbs" aria-label="breadcrumbs">
                    <div className="container">
                        <ol className="breadcrumbs__list">
                            {crumbs.map((crumb, i) => generateCrumbs(crumbs, crumb, i))}
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
            <CatalogCardPopup products={products} imageUrl={CatalogCardUrl} />
        </>
    );
}

export default Catalog;