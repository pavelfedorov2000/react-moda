import classNames from 'classnames';
import React from 'react';

function Prices({ price, discount, className }) {
    return (
        <div className={classNames('prices', className)}>
            <div className={classNames('price', {
                'new-price': discount !== 0
            })}>{price} ₽</div>

            {discount !== 0 &&
                <div className="old-price catalog-card__old-price">{Math.floor(price * 100 / (100 - discount))} ₽</div>
            }
        </div>
    );
}

export default Prices;