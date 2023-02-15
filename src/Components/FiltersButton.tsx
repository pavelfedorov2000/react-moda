import filterIcon from '../assets/images/icons/filter.svg';
import { useActions } from '../hooks/useActions';
import { useTypedSelector } from '../hooks/useTypedSelector';

/* interface Props {
    onClick: () => void;
    isExpanded: boolean;
} */

const FiltersButton = () => {
    const { isVisible } = useTypedSelector((state) => state.filtersReducer);
    const { openFilters } = useActions();

    return (
        <button onClick={openFilters} className="filters-btn" aria-expanded={isVisible ? true : false} type="button" style={{ backgroundImage: `url(${filterIcon})` }}>
            Фильтры
        </button>
    );
}

export default FiltersButton;