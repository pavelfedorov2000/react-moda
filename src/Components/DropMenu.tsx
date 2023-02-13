import { Link } from 'react-router-dom';
import SaleItem from './SaleItem';
import dropMenuSale from '../assets/images/content/drop-menu-img.jpg';
import { dropMenu, dropMenuCategories, links } from '../constants/menu';

const DropMenu = () => {
    return (
        <ul className="header__list">
            {dropMenuCategories.map((item, index) => (
                <li key={item.path.toString()} className="header__list-item">
                    <Link className="header__list-link" to={item.path}>{item.title}</Link>

                    <div className="drop-menu">
                        <div className="drop-menu__row">
                            {dropMenu.items.map((link, i) => (
                                <div key={link.title ? link.title.toString() : link.items[0].toString()} className={`drop-menu__col drop-menu__col--${i + 1}`}>
                                    <div className="drop-menu__col-title">
                                        {i === 0 ? `Вс${(index === 0 || index === 1) ? 'я' : 'е'} ${item.title}` : link.title}
                                    </div>

                                    <ul className="drop-menu__list">
                                        {link.items.map(item => (
                                            <li key={item.toString()} className="drop-menu__list-item">
                                                <Link to="/" className="drop-menu__list-link">{item}</Link>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}

                            <SaleItem className="drop-menu__sale" imageUrl={dropMenuSale} title="Новинки зима 2022" subtitle="Зимняя коллекция" />
                        </div>
                    </div>
                </li>
            ))}

            {links.map(link => (
                <li key={link.path.toString()} className="header__list-item">
                    <Link className="header__list-link" to={link.path}>{link.title}</Link>
                </li>
            ))}
        </ul>
    );
}

export default DropMenu;