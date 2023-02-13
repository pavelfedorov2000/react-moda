import classNames from 'classnames';
import { useRouteMatch } from 'react-router-dom';
import { Link, useParams } from 'react-router-dom';
import { routes } from '../constants/routes';

const PageNav = () => {
    const url = useRouteMatch().url;
    const { index } = useParams();

    const profileRoutes = routes.filter(route => route.profile && !route.notVisible);

    return (
        <nav className="page-nav">
            <ul className="page-nav__list">
                {profileRoutes.map((route, i) => (
                    <li key={route.path} className="page-nav__item">
                        <Link to={route.path} className={classNames('page-nav__link', {
                            'active': route.path === url || index == i
                        })}>{route.title}</Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
}

export default PageNav;