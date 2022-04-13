import classNames from 'classnames';
import React from 'react';

function SaleItem({ className, src, title, descr }) {
    return (
        <article className={classNames('sale-item', className)}>
            <a href="#">
                <div className="sale-item__img">
                    <img src={src} alt="фото" width="336" height="250" />
                </div>
                <h5 className="sale-item__title">{title}</h5>
                <div className="sale-item__descr">{descr}</div>
            </a>
        </article>
    );
}

export default SaleItem;