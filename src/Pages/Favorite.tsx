import { AsideFilters, CatalogCard, CatalogList, ProductPopup } from '../components';
import { Crumbs, EmptyBlock } from '../components/Layout';
import PageTop from '../components/Layout/PageTop';
import { useTypedSelector } from '../hooks/useTypedSelector';
import { Page } from '../interfaces/Route';

const Favorite = ({ title, emptyBlock }: Page) => {
    const { products } = useTypedSelector((state) => state.favoriteReducer);
    const { popupProduct } = useTypedSelector((state) => state.productReducer);

    return (
        <>
            <main className="page catalog">
                <div className="container">
                    <Crumbs title={title} />

                    <div className="catalog__page">
                        <PageTop title={title} />

                        <div className="catalog__inner">
                            <AsideFilters />

                            <div className="catalog__body">
                                {products.length === 0 ?
                                    <EmptyBlock {...emptyBlock} />
                                    :
                                    <CatalogList products={products} />
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

export default Favorite;