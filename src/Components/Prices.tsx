import classNames from 'classnames';

interface Props {
    price: number;
    discount?: number;
    className?: string;
}

const Prices = ({ price, discount, className }: Props) => {
    return (
        <div className={classNames('prices', className)}>
            <div className={classNames('price', {
                'new-price': discount !== 0
            })}>{price} ₽</div>

            {discount !== undefined && discount !== 0 &&
                <div className="old-price catalog-card__old-price">{Math.floor(price * 100 / (100 - discount))} ₽</div>
            }
        </div>
    );
}

export default Prices;