import classNames from 'classnames';
import React from 'react';
import { Link } from 'react-router-dom';

function SaleItem({ src, title, subtitle, saleText, className, imgWidth, imgHeight }) {
    return (
        <article className={classNames('sale-item', className)}>
            <div className="sale-item__img">
                <img src={src} alt="фото" width={imgWidth || 336} height={imgHeight || 250} />
                <span className="sale-item__discount">{saleText}</span>
            </div>
            <h3 className="sale-item__title"><Link className="full-link" to="/catalog">{title}</Link></h3>
            <div className="sale-item__descr">{subtitle}</div>
        </article>
    );
}

export default SaleItem;