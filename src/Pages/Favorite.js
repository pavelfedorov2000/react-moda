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

    // Экшн на добавление в избранное
    const handleAddProductToFavorite = obj => {
        dispatch({
            type: 'ADD_FAVORITE_PRODUCT',
            payload: obj
        });
    }

    // Экшн на добавление в корзину
    const handleAddProductToCart = obj => {
        dispatch({
            type: 'ADD_PRODUCT_TO_CART',
            payload: obj
        });
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
                                                <FavoriteCard onClickAddFavorite={handleAddProductToFavorite} onClickRemoveFavorite={handleRemoveFavoriteProduct} key={product.id} {...product} />
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
                    <CatalogCardPopup products={products} onCloseCatalogCardPopup={closeCatalogCardPopup} onClickAddFavorite={handleAddProductToFavorite} onClickRemoveFavorite={handleRemoveFavoriteProduct} onAddCart={handleAddProductToCart} visibleCatalogCardPopup={visibleCatalogCardPopup} setBasketProduct={setBasketProduct} />
                </div>
            }
        </>
    );
}

export default Favorite;