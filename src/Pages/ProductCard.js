import axios from 'axios';
import React, { useState } from 'react';
import { ProductDetails, ProductLinks, ProductCardContent, SliderSection } from '../Components';
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';
import { removeFavoriteProduct } from '../redux/actions/favorite';
import { useDispatch } from 'react-redux';


function ProductCard() {

  const dispatch = useDispatch();
  let { id } = useParams();

  const [products, setProducts] = useState([]);

  React.useEffect(() => {
    axios.get('/products').then(({ data }) => {
      setProducts(data);
    });
  }, []); // [] = componentDidMout */

  //console.log(news);

  const activeProduct = products.filter(product => product.id == id)[0];
  console.log(activeProduct);

  const [favorite, setFavorite] = useState(false);

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

  const tabs = [
    {
      id: 'details',
      text: 'Детали',
    },
    {
      id: 'delivery',
      text: 'Доставка',
    },
    {
      id: 'payment',
      text: 'Оплата',
    },
    {
      id: 'shops-availability',
      text: 'Наличие в магазинах',
    },
    {
      id: 'video',
      text: 'Видео',
    },
  ];

  return (
    <div className="container product-card">
      <main className="page">
        <div className="product-card__inner">
          <ProductCardContent onClickAddFavorite={handleAddProductToFavorite} onClickRemoveFavorite={handleRemoveFavoriteProduct} onAddCart={handleAddProductToCart} setFavorite={setFavorite} {...activeProduct} />
          <div className="product-card__slider">
            <div className="product-card__slider-item">
              <img src={activeProduct && activeProduct.imageUrl} />
            </div>
            <div className="product-card__slider-item">
              <img src={activeProduct && activeProduct.imageUrl} />
            </div>
          </div>
          <div className="product-card__links">
            <ProductLinks />
          </div>
          <div className="product-card__info">
            <div className="product-card__tabs-wrap">
              <div className="product-card__tabs">
                {tabs.map(tab => (
                  <button key={tab.id} className="tab product-card__tab">{tab.text}</button>
                ))}
              </div>
            </div>
            {activeProduct &&
              <ProductDetails {...activeProduct} />
            }
          </div>
        </div>
      </main>
      <aside className="product-card__page">
        {['С этим товаром рекомендуем', 'Похожие товары'].map((section, i) => (
          <SliderSection key={`aside-section_${i + 1}`} products={products} {...activeProduct} title={section} />
        ))}
      </aside>
    </div>
  );
}

export default ProductCard;