import React from 'react';
import { Link } from 'react-router-dom';
import SaleItem from './SaleItem';
import dropMenuSale from '../assets/images/content/drop-menu-img.jpg';

const dropMenu = {
    items: [
        {
            id: 0,
            items: [
                "Блузки и рубашки",
                "Брюки",
                "Верхняя одежда",
                "Джемперы, свитеры",
                "Джинсы",
                "Домашняя одежда",
            ]
        },
        {
            id: 1,
            title: "Популярное",
            items: [
                "Водолазки",
                "Вечерние платья",
                "Джинсы",
                "Топы",
                "Юбки",
            ],
        },
        {
            id: 2,
            title: "Бренды",
            items: [
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
        }
    ]
};

function DropMenu({ dropMenuCategories, links }) {
    return (
        <ul className="header__list">
            {dropMenuCategories.map((item, index) => (
                <li key={item.id} className="header__list-item">
                    <Link className="header__list-link" to={item.path}>{item.title}</Link>

                    <div className="drop-menu">
                        <div className="drop-menu__row">
                            {dropMenu.items.map((link, i) => (
                                <div key={link.id} className={`drop-menu__col drop-menu__col--${i + 1}`}>
                                    <div className="drop-menu__col-title">
                                        {i === 0 ? `Вс${(index === 0 || index === 1) ? 'я' : 'е'} ${item.title}` : link.title}
                                    </div>

                                    <ul className="drop-menu__list">
                                        {link.items.map(li => (
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
                <li key={link.id} className="header__list-item">
                    <Link className="header__list-link" to={link.path}>{link.title}</Link>
                </li>
            ))}
        </ul>
    );
}

export default DropMenu;