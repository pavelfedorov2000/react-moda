import checkIcon from '../assets/images/icons/check.svg';
import { useActions } from '../hooks/useActions';
import { useTypedSelector } from "../hooks/useTypedSelector";
import { Sort } from '../interfaces/Sort';

const CatalogDropSort = ({ name, type, order }: Sort) => {
    const { sortBy } = useTypedSelector((state) => state.filtersReducer);
    const { setSortBy } = useActions();

    return (
        <label className="catalog-drop-filter__item radio">
            <input onChange={() => setSortBy({ type, order })} className="radio-box" type="radio" name="SORT" checked={sortBy.type === type && sortBy.order === order} />
                <span className="radio-style">
                    <span style={{ backgroundImage: `url(${checkIcon})` }}></span>
                </span>
                <span className="radio-text">{name}</span>
        </label>
    );
};

export default CatalogDropSort;
