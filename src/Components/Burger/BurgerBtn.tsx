import burger from '../../assets/images/icons/burger.svg';

interface Props {
    onClick: () => void;
    isExpanded: boolean;
}

const BurgerBtn = ({ onClick, isExpanded }: Props) => {
    return (
        <button onClick={onClick} className="burger-btn" type="button" aria-label="Открыть меню" aria-expanded={isExpanded}>
            <img src={burger} alt="кнопка бургер" width="20" height="20" />
        </button>
    );
}

export default BurgerBtn;