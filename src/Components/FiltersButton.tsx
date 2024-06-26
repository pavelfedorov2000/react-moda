import filterIcon from '../assets/images/icons/filter.svg';
import { PopupId } from '../enums/PopupId';
import { useActions } from '../hooks/useActions';
import { useTypedSelector } from '../hooks/useTypedSelector';

const FiltersButton = () => {
    const { isVisible } = useTypedSelector((state) => state.filtersReducer);
    const { openFilters } = useActions();

    return (
        <button onClick={openFilters} className="filters-button" aria-expanded={isVisible} aria-controls={PopupId.Filters} type="button" style={{ backgroundImage: `url(${filterIcon})` }}>
            Фильтры
        </button>
    );
}

export default FiltersButton;