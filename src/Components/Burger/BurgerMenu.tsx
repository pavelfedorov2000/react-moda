import classNames from 'classnames';
import { Link } from 'react-router-dom';
import closeIcon from '../../assets/images/icons/close-thin.svg';
import { HeaderRegion, WhatsApp, ContactsHeader } from '..';
import { dropMenuCategories, links } from '../../constants/menu';

interface Props {
    isVisible: boolean;
    onClose: () => void;
}

const BurgerMenu = ({ isVisible, onClose }: Props) => {
    return (
        <div className={classNames('burger-menu', {
            'active': isVisible
        })}>
            <div className="burger-menu__top">
                <button onClick={onClose} className="burger-menu__close" type="button" aria-label="Закрыть меню">
                    <img src={closeIcon} alt="крестик" width="20" height="20" />
                </button>


            </div>

            <HeaderRegion />

            <ul className="burger-menu__list">
                {dropMenuCategories.map(link => (
                    <li key={link.path.toString()} className="burger-menu__list-item">
                        <Link className="burger-menu__list-link" to={link.path}>{link.title}</Link>
                    </li>
                ))}

                {links.reverse().map((link, i) => (
                    <li key={link.path.toString()} className="burger-menu__list-item">
                        <Link className={classNames('burger-menu__list-link', {
                            'burger-menu__list-link--red': i === links.reverse().length - 1
                        })} to={link.path}>{link.title}</Link>
                    </li>
                ))}
            </ul>

            <div className="burger-menu__bottom">

                <div className="header__contact">
                    <ContactsHeader />
                    <WhatsApp />
                </div>
            </div>
        </div>
    );
}

export default BurgerMenu;