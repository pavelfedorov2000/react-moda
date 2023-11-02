import { useState } from 'react';
import { PromoCollection, AsideFilters, CatalogFilters, CatalogView, CatalogCard, SeoText, Loader, FiltersButton, ProductPopup, CatalogList } from '../components';
import classNames from 'classnames';
import { useEffect } from 'react';
import { CatalogViewOption, CatalogViews } from '../enums/CatalogView';
import { useActions } from '../hooks/useActions';
import { Page } from '../interfaces/Route';
import { useTypedSelector } from '../hooks/useTypedSelector';
import PageTop from '../components/Layout/PageTop';
import { Crumbs, EmptyBlock, Overlay } from '../components/Layout';
import { ClassName } from '../enums/ClassName';
import { generatePageClassName } from '../utils/generatePageClassName';
import { fakeArray } from '../utils/fakeArray';

const mainClass = 'catalog';

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
            <main className={generatePageClassName(mainClass)}>
                <div className={ClassName.Container}>
                    <Crumbs title={title} />

                    <PromoCollection />

                    <div className={`${mainClass}__page`}>
                        <PageTop title={title} />

                        <div className={`${mainClass}__inner`}>
                            <AsideFilters />

                            <div className={`${mainClass}__body`}>
                                <div className={`${mainClass}__filters`}>
                                    <CatalogFilters />
                                    <CatalogView onChange={toggleCatalogView} view={catalogView} />
                                    <FiltersButton />
                                </div>

                                {products.length !== 0 ?
                                    <>
                                        {
                                            isLoaded ?
                                                <CatalogList products={products} catalogView={catalogView} />
                                                :
                                                <div className={classNames('catalog-list', {
                                                    'catalog-list--two-cols': catalogView === CatalogViewOption.COL
                                                })}>
                                                    {fakeArray(18).map((_, index) => <Loader key={index} />)}
                                                </div>
                                        }
                                        <SeoText className={`${mainClass}__seo-text`} />
                                    </>
                                    :
                                    <EmptyBlock {...emptyBlock} />
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </main>

            <Overlay isActive={popupProduct}>
                {popupProduct && <ProductPopup {...popupProduct} />}
            </Overlay>
        </>
    );
}

export default Catalog;