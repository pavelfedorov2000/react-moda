import { PRODUCT_COLORS } from '../constants/product-colors';
import ProductColor from './ProductColor';

const ProductColors = () => {
    return (
        <div className="product-color product-card-form__color">
            <div className="product-color__row">
                <div className="product-card-form__title product-color__title">Цвет:</div>
                <div className="product-color__items">
                    {PRODUCT_COLORS.map((color, i) => (
                        <ProductColor key={color.hex} {...color} index={i} />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default ProductColors;