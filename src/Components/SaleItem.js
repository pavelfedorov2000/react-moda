import classNames from 'classnames';
import React from 'react';
import { Link } from 'react-router-dom';

function SaleItem({ className, src, title, subtitle, saleText }) {
  return (
    <article className={classNames('sale-item', className)}>
      <Link to="/not-found">
        <div className="sale-item__img">
          <img src={src} alt="фото" width="336" height="250" />
          {saleText !== undefined && <span className="sale-item__discount">{saleText}</span>}
        </div>
        <div className="sale-item__title">{title}</div>
        <div className="sale-item__descr">{subtitle}</div>
      </Link>
    </article>
  );
}

export default SaleItem;