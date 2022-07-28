import React from 'react';
import { BasketProduct } from '../Components';
import { removeCartItem, plusItem, minusItem } from '../redux/actions/cart';
import { removeFavoriteProduct } from '../redux/actions/favorite';

function BasketTable({ items, dispatch }) {
    const head = ['Товары', 'Кол-во', 'Стоимость'];

    const addedProducts = Object.keys(items).map(key => {
        return items[key].items[0];
    });
    //console.log(addedProducts);
    const onRemoveItem = (id) => {
        dispatch(removeCartItem(id));
    }
    const onMinusItem = (id) => {
        dispatch(minusItem(id));
    }
    const onPlusItem = (id) => {
        dispatch(plusItem(id));
    }

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

    return (
        <div className="basket-table">
            <div className="basket-table__head">
                {head.map((title, i) => (
                    <div key={`col-title_${i + 1}`} className="basket-table__title">{title}</div>
                ))}
            </div>
            <div className="basket-table__body">
                {addedProducts.map(product => (
                    <BasketProduct className="basket-table__item" key={product.id} {...product} onRemoveItem={onRemoveItem} onMinusItem={onMinusItem} onPlusItem={onPlusItem} totalPrice={items[product.id].totalPrice} totalDiscount={items[product.id].totalDiscount} totalCount={items[product.id].items.length} onClickAddFavorite={handleAddProductToFavorite} onClickRemoveFavorite={handleRemoveFavoriteProduct} />
                ))}
            </div>
        </div>
    );
}

export default BasketTable;