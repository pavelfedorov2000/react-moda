import classNames from 'classnames';
import { Link } from 'react-router-dom';
import { CATEGORIES } from '../constants/categories';
import { Pages } from '../enums/Page';
import { useActions } from '../hooks/useActions';
import { useTypedSelector } from '../hooks/useTypedSelector';
import { ClassName } from '../enums/ClassName';
import { WithClassName } from '../types/types';

const mainClass = 'nav-header';

const NavHeader = ({ className }: WithClassName) => {
    const { activeCategory } = useTypedSelector((state) => state.categoryReducer);
    const { setCategory } = useActions();

    return (
        <nav className={classNames(mainClass, className)}>
            <ul className={`${mainClass}__list`}>
                {CATEGORIES.map((category, index) => (
                    <li key={category.href}>
                        <Link to={Pages.Home.path} onClick={() => setCategory(index)} className={classNames(`${mainClass}__link`, {
                            [ClassName.Active]: index === activeCategory
                        })}>
                            {category.text}
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
}

export default NavHeader;