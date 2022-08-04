import React, { useCallback, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Collection, AsideFilters, CatalogFilters, CatalogView, CatalogCard, SeoText, Loader, CatalogCardPopup, Crumbs } from '../Components';
import filterIcon from '../assets/images/icons/filter.svg';
import classNames from 'classnames';
import { setSortBy, setSortPrices, resetSortPrices, setSortColors, setSortSizes, setSortBrands, setSortStyles, resetSortColors, resetSortBrands, resetSortStyles, resetSortSizes, resetFilters } from '../redux/actions/filters';
import { fetchProducts } from '../redux/actions/products';
import { CatalogFiltersContext } from '../context';


function Catalog({ title }) {

    // Фильтры
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
            type: 'newProduct',
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
    //console.log(products);
    const isLoaded = useSelector(({ products }) => products.isLoaded); // вытаскиваем состояние загрузки из стора
    const { sortBy, sortPrices, sortColors, sortSizes, sortBrands, sortStyles } = useSelector(({ filters }) => filters); // вытаскиваем сортировку по из стора сразу через деструктуризацию

    React.useEffect(() => {
        dispatch(fetchProducts(sortBy, sortPrices, sortColors, sortSizes, sortBrands, sortStyles)); // вернет функцию
        //console.log(products);
    }, [sortBy, sortPrices, sortColors, sortBrands, sortStyles, sortSizes]); // [] = componentDidMout


    const onSelectSortType = useCallback((type) => {
        dispatch(setSortBy(type)); // экшн выбор типа сортировки
    }, []);

    const onSelectSortPrices = useCallback((from, to) => {
        //console.log(from, to);
        dispatch(setSortPrices(from, to)); // экшн выбор диапазона цен
    }, []);

    const onSelectSortColors = useCallback((arr) => {
        dispatch(setSortColors(arr)); // экшн выбор цветов
    }, []);

    const onSelectSortBrands = useCallback((arr) => {
        dispatch(setSortBrands(arr)); // экшн выбор брендов
    }, []);

    const onSelectSortSizes = useCallback((arr) => {
        dispatch(setSortSizes(arr)); // экшн выбор размеров
    }, []);

    const onSelectSortStyles = useCallback((arr) => {
        dispatch(setSortStyles(arr)); // экшн выбор стиля
    }, []);

    // Сброс фильтров
    const onResetSortPrices = useCallback(() => {
        dispatch(resetSortPrices()); // экшн сброса диапазона цен
    }, []);

    const onResetSortColors = useCallback(() => {
        dispatch(resetSortColors()); // экшн сброса цвета
    }, []);

    const onResetSortBrands = useCallback(() => {
        dispatch(resetSortBrands()); // экшн сброса брендов
    }, []);

    const onResetSortStyles = useCallback(() => {
        dispatch(resetSortStyles()); // экшн сброса стиля
    }, []);

    const onResetSortSizes = useCallback(() => {
        dispatch(resetSortSizes()); // экшн сброса размеров
    }, []);

    const onResetFilters = useCallback(() => {
        dispatch(resetFilters()); // экшн сброса размеров
    }, []);


    // логика переключения вида карточек каталога
    const views = ['grid', 'col'];
    const [catalogView, setCatalogView] = useState(views[0]);
    const toggleCatalogView = () => {
        setCatalogView(views.reverse()[0]);
    }

    // Стейт видимости фильтров
    const [visibleFilters, setVisibleFilters] = useState(false);
    const onOpenFilters = () => {
        setVisibleFilters(true);
    }
    const onCloseFilters = () => {
        setVisibleFilters(false);
    }

    const [visibleCatalogCardPopup, setVisibleCatalogCardPopup] = useState(null);

    const closeCatalogCardPopup = () => {
        setVisibleCatalogCardPopup(null);
    }

    return (
        <>
            <main className="page catalog">
                <div className="container">
                    <Crumbs title={title} />

                    <Collection />

                    <div className="catalog__page">
                        <h1 className="title page__title catalog__title">{title}</h1>

                        <div className="catalog__inner">
                            <AsideFilters />

                            <div className="catalog__body">
                                <div className="catalog__filters">
                                    <CatalogFiltersContext.Provider value={{
                                        sortBy,
                                        sortPrices,
                                        sortFilters,
                                        sortColors,
                                        sortSizes,
                                        sortBrands,
                                        sortStyles,
                                        onSelectSortType,
                                        onSelectSortPrices,
                                        onSelectSortColors,
                                        onSelectSortBrands,
                                        onSelectSortSizes,
                                        onSelectSortStyles,
                                        onResetSortPrices,
                                        onResetSortColors,
                                        onResetSortBrands,
                                        onResetSortStyles,
                                        onResetSortSizes,
                                        onResetFilters
                                    }}>
                                        <CatalogFilters visibleFilters={visibleFilters} onCloseFilters={onCloseFilters} />
                                    </CatalogFiltersContext.Provider>

                                    <CatalogView onViewChange={toggleCatalogView} views={views} catalogView={catalogView} />
                                    <button onClick={onOpenFilters} className="filters-btn" type="button" style={{ backgroundImage: `url(${filterIcon})` }}>Фильтры</button>
                                </div>

                                <div className={classNames('catalog__cards', {
                                    'catalog__cards--two-cols': catalogView === 'col'
                                })}>
                                    {isLoaded
                                        ? products.map(product => <CatalogCard key={product.id} {...product} isLoaded={true} setVisibleCatalogCardPopup={setVisibleCatalogCardPopup} />)
                                        : Array(18).fill(0).map((_, index) => <Loader key={`loader-${index}`} />)
                                    }
                                </div>

                                <SeoText className="catalog__seo-text" />
                            </div>
                        </div>
                    </div>
                </div>
            </main>

            {visibleCatalogCardPopup !== null &&
                <div className="overlay active">
                    <CatalogCardPopup products={products} visibleCatalogCardPopup={visibleCatalogCardPopup} closeCatalogCardPopup={closeCatalogCardPopup} />
                </div>
            }
        </>
    );
}

export default Catalog;