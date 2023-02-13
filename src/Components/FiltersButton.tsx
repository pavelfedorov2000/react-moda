import filterIcon from '../assets/images/icons/filter.svg';

interface Props {
    onClick: () => void;
    isExpanded: boolean;
}

const FiltersButton = ({ onClick, isExpanded }: Props) => {
    return (
        <button onClick={onClick} className="filters-btn" aria-expanded={isExpanded ? true : false} type="button" style={{ backgroundImage: `url(${filterIcon})` }}>
            Фильтры
        </button>
    );
}

export default FiltersButton;