import { AsideFilters, CatalogCard, Crumbs, EmptyBlock } from '../Components';
import { useTypedSelector } from '../hooks/useTypedSelector';
import { Page } from '../interfaces/Route';

const Favorite = ({ title, emptyBlock }: Page) => {
    const { products } = useTypedSelector((state) => state.favoriteReducer);

    return (
        <>
            <main className="page catalog">
                <div className="container">
                    <Crumbs title={title} />

                    <div className="catalog__page">
                        <div className="page__top">
                            <h1 className="title">{title}</h1>
                        </div>

                        <div className="catalog__inner">
                            <AsideFilters />

                            <div className="catalog__body">
                                {products.length === 0 ?
                                    <EmptyBlock {...emptyBlock} />
                                    :
                                    <ul className="catalog-list">
                                        {products.map((product) => (
                                            <li key={product.id}>
                                                <CatalogCard {...product} />
                                            </li>
                                        ))}
                                    </ul>
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
}

export default Favorite;