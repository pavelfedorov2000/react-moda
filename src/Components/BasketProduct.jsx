import classNames from 'classnames';
import { useContext } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { AppContext } from '../context';
import Button from './Button';
import Counter from './Counter';

function BasketProduct({ id, articul, name, brand, size, sizes, price, imageUrl, color, discount, isFavorite, totalCount, totalPrice, totalDiscount }) {
    const { onRemoveItem, onMinusItem, onPlusItem, onClickAddFavorite, onClickRemoveFavorite } = useContext(AppContext);
    const favorites = useSelector(({ favorite }) => favorite.products);

    const isFavoriteProduct = favorites.length > 0 && favorites.find(product => product.id === id) || isFavorite;

    const handleRemoveCartItem = () => {
        onRemoveItem(id);
    }

    const handleMinusCartItem = () => {
        onMinusItem(id);
    }

    const handlePlusCartItem = () => {
        onPlusItem(id);
    }

    let obj;
    const onAddFavoriteProduct = () => {
        obj = {
            id,
            name,
            brand,
            imageUrl,
            price,
            color,
            sizes,
            discount,
            isFavorite: true
        };
        onClickAddFavorite(obj);
    }

    const onRemoveFavoriteProduct = () => {
        onClickRemoveFavorite(id);
    }

    const favoriteClickCondition = (isFavoriteProduct) => {
        return isFavoriteProduct ? onRemoveFavoriteProduct : onAddFavoriteProduct;
    }

    return (
        <div className="basket-table__item basket-product">
            <Link to={`/product-card/${id}`} className="basket-product__img">
                <img src={imageUrl} alt="фото" />
            </Link>

            <Link to={`/product-card/${id}`} className="product-title basket-product__title">{name} {brand}</Link>

            <dl className="product-list basket-product__list">
                <div>
                    <dt>Артикул:</dt>
                    <dd>{articul}</dd>
                </div>
                <div>
                    <dt>Цвет:</dt>
                    <dd>{color}</dd>
                </div>
                <div>
                    <dt>Размер:</dt>
                    <dd>{size}</dd>
                </div>
            </dl>

            <div className="basket-product__buttons">
                <Button clickHandler={handleRemoveCartItem} className="basket-product__btn basket-product__btn--delete" transparent remove icon type="button" />

                <Button clickHandler={favoriteClickCondition(isFavoriteProduct)} isFavoriteProduct={isFavoriteProduct} className="basket-product__btn basket-product__btn--favorite" transparent favorite icon type="button" />
            </div>

            <Counter className="basket-product__counter" totalCount={totalCount} handleMinusCartItem={handleMinusCartItem} handlePlusCartItem={handlePlusCartItem} />

            <div className="basket-product__prices">
                <div className="basket-product__prices-wrap">
                    {discount !== 0 &&
                        <div className="price old-price basket-product__old-price">{Math.floor(totalPrice * 100 / (100 - discount))} ₽</div>
                    }

                    <div className={classNames('price', {
                        'new-price': discount !== 0
                    })}>{`${totalPrice} ₽`}</div>
                </div>

                {discount !== 0 &&
                    <div className="basket-product__discount">
                        <div className="basket-product__discount-percent">Сумма скидки {discount}%</div>
                        <div className="basket-product__discount-sum">({totalDiscount} ₽)</div>
                    </div>
                }
            </div>
        </div>
    );
}

export default BasketProduct;