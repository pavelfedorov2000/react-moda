import classNames from 'classnames';
import { PRODUCT_COLORS } from '../constants/product-colors';
import ProductColor from './ProductColor';
import { WithClassName } from '../types/types';

const mainClass = 'product-color';

const ProductColors = ({ className }: WithClassName) => {
    return (
        <div className={classNames(mainClass, className = 'product-card-form__color')}>
            <div className={`${mainClass}__row`}>
                <div className={`product-card-form__title ${mainClass}__title`}>Цвет:</div>
                <div className={`${mainClass}__items`}>
                    {PRODUCT_COLORS.map((color, index) => (
                        <ProductColor key={color.hex} {...color} index={index} />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default ProductColors;