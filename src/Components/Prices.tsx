import classNames from 'classnames';
import { calcOldPrice } from '../utils/oldPrice';
import { WithClassName } from '../types/types';

interface Props {
    price: number;
    discount?: number;
}

const Prices = ({ price, discount, className }: Props & WithClassName) => {
    return (
        <div className={classNames('prices', className)}>
            <div className={classNames('price', {
                'new-price': discount !== 0
            })}>{price} ₽</div>

            {discount && discount !== 0 &&
                <div className="old-price">{calcOldPrice(discount, price)} ₽</div>
            }
        </div>
    );
}

export default Prices;