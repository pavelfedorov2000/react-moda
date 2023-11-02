import classNames from 'classnames';
import { useRouteMatch } from 'react-router-dom';
import { Link, useParams } from 'react-router-dom';
import { routes } from '../../constants/routes';
import { ClassName } from '../../enums/ClassName';

const mainClass = 'page-nav';

const PageNav = () => {
    const url = useRouteMatch().url;
    const { index } = useParams();

    const profileRoutes = routes.filter((route) => route.profile && !route.notVisible);

    return (
        <nav className={mainClass}>
            <ul className={`${mainClass}__list`}>
                {profileRoutes.map((route, i) => (
                    <li key={route.path} className={`${mainClass}__item`}>
                        <Link to={route.path} className={classNames(`${mainClass}__link`, {
                            [ClassName.Active]: route.path === url || index == i
                        })}>{route.title}</Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
}

export default PageNav;