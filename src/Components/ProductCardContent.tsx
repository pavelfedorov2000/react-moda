import loriata from '../assets/images/logo/loriata.png';
import { Product } from '../interfaces/CatalogItem';
import Button from './Button';
import Prices from './Prices';
import ProductCardDelivery from './ProductCardDelivery';
import ProductColors from './ProductColors';
import ProductSizes from './ProductSizes';

const ProductCardContent = ({ id, name, brand, logo, sizes, color, price, discount, newProduct, isFavorite }: Product) => {
    /* const favoriteClickCondition = (isFavoriteProduct) => {
        return isFavoriteProduct ? onRemoveFavoriteProduct : onAddFavoriteProduct;
    } */

    return (
        <div className="product-card__content">
            <div className="product-card__top-wrap">
                <h1 className="product-card__title">
                    {name} {brand}
                </h1>

                <img className="product-card__logo" src={brand === 'Loriata' || !logo ? loriata : logo} alt={`логотип ${brand}`} width="76" height="38" />
            </div>

            <div className="product-card__prices-wrap">
                <Prices price={price} discount={discount} className="product-card__prices" />

                <div className="labels">
                    {discount !== 0 &&
                        <span className="label label--discount">{discount}%</span>
                    }

                    {newProduct && newProduct !== undefined &&
                        <span className="label label--new">new</span>
                    }
                </div>
            </div>

            <section className="product-card__section">
                <h4 className="product-card__section-title">О товаре</h4>

                <p>
                    Пальто на запах выполнено из мягкого шерстяного драпа. Модель приталенного кроя дополнена
                    поясом в тон.
                    Особенности: воротник с лацканами, без застежки, два боковых кармана, высокая шлица.
                </p>

                <button className="scroll-link" data-link="details" type="button">Подробнее</button>
            </section>

            <ProductCardDelivery />

            <form action="#" className="product-card-form">
                <ProductColors />

                <ProductSizes sizes={sizes} />

                <div className="product-card-form__buttons">
                    <Button className="product-card-form__btn product-cart-btn" type="button" icon cart />
                    <Button className="product-card-form__btn product-favorite-btn" border favorite icon type="button" />
                </div>
            </form>
        </div>
    );
}

export default ProductCardContent;