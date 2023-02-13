import lockIcon from '../../assets/images/icons/lock.svg';
import checkIcon from '../../assets/images/icons/discount-check.svg';
import classNames from 'classnames';

interface Props {
    discounts: number[];
    discount: number;
}

const DiscountsProgress = ({ discounts, discount }: Props) => {
    const personalDiscountIndex = discounts.indexOf(discount);

    return (
        <div className="discounts-progress">
            <ol className="discounts-progress__list">
                {discounts.map((discount, i) => (
                    <li key={discount} style={{ backgroundImage: `url(${i < personalDiscountIndex + 1 ? checkIcon : lockIcon})` }} className={classNames('discounts-progress__item', {
                        'completed': i <= personalDiscountIndex
                    })}>{`${discount}%`}</li>
                ))}
            </ol>
        </div>
    );
};

export default DiscountsProgress;