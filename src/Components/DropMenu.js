import React from 'react';
import { Link } from 'react-router-dom';
import SaleItem from './SaleItem';
import dropMenuSale from '../assets/images/content/drop-menu-img.jpg';

function DropMenu({ dropMenuCategories, links }) {
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

  return (
    <ul className="header__list">
      {dropMenuCategories.map((item, index) => (
        <li key={`list-item-${index}`} className="header__list-item">
          <Link className="header__list-link" to={item.path}>{item.title}</Link>
          <div className="drop-menu">
            <div className="drop-menu__row">
              {Object.keys(dropMenuItems).map((key, i) => (
                <div key={`col-${i}`} className={`drop-menu__col drop-menu__col--${i + 1}`}>
                  <div className="drop-menu__col-title">
                    {i === 0 ? `Вс${(index === 0 || index === 1) ? 'я' : 'е'} ${item.title}` : key}
                  </div>
                  <ul className="drop-menu__list">
                    {dropMenuItems[key].map((li, j) => (
                      <li key={`li-${j}`} className="drop-menu__list-item">
                        <Link to="/catalog" className="drop-menu__list-link">{li}</Link>
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
      {links.map((link, i) => (
        <li key={`link_${i + 1}`} className="header__list-item">
          <Link className="header__list-link" to={link.path}>{link.title}</Link>
        </li>
      ))}
    </ul>
  );
}

export default DropMenu;