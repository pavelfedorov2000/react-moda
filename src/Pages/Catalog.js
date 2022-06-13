import React, { useCallback, useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { Collection, AsideFilters, CatalogFilters, CatalogView, CatalogCard, SeoText, Loader, CatalogCardPopup } from '../Components';
import filterIcon from '../assets/images/icons/filter.svg';
import classNames from 'classnames';
import { setSortBy, setSortPrices, resetSortPrices, setSortColors, setSortSizes, setSortBrands, setSortStyles, resetSortColors, resetSortBrands, resetSortStyles, resetSortSizes, resetFilters } from '../redux/actions/filters';
import { fetchProducts } from '../redux/actions/products';
import { removeFavoriteProduct } from '../redux/actions/favorite';


function Catalog({ basketProduct, setBasketProduct }) {

  // Фильтры
  const sortFilters = [
    {
      name: 'возрастанию цены',
      type: 'price',
      order: 'asc'
    },
    {
      name: 'убыванию цены',
      type: 'price',
      order: 'desc'
    },
    {
      name: 'популярности',
      type: 'popular',
      order: 'desc'
    },
    {
      name: 'новинкам',
      type: 'newProduct',
      order: 'desc'
    },
    {
      name: 'скидкам',
      type: 'discount',
      order: 'desc'
    },
  ];

  const dispatch = useDispatch();
  const products = useSelector(({ products }) => products.products); // вытаскиваем товары из стора
  //console.log(products);
  const isLoaded = useSelector(({ products }) => products.isLoaded); // вытаскиваем состояние загрузки из стора
  const { sortBy, sortPrices, sortColors, sortSizes, sortBrands, sortStyles } = useSelector(({ filters }) => filters); // вытаскиваем сортировку по из стора сразу через деструктуризацию

  // Экшн на добавление в избранное
  const handleAddProductToFavorite = obj => {
    dispatch({
      type: 'ADD_FAVORITE_PRODUCT',
      payload: obj
    });
  }

  // Экшн на удаление из избранного
  const handleRemoveFavoriteProduct = (id) => {
    dispatch(removeFavoriteProduct(id));
  }

  // Экшн на добавление в корзину
  const handleAddProductToCart = obj => {
    dispatch({
      type: 'ADD_PRODUCT_TO_CART',
      payload: obj
    });
  }

  React.useEffect(() => {
    dispatch(fetchProducts(sortBy, sortPrices, sortColors, sortSizes, sortBrands, sortStyles)); // вернет функцию
    //console.log(products);
  }, [sortBy, sortPrices, sortColors, sortBrands, sortStyles, sortSizes]); // [] = componentDidMout


  const onSelectSortType = React.useCallback((type) => {
    dispatch(setSortBy(type)); // экшн выбор типа сортировки
  }, []);

  const onSelectSortPrices = React.useCallback((from, to) => {
    //console.log(from, to);
    dispatch(setSortPrices(from, to)); // экшн выбор диапазона цен
  }, []);

  const onSelectSortColors = React.useCallback((arr) => {
    dispatch(setSortColors(arr)); // экшн выбор цветов
  }, []);

  const onSelectSortBrands = React.useCallback((arr) => {
    dispatch(setSortBrands(arr)); // экшн выбор брендов
  }, []);

  const onSelectSortSizes = React.useCallback((arr) => {
    dispatch(setSortSizes(arr)); // экшн выбор размеров
  }, []);

  const onSelectSortStyles = React.useCallback((arr) => {
    dispatch(setSortStyles(arr)); // экшн выбор стиля
  }, []);

  // Сброс фильтров
  const onResetSortPrices = React.useCallback(() => {
    dispatch(resetSortPrices()); // экшн сброса диапазона цен
  }, []);

  const onResetSortColors = React.useCallback(() => {
    dispatch(resetSortColors()); // экшн сброса цвета
  }, []);

  const onResetSortBrands = React.useCallback(() => {
    dispatch(resetSortBrands()); // экшн сброса брендов
  }, []);

  const onResetSortStyles = React.useCallback(() => {
    dispatch(resetSortStyles()); // экшн сброса стиля
  }, []);

  const onResetSortSizes = React.useCallback(() => {
    dispatch(resetSortSizes()); // экшн сброса размеров
  }, []);

  const onResetFilters = React.useCallback(() => {
    dispatch(resetFilters()); // экшн сброса размеров
  }, []);


  // логика переключения вида карточек каталога
  const views = ['grid', 'col'];
  const [catalogView, setCatalogView] = useState(views[0]);
  const toggleCatalogView = () => {
    setCatalogView(views.reverse()[0]);
  }

  // Превью карточки товара в попапе
  const [visibleCatalogCardPopup, setVisibleCatalogCardPopup] = useState(null);
  const closeCatalogCardPopup = () => {
    setVisibleCatalogCardPopup(null);
  }

  // Стейт видимости фильтров
  const [visibleFilters, setVisibleFilters] = useState(false);
  const onOpenFilters = () => {
    setVisibleFilters(true);
  }
  const onCloseFilters = () => {
    setVisibleFilters(false);
  }


  const crumbs = ['Главная', 'Женщинам', 'Одежда', 'Верхняя одежда', 'Пальто'];
  const [home, ...rest] = crumbs;

  return (
    <>
      <main className="page catalog">
        <div className="container">
          <nav className="breadcrumbs" aria-label="breadcrumbs">
            <ol className="breadcrumbs__list">
              <li className="breadcrumbs__item"><Link to="/home">{home}</Link></li>
              {rest.map((crumb, i) => (
                <li key={`crumb_${i + 1}`} className="breadcrumbs__item">{i === rest.length - 1 ? <span>{crumb}</span> : <Link to="/">{crumb}</Link>}</li>
              ))}
            </ol>
          </nav>
          <Collection />
          <div className="catalog__page">
            <h1 className="title page__title catalog__title">Женские пальто</h1>
            <div className="catalog__inner">
              <AsideFilters />
              <div className="catalog__body">
                <div className="catalog__filters">
                  <CatalogFilters visibleFilters={visibleFilters} onCloseFilters={onCloseFilters} activeSortBy={sortBy} sortPrices={sortPrices} sortFilters={sortFilters} sortColors={sortColors} sortSizes={sortSizes} sortBrands={sortBrands} sortStyles={sortStyles} onClickSort={onSelectSortType} onResetPrices={onResetSortPrices} onChangePrices={onSelectSortPrices} onSelectSortColors={onSelectSortColors} onSelectSortBrands={onSelectSortBrands} onSelectSortSizes={onSelectSortSizes} onSelectSortStyles={onSelectSortStyles} onResetSortColors={onResetSortColors} onResetSortBrands={onResetSortBrands} onResetSortStyles={onResetSortStyles} onResetSortSizes={onResetSortSizes} onResetFilters={onResetFilters} />
                  <CatalogView onViewChange={toggleCatalogView} views={views} catalogView={catalogView} />
                  <button onClick={onOpenFilters} className="filters-btn" type="button" style={{ backgroundImage: `url(${filterIcon})` }}>Фильтры</button>
                </div>
                <div className={classNames('catalog__cards', {
                  'catalog__cards--two-cols': catalogView === 'col'
                })}>
                  {isLoaded
                    ? products.map(product => <CatalogCard key={product.id} setVisibleCatalogCardPopup={setVisibleCatalogCardPopup} onClickAddFavorite={handleAddProductToFavorite} onClickRemoveFavorite={handleRemoveFavoriteProduct} {...product} isLoaded={true} />)
                    : Array(18).fill(0).map((_, index) => <Loader key={`loader-${index}`} />)
                  }
                </div>
                <SeoText className="catalog__seo-text" />
              </div>
            </div>
          </div>
        </div>
      </main>
      {visibleCatalogCardPopup !== null &&
        <div className="overlay active">
          <CatalogCardPopup products={products} onCloseCatalogCardPopup={closeCatalogCardPopup} onClickAddFavorite={handleAddProductToFavorite} onClickRemoveFavorite={handleRemoveFavoriteProduct} onAddCart={handleAddProductToCart} visibleCatalogCardPopup={visibleCatalogCardPopup} basketProduct={basketProduct} setBasketProduct={setBasketProduct} />
        </div>
      }
    </>
  );
}

export default Catalog;