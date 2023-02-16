import classNames from 'classnames';
import { calcOldPrice } from '../utils/oldPrice';

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
                <div className="old-price">{calcOldPrice(discount, price)} ₽</div>
            }
        </div>
    );
}

export default Prices;