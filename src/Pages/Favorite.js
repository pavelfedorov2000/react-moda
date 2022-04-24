import React from 'react';
import { Link } from 'react-router-dom';
import { AsideFilters, CatalogFilters, CatalogView, CatalogCard, FavoriteCard } from '../Components';
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
    return (
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
                                            <FavoriteCard key={product.id} {...product} onClickRemoveFavorite={handleRemoveFavoriteProduct} />
                                        ))}
                                </div>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default Favorite;