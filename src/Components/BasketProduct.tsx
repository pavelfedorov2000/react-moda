import classNames from 'classnames';
import { useCallback } from 'react';
import { Link } from 'react-router-dom';
import { useActions } from '../hooks/useActions';
import { useTypedSelector } from '../hooks/useTypedSelector';
import { CartItem } from '../interfaces/CartItem';
import { calcOldPrice } from '../utils/oldPrice';
import Button from './Button';
import Counter from './Counter';
import ProductList from './ProductList';

interface Props extends CartItem {
    className?: string;
}

const BasketProduct = ({ className, id, articul, name, brand, sizes, size, price, imageUrl, color, style, discount, newProduct, totalCount, totalPrice, totalDiscount }: Props) => {
    const { products } = useTypedSelector((state) => state.favoriteReducer);
    const { plusProduct, minusProduct, removeCartProduct, addFavoriteProduct, removeFavoriteProduct } = useActions();
    const { isAsideBasketVisible } = useTypedSelector((state) => state.asidePopupReducer);

    const isFavorite = products.findIndex((product) => product.id === id) !== -1;

    const handleRemoveCartProduct = useCallback(() => {
        removeCartProduct(id);
    }, []);

    const handleRemoveFavoriteProduct = useCallback(() => {
        removeFavoriteProduct(id);
    }, []);

    const handleAddFavorite = () => {
        addFavoriteProduct({
            id,
            name,
            brand,
            imageUrl,
            price,
            color,
            sizes,
            style,
            discount,
            newProduct
        });
    }

    return (
        <article className={classNames('basket-product', className)}>
            <Link to={`/product-card/${id}`} className="basket-product__img">
                <img src={imageUrl} alt="фото" />
            </Link>

            <Link to={`/product-card/${id}`} className="product-title basket-product__title">{name} {brand}</Link>

            <ProductList articul={articul} color={color} size={size} />

            <div className="basket-product__buttons">
                <Button onClick={handleRemoveCartProduct} className="basket-product__btn basket-product__btn--delete" transparent remove icon />

                {!isAsideBasketVisible && <Button onClick={isFavorite ? handleRemoveFavoriteProduct : handleAddFavorite} isFavoriteProduct={isFavorite} className="basket-product__btn basket-product__btn--favorite" transparent favorite icon />}
            </div>

            <Counter className="basket-product__counter" value={totalCount} onMinus={() => minusProduct(id)} onPlus={() => plusProduct(id)} />

            <div className="basket-product__prices">
                <div className="basket-product__prices-wrap">
                    {discount && discount !== 0 &&
                        <div className="old-price basket-product__old-price">{calcOldPrice(discount, price)} ₽</div>
                    }

                    <div className={classNames({
                        'price': discount === 0,
                        'new-price': discount !== 0
                    })}>{`${totalPrice} ₽`}</div>
                </div>

                {!isAsideBasketVisible && discount && discount !== 0 &&
                    <div className="basket-product__discount">
                        <div className="basket-product__discount-percent">Сумма скидки {discount}%</div>
                        <div className="basket-product__discount-sum">({totalDiscount} ₽)</div>
                    </div>
                }
            </div>
        </article>
    );
}

export default BasketProduct;