import React, { useCallback, useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import { Collection, Pagination, AsideFilters, CatalogFilters, CatalogView, CatalogCard, SeoText, Loader, CatalogCardPopup } from '../Components';
import filterIcon from '../assets/images/icons/filter.svg';
//import axios from 'axios';
//import CatalogCardUrl from '../assets/images/content/catalog/01.jpg';
import classNames from 'classnames';
import { setSortBy, setSortPrices, resetSortPrices } from '../redux/actions/filters';
import { fetchProducts } from '../redux/actions/products';

//import { addPizzaToCart } from '../redux/actions/cart';


function Catalog() {

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
    const { sortPrices } = useSelector(({ filters }) => filters); // вытаскиваем диапазон цен сразу через деструктуризацию
    console.log(sortPrices);
    //const cartItems = useSelector(({ cart }) => cart.items); // вытаскиваем пиццы из стора
    //const filterTitles = ['Сортировать', 'Материал', 'Цвет', 'Размер', 'Цена', 'Бренд', 'Стиль', 'Узор'];
    //const [products, setProducts] = useState([]);

    const handleAddProductToFavorite = obj => {
        dispatch({
            type: 'ADD_FAVORITE_PRODUCT',
            payload: obj
        });
    }

    const handleAddProductToCart = obj => {
        dispatch({
            type: 'ADD_PRODUCT_TO_CART',
            payload: obj
        });
    }

    React.useEffect(() => {
        dispatch(fetchProducts(sortBy, sortPrices)); // вернет функцию
        console.log(products);
    }, [sortBy, sortPrices]); // [] = componentDidMout


    const onSelectSortType = React.useCallback((type) => {
        dispatch(setSortBy(type)); // экшн выбор типа сортировки
    }, []);

    const onSelectSortPrices = React.useCallback((from, to) => {
        console.log(from, to);
        dispatch(setSortPrices(from, to)); // экшн выбор диапазона цен
    }, []);

    const onResetSortPrices = React.useCallback(() => {
        dispatch(resetSortPrices()); // экшн выбор диапазона цен
    }, []);
    //const dispatch = useDispatch();


    // логика переключения вида карточек каталога
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

    /* const [visibleCatalogCardPopup, setVisibleCatalogCardPopup] = useState(null);
    console.log(visibleCatalogCardPopup);
    const openCatalogCardPopup = useCallback(id => {
        console.log(visibleCatalogCardPopup);
        setVisibleCatalogCardPopup(id);
    }); */
    const [visibleCatalogCardPopup, setVisibleCatalogCardPopup] = useState(null);
    console.log(visibleCatalogCardPopup);

    const closeCatalogCardPopup = () => {
        setVisibleCatalogCardPopup(null);
    }

    const crumbs = ['Главная', 'Женщинам', 'Одежда', 'Верхняя одежда', 'Пальто'];
    const [home, ...rest] = crumbs;

    return (
        <>
            <main className="page catalog">
                <nav className="breadcrumbs" aria-label="breadcrumbs">
                    <div className="container">
                        <ol className="breadcrumbs__list">
                            <li className="breadcrumbs__item"><Link to="/">{home}</Link></li>
                            {rest.map((crumb, i) => (
                                i === rest.length - 1 ? <li className="breadcrumbs__item"><span>{crumb}</span></li> : <li className="breadcrumbs__item"><Link to="/catalog">{crumb}</Link></li>
                            ))}
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
                                <CatalogFilters activeSortBy={sortBy} sortPrices={sortPrices} sortFilters={sortFilters} onClickSort={onSelectSortType} onResetPrices={onResetSortPrices} onChangePrices={onSelectSortPrices} />
                                <CatalogView onViewChange={toggleCatalogView} views={views} catalogView={catalogView} />
                                <button className="filters-btn" type="button" style={{ backgroundImage: `url(${filterIcon})` }}>Фильтры</button>
                            </div>
                            <div className={classNames('catalog__cards', {
                                'catalog__cards--two-cols': catalogView === 'col'
                            })}>
                                {isLoaded
                                    ? products.map(product => <CatalogCard setVisibleCatalogCardPopup={setVisibleCatalogCardPopup} onClickAddFavorite={handleAddProductToFavorite} favorite={favorite} toggleFavorite={toggleFavorite} key={product.id} {...product} isLoaded={true} />)
                                    : Array(18).fill(0).map((_, index) => <Loader key={`loader-${index}`} />)
                                }
                            </div>
                            <Pagination />
                            <SeoText />
                        </div>
                    </div>
                </div>
            </main>
            {visibleCatalogCardPopup !== null &&
                <div className="overlay active">
                    <CatalogCardPopup products={products} onCloseCatalogCardPopup={closeCatalogCardPopup} visibleCatalogCardPopup={visibleCatalogCardPopup} favorite={favorite} toggleFavorite={toggleFavorite} onClickAddFavorite={handleAddProductToFavorite} onAddCart={handleAddProductToCart} />
                </div>
            }
        </>
    );
}

export default Catalog;