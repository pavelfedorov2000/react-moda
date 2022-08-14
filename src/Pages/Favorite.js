import React, { useState } from 'react';
import { AsideFilters, CatalogCardPopup, FavoriteCard, Crumbs, EmptyPage } from '../Components';
import { useSelector, useDispatch } from 'react-redux';
import { removeFavoriteProduct } from '../redux/actions/favorite';

function Favorite({ title, empty, setBasketProduct }) {
    const dispatch = useDispatch();
    const products = useSelector(({ products }) => products.products); // вытаскиваем товары из стора
    const favorites = useSelector(({ favorite }) => favorite.products);

    const handleRemoveFavoriteProduct = (id) => {
        dispatch(removeFavoriteProduct(id));
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

                    <div className="catalog__page">
                        <h1 className="title page__title catalog__title">{title}</h1>

                        <div className="catalog__inner">
                            <AsideFilters />

                            <div className="catalog__body">
                                {favorites.length == 0 ?
                                    <EmptyPage {...empty} />
                                    :
                                    <div className="catalog__cards">
                                        {
                                            favorites.map(product => (
                                                <FavoriteCard setVisibleCatalogCardPopup={setVisibleCatalogCardPopup} onClickRemoveFavorite={handleRemoveFavoriteProduct} key={product.id} {...product} />
                                            ))}
                                    </div>
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </main>

            {
                visibleCatalogCardPopup !== null &&
                <div className="overlay active">
                    <CatalogCardPopup products={products} onCloseCatalogCardPopup={closeCatalogCardPopup} visibleCatalogCardPopup={visibleCatalogCardPopup} setBasketProduct={setBasketProduct} />
                </div>
            }
        </>
    );
}

export default Favorite;