import lockIcon from '../../assets/images/icons/lock.svg';
import checkIcon from '../../assets/images/icons/discount-check.svg';
import classNames from 'classnames';

interface Props {
    discounts: number[];
    discount: number;
}

const mainClass = 'discounts-progress';

const DiscountsProgress = ({ discounts, discount }: Props) => {
    const personalDiscountIndex = React.useMemo(() => discounts.indexOf(discount), [discounts, discount]);

    return (
        <div className={mainClass}>
            <ol className={`${mainClass}__list`}>
                {discounts.map((discount, i) => (
                    <li key={discount} style={{ backgroundImage: `url(${i < personalDiscountIndex + 1 ? checkIcon : lockIcon})` }} className={classNames(`${mainClass}__item`, {
                        'completed': i <= personalDiscountIndex
                    })}>{`${discount}%`}</li>
                ))}
            </ol>
        </div>
    );
};

export default DiscountsProgress;
