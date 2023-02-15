import classNames from 'classnames';
import { Link } from 'react-router-dom';
import { CATEGORIES } from '../constants/categories';
import { Pages } from '../enums/Page';
import { useActions } from '../hooks/useActions';
import { useTypedSelector } from '../hooks/useTypedSelector';

interface Props {
    className?: string;
}

const NavHeader = ({ className }: Props) => {
    const { activeCategory } = useTypedSelector((state) => state.categoryReducer);
    const { setCategory } = useActions();

    return (
        <nav className={classNames('nav-header', className)}>
            <ul className="nav-header__list">
                {
                    CATEGORIES.map((category, index) => (
                        <li key={category.href}>
                            <Link to={Pages.Home.path} onClick={() => setCategory(index)} className={classNames('nav-header__link', {
                                'active': index === activeCategory
                            })}>{category.text}</Link>
                        </li>
                    ))
                }
            </ul>
        </nav>
    );
}

export default NavHeader;