import classNames from 'classnames';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AppContext } from '../context';

interface Props {
    className?: string;
}

const NavHeader = ({ className }: Props) => {
    //const { categories, activeCategory, onChangeCategory } = useContext(AppContext);

    return (
        <nav className={classNames('nav-header', className)}>
            <ul className="nav-header__list">

            </ul>
        </nav>
    );
}

export default NavHeader;

/* {
    categories.map((category, i) => (
        <li key={category.href}>
            <Link to="/home" onClick={() => onChangeCategory(i)} className={classNames('nav-header__link', {
                'active': i === activeCategory
            })}>{category.text}</Link>
        </li>
    ))
} */