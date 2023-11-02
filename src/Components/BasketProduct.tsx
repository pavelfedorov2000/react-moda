import classNames from 'classnames';
import { useCallback } from 'react';
import { Link } from 'react-router-dom';
import { useActions } from '../hooks/useActions';
import { useTypedSelector } from '../hooks/useTypedSelector';
import { CartItem } from '../interfaces/CartItem';
import { calcOldPrice } from '../utils/oldPrice';
import Button from '../ui/Button';
import Counter from './Counter';
import ProductList from './ProductList';
import { WithClassName } from '../types/types';
import { Image } from '../ui';
import { Pages } from '../enums/Page';

const mainClass = 'basket-product';

const BasketProduct = ({ className, id, articul, name, brand, sizes, price, imageUrl, color, style, discount, newProduct, totalCount, totalPrice, totalDiscount }: CartItem & WithClassName) => {
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
            articul,
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
        <article className={classNames(mainClass, className)}>
            <Link to={`/product-card/${id}`} className={`${mainClass}__img`}>
                <Image src={imageUrl} width={105} height={146} cover />
            </Link>

            <Link to={`/product-card/${id}`} className="product-title basket-product__title">{name} {brand}</Link>

            <ProductList className={`${mainClass}__list`} articul={articul} color={color} size={sizes[0]} />

            <div className={`${mainClass}__buttons`}>
                <Button onClick={handleRemoveCartProduct} className="basket-product__btn basket-product__btn--delete" transparent remove icon />

                {!isAsideBasketVisible && <Button onClick={isFavorite ? handleRemoveFavoriteProduct : handleAddFavorite} isFavoriteProduct={isFavorite} className="basket-product__btn basket-product__btn--favorite" transparent favorite icon />}
            </div>

            <Counter className={`${mainClass}__counter`} value={totalCount} onMinus={() => minusProduct(id)} onPlus={() => plusProduct(id)} />

            <div className={`${mainClass}__prices`}>
                <div className={`${mainClass}__prices-wrap`}>
                    {discount && discount !== 0 ?
                        <div className="old-price basket-product__old-price">{calcOldPrice(discount, price)} ₽</div> : null
                    }

                    <div className={classNames({
                        'price': discount === 0,
                        'new-price': discount !== 0
                    })}>{`${totalPrice} ₽`}</div>
                </div>

                {!isAsideBasketVisible && discount && discount !== 0 ?
                    <div className={`${mainClass}__discount`}>
                        <div className={`${mainClass}__discount-percent`}>
                            Сумма скидки {discount}%
                        </div>
                        <div className={`${mainClass}__discount-sum`}>
                            ({totalDiscount} ₽)
                        </div>
                    </div> : null
                }
            </div>
        </article>
    );
}

export default BasketProduct;