import classNames from 'classnames';
import { Link } from 'react-router-dom';
import { Pages } from '../enums/Page';
import { SaleItem as SaleItemType } from '../interfaces/SaleItem';
import { WithClassName } from '../types/types';
import { Image } from '../ui';

interface Props extends SaleItemType {
    imgWidth?: number;
    imgHeight?: number;
}

const mainClass = 'sale-item';

const SaleItem = ({ className, imageUrl, title, subtitle, saleText, imgWidth, imgHeight}: Props & WithClassName) => {
    return (
        <article className={classNames(mainClass, className)}>
            <div className={`${mainClass}__img`}>
                <Image src={imageUrl} width={imgWidth ?? 336} height={imgHeight ?? 250} cover />
                <span className={`${mainClass}__discount`}>{saleText}</span>
            </div>
            <h3 className={`${mainClass}__title`}>
                <Link className="full-link" to={Pages.Catalog}>{title}</Link>
            </h3>
            <div className={`${mainClass}__descr`}>{subtitle}</div>
        </article>
    );
}

export default SaleItem;