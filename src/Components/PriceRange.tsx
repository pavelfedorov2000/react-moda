import classNames from "classnames";
import { useTypedSelector } from "../hooks/useTypedSelector";
import { WithClassName } from "../types/types";

interface Props {
    onChangeFrom: (event: React.ChangeEvent<HTMLInputElement>) => void;
    onChangeTo: (event: React.ChangeEvent<HTMLInputElement>) => void;
    from: number | string;
    to: number | string;
}

const mainClass = 'price-range';

const PriceRange = ({ className, from, to, onChangeFrom, onChangeTo }: Props & WithClassName) => {
    const { sortPrices } = useTypedSelector((state) => state.filtersReducer);

    return (
        <div className={classNames(mainClass, {
            [`${className}__${mainClass}`]: className
        })}>
            <div className={`${mainClass}__item`}>
                <span>От</span>
                <input onInput={onChangeFrom} className={`${mainClass}__input`} name="PRICE_FROM" type="number" min={sortPrices[0]} placeholder="0" value={from} />
            </div>
            <div className={`${mainClass}__item`}>
                <span>До</span>
                <input onInput={onChangeTo} className={`${mainClass}__input`} name="PRICE_TO" type="number" max={sortPrices[1]} placeholder="100 000" value={to} />
            </div>
        </div>
    );
};

export default PriceRange;