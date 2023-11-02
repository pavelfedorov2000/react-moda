import { Link } from 'react-router-dom';
import SaleItem from './SaleItem';
import dropMenuSale from '../assets/images/content/drop-menu-img.jpg';
import { DROP_MENU, DROP_MENU_CATEGORIES, LINKS } from '../constants/menu';
import { ClassName } from '../enums/ClassName';

const mainClass = ClassName.DropMenu;

const DropMenu = () => {
    return (
        <ul className="header__list">
            {DROP_MENU_CATEGORIES.map((item, index) => (
                <li key={index} className="header__list-item">
                    <Link className="header__list-link" to={item.path}>{item.title}</Link>

                    <div className={mainClass}>
                        <div className={`${mainClass}__row`}>
                            {DROP_MENU.items.map((link, i) => (
                                <div key={i} className={`${mainClass}__col ${mainClass}__col--${i + 1}`}>
                                    <div className={`${mainClass}__col-title`}>
                                        {i === 0 ? `Вс${(index === 0 || index === 1) ? 'я' : 'е'} ${item.title}` : link.title}
                                    </div>

                                    <ul className={`${mainClass}__list`}>
                                        {link.items.map((item, j) => (
                                            <li key={j} className={`${mainClass}__list-item`}>
                                                <Link to="/" className={`${mainClass}__list-link`}>{item}</Link>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}

                            <SaleItem className={`${mainClass}__sale`} imageUrl={dropMenuSale} title="Новинки зима 2022" subtitle="Зимняя коллекция" />
                        </div>
                    </div>
                </li>
            ))}

            {LINKS.map((link, index) => (
                <li key={index} className="header__list-item">
                    <Link className="header__list-link" to={link.path}>{link.title}</Link>
                </li>
            ))}
        </ul>
    );
}

export default DropMenu;