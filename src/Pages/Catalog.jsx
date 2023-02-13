import { useCallback, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { PromoCollection, AsideFilters, CatalogFilters, CatalogView, CatalogCard, SeoText, Loader, CatalogCardPopup, Crumbs, FiltersButton } from '../Components';
import classNames from 'classnames';
import { setSortBy, setSortPrices, resetSortPrices, setSortColors, setSortSizes, setSortBrands, setSortStyles, resetSortColors, resetSortBrands, resetSortStyles, resetSortSizes, resetFilters } from '../redux/actions/filters';
import { fetchProducts } from '../redux/actions/products';
import { CatalogFiltersContext } from '../context';
import { useEffect } from 'react';

const sortFilters = [{
    name: 'возрастанию цены',
    type: 'price',
    order: 'asc'
}, {
    name: 'убыванию цены',
    type: 'price',
    order: 'desc'
}, {
    name: 'популярности',
    type: 'popular',
    order: 'desc'
}, {
    name: 'новинкам',
    type: 'newProduct',
    order: 'desc'
}, {
    name: 'скидкам',
    type: 'discount',
    order: 'desc'
}];

const views = ['grid', 'col'];

const Catalog = ({ title }) => {
    const dispatch = useDispatch();
    const products = useSelector(({ products }) => products.products);
    const isLoaded = useSelector(({ products }) => products.isLoaded);
    const { sortBy, sortPrices, sortColors, sortSizes, sortBrands, sortStyles } = useSelector(({ filters }) => filters);

    useEffect(() => {
        dispatch(fetchProducts(sortBy, sortPrices, sortColors, sortSizes, sortBrands, sortStyles));
    }, [sortBy, sortPrices, sortColors, sortBrands, sortStyles, sortSizes]);


    const onSelectSortType = useCallback((type) => {
        dispatch(setSortBy(type));
    }, []);

    const onSelectSortPrices = useCallback((from, to) => {
        dispatch(setSortPrices(from, to));
    }, []);

    const onSelectSortColors = useCallback((arr) => {
        dispatch(setSortColors(arr));
    }, []);

    const onSelectSortBrands = useCallback((arr) => {
        dispatch(setSortBrands(arr));
    }, []);

    const onSelectSortSizes = useCallback((arr) => {
        dispatch(setSortSizes(arr));
    }, []);

    const onSelectSortStyles = useCallback((arr) => {
        dispatch(setSortStyles(arr));
    }, []);

    // Сброс фильтров
    const onResetSortPrices = useCallback(() => {
        dispatch(resetSortPrices());
    }, []);

    const onResetSortColors = useCallback(() => {
        dispatch(resetSortColors());
    }, []);

    const onResetSortBrands = useCallback(() => {
        dispatch(resetSortBrands());
    }, []);

    const onResetSortStyles = useCallback(() => {
        dispatch(resetSortStyles());
    }, []);

    const onResetSortSizes = useCallback(() => {
        dispatch(resetSortSizes());
    }, []);

    const onResetFilters = useCallback(() => {
        dispatch(resetFilters());
    }, []);

    const [catalogView, setCatalogView] = useState(views[0]);
    const toggleCatalogView = () => {
        setCatalogView(views.reverse()[0]);
    }

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

                    <PromoCollection />

                    <div className="catalog__page">
                        <div className="page__top">
                            <h1 className="title">{title}</h1>
                        </div>

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
                                    <FiltersButton onClick={onOpenFilters} isExpanded={visibleFilters} />
                                </div>

                                {isLoaded
                                    ? <ul className={classNames('catalog-list', {
                                        'catalog-list--two-cols': catalogView === 'col'
                                    })}>
                                        {
                                            products.map(product => (
                                                <li key={product.id}>
                                                    <CatalogCard {...product} isLoaded={true} />
                                                </li>
                                            ))
                                        }
                                    </ul>
                                    :
                                    <div className={classNames('catalog-list', {
                                        'catalog-list--two-cols': catalogView === 'col'
                                    })}>
                                        {Array(18).fill(0).map((_, index) => <Loader key={index} />)}
                                    </div>
                                }

                                <SeoText className="catalog__seo-text" />
                            </div>
                        </div>
                    </div>
                </div>
            </main>

            {visibleCatalogCardPopup &&
                <div className="overlay active">
                    <CatalogCardPopup products={products} visibleCatalogCardPopup={visibleCatalogCardPopup} closeCatalogCardPopup={closeCatalogCardPopup} />
                </div>
            }
        </>
    );
}

export default Catalog;