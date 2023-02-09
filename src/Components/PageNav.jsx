import classNames from 'classnames';
import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { Link, useRouteMatch } from 'react-router-dom/cjs/react-router-dom.min';
import { RouterContext } from '../context';

function PageNav() {
    const { routes } = useContext(RouterContext);

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