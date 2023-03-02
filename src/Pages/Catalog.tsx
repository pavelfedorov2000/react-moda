import { useState } from 'react';
import { PromoCollection, AsideFilters, CatalogFilters, CatalogView, CatalogCard, SeoText, Loader, FiltersButton, ProductPopup } from '../Components';
import classNames from 'classnames';
import { useEffect } from 'react';
import { CatalogViewOption, CatalogViews } from '../enums/CatalogView';
import { useActions } from '../hooks/useActions';
import { Page } from '../interfaces/Route';
import { useTypedSelector } from '../hooks/useTypedSelector';
import PageTop from '../Components/Layout/PageTop';
import { Crumbs, EmptyBlock } from '../Components/Layout';

const Catalog = ({ title, emptyBlock }: Page) => {
    const { products, isLoaded } = useTypedSelector((state) => state.productsReducer);
    const { sortBy, sortPrices, sortBrands, sortColors, sortSizes, sortStyles } = useTypedSelector((state) => state.filtersReducer);
    const { popupProduct } = useTypedSelector((state) => state.productReducer);

    const { fetchProducts } = useActions();

    const [catalogView, setCatalogView] = useState(CatalogViews[0]);
    const toggleCatalogView = () => {
        setCatalogView(CatalogViews.reverse()[0]);
    }

    useEffect(() => {
        fetchProducts(sortBy, sortPrices, sortColors, sortSizes, sortBrands, sortStyles);
    }, [sortBy, sortPrices, sortColors, sortBrands, sortStyles, sortSizes]);

    return (
        <>
            <main className="page catalog">
                <div className="container">
                    <Crumbs title={title} />

                    <PromoCollection />

                    <div className="catalog__page">
                        <PageTop title={title} />

                        <div className="catalog__inner">
                            <AsideFilters />

                            <div className="catalog__body">
                                <div className="catalog__filters">
                                    <CatalogFilters />
                                    <CatalogView onChange={toggleCatalogView} view={catalogView} />
                                    <FiltersButton />
                                </div>

                                {products.length !== 0 ?
                                    <>
                                        {
                                            isLoaded ?
                                                <ul className={classNames('catalog-list', {
                                                    'catalog-list--two-cols': catalogView === CatalogViewOption.COL
                                                })}>
                                                    {
                                                        products.map(product => (
                                                            <li key={product.id}>
                                                                <CatalogCard {...product} />
                                                            </li>
                                                        ))
                                                    }
                                                </ul>
                                                :
                                                <div className={classNames('catalog-list', {
                                                    'catalog-list--two-cols': catalogView === CatalogViewOption.COL
                                                })}>
                                                    {Array(18).fill(0).map((_, index) => <Loader key={index} />)}
                                                </div>
                                        }
                                        <SeoText className="catalog__seo-text" />
                                    </>
                                    :
                                    <EmptyBlock {...emptyBlock} />
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </main>

            {popupProduct &&
                <div className="overlay active">
                    <ProductPopup {...popupProduct} />
                </div>
            }
        </>
    );
}

export default Catalog;