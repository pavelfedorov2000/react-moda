import classNames from 'classnames';
import React from 'react';

function SaleItem({ className, src, title, subtitle, saleText }) {
  return (
    <article className={classNames('sale-item', className)}>
      <a href="#">
        <div className="sale-item__img">
          <img src={src} alt="фото" width="336" height="250" />
          {saleText !== undefined && <span className="sale-item__discount">{saleText}</span>}
        </div>
        <div className="sale-item__title">{title}</div>
        <div className="sale-item__descr">{subtitle}</div>
      </a>
    </article>
  );
}

export default SaleItem;