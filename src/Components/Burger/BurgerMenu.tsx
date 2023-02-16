import classNames from 'classnames';
import { Link } from 'react-router-dom';
import closeIcon from '../../assets/images/icons/close-thin.svg';
import { HeaderRegion, WhatsApp, ContactsHeader } from '..';
import { dropMenuCategories, links } from '../../constants/menu';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { useActions } from '../../hooks/useActions';
import ActionHeader from '../ActionHeader';
import { PinIcon } from '../HeaderActions/icons';

const BurgerMenu = () => {
    const { isOpenMenu } = useTypedSelector((state) => state.burgerReducer);
    const { closeBurgerMenu } = useActions();

    const handleClose = () => {
        document.body.classList.remove('_lock');
        closeBurgerMenu();
    }

    return (
        <div className={classNames('burger-menu', {
            'active': isOpenMenu
        })}>
            <div className="burger-menu__top">
                <button onClick={handleClose} className="burger-menu__close" type="button" aria-label="Закрыть меню">
                    <img src={closeIcon} alt="крестик" width="20" height="20" />
                </button>
            </div>

            <HeaderRegion />

            <ul className="burger-menu__list">
                {dropMenuCategories.map((link, index) => (
                    <li key={index}>
                        <Link className="burger-menu__link" to={link.path}>{link.title}</Link>
                    </li>
                ))}

                {links.reverse().map((link, i) => (
                    <li key={link.path.toString()}>
                        <Link className={classNames('burger-menu__link', {
                            'burger-menu__link--red': i === links.reverse().length - 1
                        })} to={link.path}>{link.title}</Link>
                    </li>
                ))}
            </ul>

            <div className="burger-menu__bottom">
                <ActionHeader icon={<PinIcon />} text="Найти магазины" href="#" />
                <ContactsHeader />
                <WhatsApp />
            </div>
        </div>
    );
}

export default BurgerMenu;