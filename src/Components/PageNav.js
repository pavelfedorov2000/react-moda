import classNames from 'classnames';
import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { Link, useRouteMatch } from 'react-router-dom/cjs/react-router-dom.min';
import { RouterContext } from '../context';

function PageNav() {
    const { routes } = useContext(RouterContext);
    const profileRoutes = routes.filter(route => route.profile === true);

    const url = useRouteMatch().url;

    return (
        <nav className="page-nav">
            <ul className="page-nav__list">
                {profileRoutes.map(route => (
                    <li key={route.path} className="page-nav__item">
                        <Link to={route.path} className={classNames('page-nav__link', {
                            'active': route.path === url
                        })}>{route.title}</Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
}

/* {
    profileLinks.map(link => (
        <li key={link.component} className="page-nav__item">
            <Link to={`${url}/${link.path}`} className={classNames('page-nav__link', {
                'active': link.component === link.name
            })} onClick={onClickLink}>{link.name}</Link>
        </li>
    ))
} */

export default PageNav;