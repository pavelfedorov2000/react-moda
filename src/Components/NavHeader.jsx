import classNames from 'classnames';
import React from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AppContext } from '../context';

const NavHeader = () => {
    const { categories, activeCategory, onChangeCategory } = useContext(AppContext);

    return (
        <nav className="header__nav nav-header">
            <ul className="nav-header__list">
                {categories.map((category, i) => (
                    <li key={category.href}>
                        <Link to="/home" onClick={() => onChangeCategory(i)} className={classNames('nav-header__link', {
                            'active': i === activeCategory
                        })}>{category.text}</Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
}

export default NavHeader;