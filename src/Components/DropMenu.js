import React from 'react';
import { Link } from 'react-router-dom';
import SaleItem from './SaleItem';
import dropMenuSale from '../assets/images/content/drop-menu-img.jpg';

function DropMenu({ src, title, descr }) {
  const dropMenuCategories = [
    {
      title: "Одежда",
      path: "catalog"
    },
    {
      title: "Обувь",
      path: "catalog"
    },
    {
      title: "Аксессуары",
      path: "catalog"
    },
    {
      title: "Бренды",
      path: "brands"
    },
    {
      title: "Новинки",
      path: "catalog"
    },
  ];
  const links = [
    {
      title: "Распродажа",
      path: "catalog"
    },
    {
      title: "Блог",
      path: "blog"
    },
    {
      title: "Новости",
      path: "news"
    }
  ];
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
                <div className={`drop-menu__col drop-menu__col--${i + 1}`}>
                  <h6 className="drop-menu__col-title">
                    {i === 0 ? `Вс${(index === 0 || index === 1) ? 'я' : 'е'} ${item.title}` : key}
                  </h6>
                  <ul className="drop-menu__list">
                    {dropMenuItems[key].map((li, j) => (
                      <li key={`li-${j}`} className="drop-menu__list-item">
                        <a href="#" className="drop-menu__list-link">{li}</a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
              <SaleItem className="drop-menu__sale" src={dropMenuSale} title="Новинки зима 2022" descr="Зимняя коллекция" />
            </div>
          </div>
        </li>
      ))}
      {links.map((link, i) => (
        <li key={`link-${i}`} className="header__list-item">
          <Link className="header__list-link" to={link.path}>{link.title}</Link>
        </li>
      ))}
    </ul>
  );
}

export default DropMenu;