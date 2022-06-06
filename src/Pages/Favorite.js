import React, { useState } from 'react';
import { AsideFilters, CatalogCard, CatalogFilters, CatalogView, CatalogCardPopup, FavoriteCard } from '../Components';
import { useSelector, useDispatch } from 'react-redux';
import { removeFavoriteProduct } from '../redux/actions/favorite';
import emptyIcon from '../assets/images/icons/empty-catalog.svg';

function Favorite({ generateCrumbs }) {
    const dispatch = useDispatch();
    const favorites = useSelector(({ favorite }) => favorite.products);
    const crumbs = ['Главная', 'Избранные'];
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
            <main class="page catalog">
                <div class="container">
                    <nav class="breadcrumbs" aria-label="breadcrumbs">
                        <ol className="breadcrumbs__list">
                            {crumbs.map((crumb, i) => () => generateCrumbs(crumbs, crumb, i))}
                        </ol>
                    </nav>
                    <div class="catalog__page">
                        <h1 class="title page__title catalog__title">Избранные товары</h1>
                        <div class="catalog__inner">
                            <AsideFilters />
                            <div class="catalog__body">
                                <div class="catalog__filters">
                                    <CatalogFilters />
                                    <CatalogView />
                                    <button class="filters-btn" type="button">Фильтры</button>
                                </div>
                                {favorites.length == 0 ?
                                    <div class="empty-page catalog__empty">
                                        <img class="empty-page__img" src={emptyIcon} alt="иконка"
                                            width="100" height="100" />
                                        <div class="empty-page__text">Нет актуальных товаров</div>
                                    </div>
                                    :
                                    <div class="catalog__cards">
                                        {
                                            favorites.map(product => (
                                                <FavoriteCard setVisibleCatalogCardPopup={setVisibleCatalogCardPopup} onClickAddFavorite={handleAddProductToFavorite} onClickRemoveFavorite={handleRemoveFavoriteProduct} key={product.id} {...product} />
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
                    <CatalogCardPopup products={favorites} onCloseCatalogCardPopup={closeCatalogCardPopup} visibleCatalogCardPopup={visibleCatalogCardPopup} onClickAddFavorite={handleAddProductToFavorite} onAddCart={handleAddProductToCart} />
                </div>
            }
        </>
    );
}

export default Favorite;