import React from 'react';
import { Link } from 'react-router-dom';
import SaleItem from './SaleItem';
import dropMenuSale from '../assets/images/content/drop-menu-img.jpg';

const dropMenuItems = {
    categories: [
        "Блузки и рубашки",
        "Брюки",
        "Верхняя одежда",
        "Джемперы, свитеры",
        "Джинсы",
        "Домашняя одежда",
    ],
    "Популярное": [
        "Водолазки",
        "Вечерние платья",
        "Джинсы",
        "Топы",
        "Юбки",
    ],
    "Бренды": [
        "Allora",
        "AllSaints",
        "Allura",
        "Bibi",
        "B2B Black to Black",
        "BeMyMom",
        "Dirkje",
        "Djdutchjeans",
        "Dja Fashion",
        "Faba",
        "все бренды",
    ]
};

function DropMenu({ dropMenuCategories, links }) {
    return (
        <ul className="header__list">
            {dropMenuCategories.map((item, index) => (
                <li key={item.toString()} className="header__list-item">
                    <Link className="header__list-link" to={item.path}>{item.title}</Link>

                    <div className="drop-menu">
                        <div className="drop-menu__row">
                            {Object.keys(dropMenuItems).map((key, i) => (
                                <div key={key.toString()} className={`drop-menu__col drop-menu__col--${i + 1}`}>
                                    <div className="drop-menu__col-title">
                                        {i === 0 ? `Вс${(index === 0 || index === 1) ? 'я' : 'е'} ${item.title}` : key}
                                    </div>

                                    <ul className="drop-menu__list">
                                        {dropMenuItems[key].map(li => (
                                            <li key={li.toString()} className="drop-menu__list-item">
                                                <Link to="/" className="drop-menu__list-link">{li}</Link>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}

                            <SaleItem className="drop-menu__sale" src={dropMenuSale} title="Новинки зима 2022" subtitle="Зимняя коллекция" />
                        </div>
                    </div>
                </li>
            ))}

            {links.map(link => (
                <li key={link.toString()} className="header__list-item">
                    <Link className="header__list-link" to={link.path}>{link.title}</Link>
                </li>
            ))}
        </ul>
    );
}

export default DropMenu;