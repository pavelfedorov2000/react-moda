import { useTypedSelector } from "../hooks/useTypedSelector";

interface Props {
    onChangeFrom: () => void;
    from: number;
    onChangeTo: () => void;
    to: number;
}

const PriceRange = ({ onChangeFrom, from, onChangeTo, to }: Props) => {
    const { sortPrices } = useTypedSelector((state) => state.filtersReducer);

    return (
        <div className="catalog-drop-filter__inner catalog-drop-filter__price-range price-range">
            <div className="price-range__item">
                <span>От</span>
                <input onChange={onChangeFrom} className="price-range__input" name="PRICE_FROM" type="number" min={sortPrices[0]} placeholder="0" value={from || ''} />
            </div>
            <div className="price-range__item">
                <span>До</span>
                <input onChange={onChangeTo} className="price-range__input" name="PRICE_TO" type="number" max={sortPrices[1]} placeholder="100 000" value={to || ''} />
            </div>
        </div>
    );
};

export default PriceRange;