import classNames from 'classnames';
import { ProductLink as ProductLinkType } from '../interfaces/ProductLink';
import { Image } from '../ui';
import { ImageFit } from '../enums/Image';

const mainClass = 'product-link';

const ProductLink = ({ src, cover, title, subtitle }: ProductLinkType) => {
    return (
        <a href="#" className={mainClass}>
            <Image className={classNames(`${mainClass}__img`, {
                [`${mainClass}__img--${ImageFit.Cover}`]: cover
            })} src={src} alt="иконка" width={40} height={40} />
            <span className={`${mainClass}__title`}>{title}</span>
            <span className={`${mainClass}__subtitle`}>{subtitle}</span>
        </a>
    );
};

export default ProductLink;