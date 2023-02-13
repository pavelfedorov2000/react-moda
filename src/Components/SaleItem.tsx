import classNames from 'classnames';
import { Link } from 'react-router-dom';
import { Pages } from '../enums/Page';
import { SaleItem as SaleItemType } from '../interfaces/SaleItem';

interface Props extends SaleItemType {
    className?: string;
    imgWidth?: number;
    imgHeight?: number;
}

const SaleItem = ({ imageUrl, title, subtitle, saleText, className, imgWidth, imgHeight}: Props) => {
    return (
        <article className={classNames('sale-item', className)}>
            <div className="sale-item__img">
                <img src={imageUrl} alt="фото" width={imgWidth || 336} height={imgHeight || 250} />
                <span className="sale-item__discount">{saleText}</span>
            </div>
            <h3 className="sale-item__title"><Link className="full-link" to={Pages.Catalog}>{title}</Link></h3>
            <div className="sale-item__descr">{subtitle}</div>
        </article>
    );
}

export default SaleItem;