import burger from '../../assets/images/icons/burger.svg';
import { useActions } from '../../hooks/useActions';
import { useTypedSelector } from '../../hooks/useTypedSelector';

const BurgerButton = () => {
    const { openBurgerMenu } = useActions();
    const { isOpenMenu } = useTypedSelector((state) => state.burgerReducer);

    const handleOpenMenu = () => {
        document.body.classList.add('_lock');
        openBurgerMenu();
    }

    return (
        <button onClick={handleOpenMenu} className="burger-btn" type="button" aria-label="Открыть меню" aria-expanded={isOpenMenu} aria-controls="burger-menu">
            <img src={burger} alt="кнопка бургер" width="20" height="20" />
        </button>
    );
}

export default BurgerButton;