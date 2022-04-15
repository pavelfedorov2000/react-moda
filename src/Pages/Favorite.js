import React from 'react';
import { Link } from 'react-router-dom';
import { AsideFilters, CatalogFilters, CatalogView, CatalogCard, Loader, CatalogCardPopup } from '../Components';
import { useSelector, useDispatch } from 'react-redux';

function Favorite({ generateCrumbs }) {
  const favorites = useSelector(({ favorite }) => favorite.products);
  const crumbs = ['Главная', 'Избранные'];
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
              <div class="catalog__cards">
                {favorites.map(product => (
                  <CatalogCard key={product.id} {...product} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Favorite;