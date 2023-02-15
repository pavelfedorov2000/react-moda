import classNames from 'classnames';
import { ProductLink as ProductLinkType } from '../interfaces/ProductLink';

const ProductLink = ({ src, cover, title, subtitle }: ProductLinkType) => {
    return (
        <li className="product-links__item">
            <a href="#" className="product-link">
                <img className={classNames('product-link__img', {
                    'product-link__img--cover': cover
                })} src={src} alt="иконка" width="40" height="40" />
                <span className="product-link__title">{title}</span>
                <span className="product-link__subtitle">{subtitle}</span>
            </a>
        </li>
    );
};

export default ProductLink;