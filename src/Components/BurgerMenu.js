import classNames from 'classnames';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import close from '../assets/images/icons/close-thin.svg';
import { ShopsSearch, HeaderRegion, Call, WhatsApp } from '../Components';
import { AppContext } from '../context';

function BurgerMenu({ visibleBurgerMenu, onCloseBurgerMenu, dropMenuCategories, links }) {
    const { activeCategory, onChangeCategory, categories } = useContext(AppContext);

    return (
        <div className={classNames('burger-menu', {
            'active': visibleBurgerMenu
        })}>
            <div className="burger-menu__top">
                <button onClick={onCloseBurgerMenu} className="burger-menu__close" type="button" aria-label="Закрыть меню">
                    <img src={close} alt="крестик" width="20" height="20" />
                </button>

                <nav className="header__nav">
                    {categories.map((category, i) => (
                        <Link key={category.name} to={`/${category.name}`} onClick={() => onChangeCategory(i)} className={classNames('header__nav-link', {
                            'active': category.name === activeCategory
                        })}>{category.text}</Link>
                    ))}
                </nav>
            </div>

            <HeaderRegion />

            <ul className="burger-menu__list">
                {dropMenuCategories.map(link => (
                    <li key={link.toString()} className="burger-menu__list-item">
                        <Link className="burger-menu__list-link" to={link.path}>{link.title}</Link>
                    </li>
                ))}

                {links.reverse().map((link, i) => (
                    <li key={link.toString()} className="burger-menu__list-item">
                        <Link className={classNames('burger-menu__list-link', {
                            'burger-menu__list-link--red': i === links.reverse().length - 1
                        })} to={link.path}>{link.title}</Link>
                    </li>
                ))}
            </ul>

            <div className="burger-menu__bottom">
                <ShopsSearch />

                <div className="header__contact">
                    <Call className="header__call" />
                    <WhatsApp />
                </div>
            </div>
        </div>
    );
}

export default BurgerMenu;