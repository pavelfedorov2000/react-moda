import classNames from 'classnames';
import { Link } from 'react-router-dom';
import closeIcon from '../../assets/images/icons/close-thin.svg';
import { HeaderRegion, WhatsApp, ContactsHeader, NavHeader } from '..';
import { DROP_MENU_CATEGORIES, LINKS } from '../../constants/menu';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { useActions } from '../../hooks/useActions';
import ActionHeader from '../ActionHeader';
import { PinIcon } from '../HeaderActions/icons';
import { ClassName } from '../../enums/ClassName';
import { PopupId } from '../../enums/PopupId';
import { Image } from '../../ui';

const mainClass = 'burger-menu';

const BurgerMenu = () => {
    const { isOpenMenu } = useTypedSelector((state) => state.burgerReducer);
    const { closeBurgerMenu } = useActions();

    const handleClose = () => {
        document.body.classList.remove(ClassName.Lock);
        closeBurgerMenu();
    }

    return (
        <div id={PopupId.BurgerMenu} className={classNames(mainClass, {
            [ClassName.Active]: isOpenMenu
        })}>
            <div className={`${mainClass}__top`}>
                <button onClick={handleClose} className={`${mainClass}__close`} type="button" aria-label="Закрыть меню">
                    <Image src={closeIcon} alt="крестик" width={20} height={20} />
                </button>

                <NavHeader />
            </div>

            <HeaderRegion />

            <ul className={`${mainClass}__list`}>
                {DROP_MENU_CATEGORIES.map((link, index) => (
                    <li key={index}>
                        <Link className={`${mainClass}__link`} to={link.path}>{link.title}</Link>
                    </li>
                ))}

                {[...LINKS].reverse().map((link, index) => (
                    <li key={index}>
                        <Link className={classNames(`${mainClass}__link`, {
                            [`${mainClass}__link--red`]: index === [...LINKS].reverse().length - 1
                        })} to={link.path}>{link.title}</Link>
                    </li>
                ))}
            </ul>

            <div className={`${mainClass}__bottom`}>
                <ActionHeader icon={<PinIcon />} text="Найти магазины" href="#" />
                <ContactsHeader />
                <WhatsApp />
            </div>
        </div>
    );
}

export default BurgerMenu;