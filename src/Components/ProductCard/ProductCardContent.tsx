import loriata from '../../assets/images/logo/loriata.png';
import { useCallback, useMemo } from 'react';
import { useActions } from '../../hooks/useActions';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { Product } from '../../interfaces/CatalogItem';
import Button from '../../ui/Button';
import Prices from '../Prices';
import ProductCardDelivery from './ProductCardDelivery';
import ProductColors from '../ProductColors';
import ProductSizes from '../ProductSizes';
import Labels from '../Labels';
import { Image, Title } from '../../ui';
import { TitleLevel } from '../../enums/TitleLevel';

const mainClass = 'product-card';
const formClass = `${mainClass}-form`;

const ProductCardContent = ({ mainClass, id, articul, name, brand, logo, sizes, color, imageUrl, style, price, discount, newProduct }: Product & { mainClass: string; }) => {
    const { items } = useTypedSelector((state) => state.cartReducer);
    const { products } = useTypedSelector((state) => state.favoriteReducer);
    const { addFavoriteProduct, removeFavoriteProduct, addProductToCart } = useActions();

    const isFavorite = useMemo(() => products.findIndex((product) => product.id === id) !== -1, [id]);
    const isInBasket = useMemo(() => Object.keys(items).includes(id), [id]);

    const handleAddProductToCart = () => {
        addProductToCart({
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
        })
    }

    const handleRemoveFavoriteProduct = useCallback(() => {
        removeFavoriteProduct(id);
    }, []);

    return (
        <div className={`${mainClass}__content`}>
            <div className={`${mainClass}__top-wrap`}>
                <Title tag={TitleLevel.H1} className={`${mainClass}__title`}>
                    {name} {brand}
                </Title>

                <Image className={`${mainClass}__logo`} src={brand === 'Loriata' || !logo ? loriata : logo} alt={`логотип ${brand}`} width={76} height={38} />
            </div>

            <div className={`${mainClass}__prices-wrap`}>
                <Prices price={price} discount={discount} className={`${mainClass}__prices`} />

                <Labels discount={discount} isNew={newProduct} />
            </div>

            <section className={`${mainClass}__section`}>
                <h4 className={`${mainClass}__section-title`}>О товаре</h4>
                <p>
                    Пальто на запах выполнено из мягкого шерстяного драпа. Модель приталенного кроя дополнена
                    поясом в тон.
                    Особенности: воротник с лацканами, без застежки, два боковых кармана, высокая шлица.
                </p>
                <button className="scroll-link" data-link="details" type="button">Подробнее</button>
            </section>

            <ProductCardDelivery mainClass={mainClass} />

            <form action="#" className={formClass}>
                <ProductColors />

                <ProductSizes sizes={sizes} />

                <div className={`${formClass}__buttons`}>
                    <Button onClick={handleAddProductToCart} isBasketProduct={isInBasket} className={`${formClass}__btn product-cart-btn`} icon cart />
                    <Button onClick={isFavorite ? handleRemoveFavoriteProduct : handleAddFavorite} isFavoriteProduct={isFavorite} className={`${formClass}__btn product-favorite-btn`} border favorite icon />
                </div>
            </form>
        </div>
    );
}

export default ProductCardContent;
