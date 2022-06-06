import axios from 'axios';
import React, { useState } from 'react';
import { ProductDetails, ProductLinks, ProductCardContent } from '../Components';
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
        <main className="page product-card">
            <div className="product-card__inner">
                <ProductCardContent onClickAddFavorite={handleAddProductToFavorite} onClickRemoveFavorite={handleRemoveFavoriteProduct} onAddCart={handleAddProductToCart} setFavorite={setFavorite} {...activeProduct} />
                <div className="product-card__slider"></div>
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
                    <ProductDetails />
                </div>
            </div>
        </main>
    );
}

export default ProductCard;