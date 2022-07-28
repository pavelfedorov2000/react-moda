import React, { useState } from 'react';
import { AsideFilters, CatalogFilters, CatalogView, CatalogCardPopup, FavoriteCard } from '../Components';
import { useSelector, useDispatch } from 'react-redux';
import { removeFavoriteProduct } from '../redux/actions/favorite';
import emptyIcon from '../assets/images/icons/empty-catalog.svg';

function Favorite({ generateCrumbs, setBasketProduct }) {
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

    const crumbs = ['Главная', 'Избранные'];

    return (
        <>
            <main className="page catalog">
                <div className="container">
                    <nav className="breadcrumbs" aria-label="breadcrumbs">
                        <ol className="breadcrumbs__list">
                            {crumbs.map((crumb, i) => generateCrumbs(crumb, i))}
                        </ol>
                    </nav>
                    <div className="catalog__page">
                        <h1 className="title page__title catalog__title">{`${crumbs[1]} товары`}</h1>
                        <div className="catalog__inner">
                            <AsideFilters />
                            <div className="catalog__body">
                                {favorites.length == 0 ?
                                    <div className="empty-page catalog__empty">
                                        <img className="empty-page__img" src={emptyIcon} alt="иконка"
                                            width="100" height="100" />
                                        <div className="empty-page__text">Нет актуальных товаров</div>
                                    </div>
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